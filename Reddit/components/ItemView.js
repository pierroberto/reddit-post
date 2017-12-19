import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";
import PostDetails from "./PostDetails";
import "moment-timezone";
const moment = require("moment");
import { StackNavigator } from "react-navigation";

// import { Stack1 } from "../config/routes";

const SimpleApp = StackNavigator({
  PostDetails: { screen: PostDetails }
});

export default class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: { info: {}, active: false } };
  }

  showItem(e) {
    this.setState({ item: { info: e, active: true } });
  }
  display(e) {
    console.log("CLICK");
  }
  // =========== RENDERING
  render() {
    const navigate = this.props.navigation;
    //if (this.state.item.active) return <PostDetails />;
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
          onPress={() => navigate("PostDetails", { post: this.props.postInfo })} //this.showItem(this.props.postInfo)
        />
      </View>
    );
  }
}
