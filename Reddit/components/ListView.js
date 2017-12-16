import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  getInfo = async () => {
    const rawData = await this.props.postInfo;
  };
  // =========== RENDERING
  render() {
    {
      this.getInfo();
    }
    return <Text>Hello ListView </Text>;
  }
}
