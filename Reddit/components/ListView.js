import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Button, Picker } from "react-native";
import { List, ListItem } from "react-native-elements";
import ItemView from "./ItemView";
import { StackNavigator } from "react-navigation";

export default class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], refreshing: false, sort: { order: null } };
  }
  static navigationOptions = {
    title: "Latest Reddit"
  };
  getPosts = async () => {
    const list = await fetch("https://api.reddit.com/r/pics/new.json");
    const rawData = JSON.parse(list._bodyInit).data.children;
    console.log("state now, gettin posts... ", this.state.sort.order);
    if (this.state.sort.order) this.sortPosts(rawData);
    const postsInfo = rawData.map(post => {
      return {
        id: post.data.id,
        author: post.data.author,
        created: post.data.created,
        score: post.data.score,
        thumbnail: post.data.thumbnail,
        title: post.data.title,
        comments: post.data.num_comments,
        link: `https://i.reddit.com${post.data.permalink}`
      };
    });
    this.setState({ posts: postsInfo, refreshing: false });
  };

  sortPosts(data) {
    switch (this.state.sort.order) {
      case "top":
        data.sort((a, b) => {
          return b.data.score - a.data.score;
        });
        break;
      case "new":
        data.sort((a, b) => {
          return b.data.created - a.data.created;
        });
        break;
      case "hot":
        data.sort((a, b) => {
          return b.data.num_comments - a.data.num_comments;
        });
        break;
    }

    this.setState({ sort: { order: null } });
  }

  handleRefresh = async () => {
    this.setState({
      refreshing: true,
      posts: []
    });
  };
  // =========== RENDERING
  render() {
    console.log("state", this.state.sort);
    const { navigate } = this.props.navigation;
    if (!this.state.posts.length || this.state.sort.order) this.getPosts();
    return (
      <View style={{ backgroundColor: "#D2E3F6" }}>
        <Picker
          selectedValue={this.state.sort}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sort: { order: itemValue } })
          }
        >
          <Picker.Item label="no sort" value={null} />
          <Picker.Item label="new" value="new" />
          <Picker.Item label="hot" value="hot" />
          <Picker.Item label="top" value="top" />
          <Picker.Item label="controversial" value="controversial" />
        </Picker>
        <List>
          <FlatList
            data={this.state.posts}
            renderItem={({ item }) => (
              <ItemView postInfo={item} navigation={navigate} />
            )}
            keyExtractor={item => item.id}
            refreshing={this.state.refreshing}
            onRefresh={() => this.handleRefresh()}
          />
        </List>
      </View>
    );
  }
}
