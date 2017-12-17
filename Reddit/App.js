import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListView from "./components/ListView";

export default class App extends React.Component {
  getPosts = async () => {
    const list = await fetch("https://api.reddit.com/r/pics/new.json");
    const rawData = JSON.parse(list._bodyInit).data.children;
    return rawData.map(post => {
      return {
        id: post.data.id,
        author: post.data.author,
        created: post.data.created,
        score: post.data.score,
        thumbnail: post.data.thumbnail,
        title: post.data.title,
        comments: post.data.num_comments
      };
    });
  };
  // =========== RENDERING
  render() {
    return <ListView post={this.getPosts()} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
