import React, { Component } from "react";
import { WebView } from "react-native";

export default class PostDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Back"
  };

  // =========== RENDERING
  render() {
    return (
      <WebView
        source={{ uri: this.props.navigation.state.params.post.link }}
        style={{ marginTop: 20 }}
        scalesPageToFit={true}
      />
    );
  }
}
