import React, { Component } from "react";
import "./index.scss";
import { View, Text } from "@tarojs/components";

class MoreRecommedView extends Component {
  render() {
    return (
      <View className="more-recommed">
        <View className="temp temp-left"></View>
        <Text className="tag">更多推荐</Text>
        <View className="temp temp-right"></View>
      </View>
    );
  }
}

export default MoreRecommedView;
