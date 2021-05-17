import React, { Component } from "react";
import { Input, View, Text } from "@tarojs/components";
import "./index.scss";
import IconFont from "@/components/iconfont";
import Taro from "@tarojs/taro";

class HeaderInput extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    return (
      <View className="header-input">
        <View
          className="input-left"
          onClick={() => {
            Taro.navigateTo({ url: "../../pages/searchPage/searchPage" });
          }}
        >
          <View className="icon">
            <IconFont name="sousuo-icon" size="34"></IconFont>
          </View>
          <Text>搜索词</Text>
        </View>
        <View
          className="input-right"
          onClick={() => {
            Taro.navigateTo({
              url: "../../pages/stackRoom/stackRoom"
            });
          }}
        >
          <IconFont name="shuku-icon2" size="35"></IconFont>
        </View>
      </View>
    );
  }
}

export default HeaderInput;
