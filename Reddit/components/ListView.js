import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";
import ItemView from "./ItemView";
// import { Stack1 } from "../config/routes";
import { StackNavigator } from "react-navigation";

export default class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], refreshing: false };
  }
  getPosts = async () => {
    const list = await fetch("https://api.reddit.com/r/pics/new.json");
    const rawData = JSON.parse(list._bodyInit).data.children;
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

  handleRefresh = async () => {
    console.log("hello");
    this.setState({
      refreshing: true,
      posts: []
    });
  };
  // =========== RENDERING
  render() {
    console.log("refreshing... ", this.state.posts.length);
    const { navigate } = this.props.navigation;
    if (!this.state.posts.length) this.getPosts();
    return (
      <View>
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
