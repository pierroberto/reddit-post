import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";

export default class ItemView extends React.Component {
  constructor(props) {
    super(props);
  }

  // =========== RENDERING
  render() {
    console.log("posts", this.props.postInfo);
    return (
      <View>
        <ListItem
          title={this.props.postInfo.title}
          avatar={this.props.postInfo.thumbnail}
          badge={{ value: this.props.postInfo.comments }}
          subtitle={this.props.postInfo.author}
        />
      </View>
    );
  }
}
