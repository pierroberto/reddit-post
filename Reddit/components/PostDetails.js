import React, { Component } from "react";
import { View, Text, WebView } from "react-native";

import { StackNavigator } from "react-navigation";

export default class PostDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Back"
  };

  // =========== RENDERING
  render() {
    console.log(this.props.navigation.state.params.post.link);
    return (
      <WebView
        source={{ uri: this.props.navigation.state.params.post.link }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
