import React from "react";
import ListView from "./components/ListView";
import PostDetails from "./components/PostDetails";
import { StackNavigator } from "react-navigation";

const Navigation = StackNavigator({
  ListView: {
    screen: ListView
  },
  PostDetails: {
    screen: PostDetails
  }
});

export default Navigation;
