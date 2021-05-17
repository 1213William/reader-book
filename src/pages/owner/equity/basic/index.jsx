import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import IconFont from "@/components/iconfont";

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "basic"
    };
  }

  render() {
    const { msg } = this.state;
    return (
      <View className="basic">
        <View className="basic-title">基础权益</View>
        <View className="basic-desc">
          <View className="desc-temp">
            <View className="icon">
              <IconFont name="shu" size={50}></IconFont>
            </View>
            <Text className="icon-title">1000+书</Text>
            <Text className="icon-tag">兴趣选择</Text>
          </View>
          <View className="desc-temp">
            <View className="icon">
              <IconFont name="siweidaotu" size={50}></IconFont>
            </View>
            <Text className="icon-title">思维导图</Text>
            <Text className="icon-tag">辅助阅读</Text>
          </View>
          <View className="desc-temp">
            <View className="icon">
              <IconFont name="shipindaodu" size={50}></IconFont>
            </View>
            <Text className="icon-title">视频导读</Text>
            <Text className="icon-tag">专业讲解</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Basic;
