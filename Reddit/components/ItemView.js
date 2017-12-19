import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";
import PostDetails from "./PostDetails";
import "moment-timezone";
import { StackNavigator } from "react-navigation";
const moment = require("moment");

const SimpleApp = StackNavigator({
  PostDetails: { screen: PostDetails }
});

export default class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: { info: {}, active: false } };
  }

  // =========== RENDERING
  render() {
    const navigate = this.props.navigation;
    return (
      <View>
        <ListItem
          title={this.props.postInfo.title}
          wrapperStyle={{
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 20
          }}
          avatar={this.props.postInfo.thumbnail}
          badge={{ value: this.props.postInfo.score }}
          subtitle={`${this.props.postInfo.author} - ${
            this.props.postInfo.comments
          } ${
            this.props.postInfo.comments === 1 ? "comment" : "comments"
          } - ${moment.unix(this.props.postInfo.created).format("MM/DD/YYYY")}
          `}
          onPress={() => navigate("PostDetails", { post: this.props.postInfo })}
        />
      </View>
    );
  }
}
