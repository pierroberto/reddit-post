import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";
import ItemView from "./ItemView";
export default class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  getInfo = async () => {
    const postsInfo = await this.props.post;
    this.setState({ posts: postsInfo });
  };
  // =========== RENDERING
  render() {
    if (this.state.posts.length === 0) this.getInfo();
    return (
      <View>
        <List>
          <FlatList
            data={this.state.posts}
            renderItem={({ item }) => <ItemView postInfo={item} />}
            keyExtractor={item => item.id}
          />
        </List>
      </View>
    );
  }
}
