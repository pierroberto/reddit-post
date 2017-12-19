import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";
import { StackNavigator } from "react-navigation";

export default class PostDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Full List"
  };
  // =========== RENDERING
  render() {
    {
      console.log("HERE", this.props.navigation.state.params.post);
    }
    {
      console.log("post details");
    }
    return <Text>Hello</Text>;
  }
}
