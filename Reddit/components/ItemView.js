import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";
import "moment-timezone";
const moment = require("moment");
export default class ItemView extends React.Component {
  constructor(props) {
    super(props);
  }

  // =========== RENDERING
  render() {
    return (
      <View>
        <ListItem
          title={this.props.postInfo.title}
          avatar={this.props.postInfo.thumbnail}
          badge={{ value: this.props.postInfo.score }}
          subtitle={`${this.props.postInfo.author} - ${
            this.props.postInfo.comments
          } ${
            this.props.postInfo.comments === 1 ? "comment" : "comments"
          } - ${moment.unix(this.props.postInfo.created).format("MM/DD/YYYY")}
          `}
        />
      </View>
    );
  }
}
