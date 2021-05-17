import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./hotBookList.scss";
import MoreContent from "@/components/MoreContent";
import { request } from "@tarojs/taro";

class HotBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "this is hot book list"
    };
  }
  componentDidMount () {
    
  }

  render() {
    const { msg } = this.state;
    return (
      <View className="month-recommed">
        <MoreContent />
      </View>
    );
  }
}

export default HotBookList;
