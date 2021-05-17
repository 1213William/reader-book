import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import { request } from "@/common/helper";
import Taro from "@tarojs/taro";

class ThemeRecommed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeList: [] // 主题列表
    };
  }

  componentDidMount() {
    let themeRecommedData = {
      token: Taro.getStorageSync("token")
    };
    request("/haohuidu/app/book/theme", "GET", themeRecommedData).then(resp => {
      this.setState({
        themeList: resp.themeData.list
      });
    });
  }

  render() {
    const { themeList } = this.state;
    return (
      <View className="more-theme">
        <View className="theme-title">
          <View className="title-name">主题推荐</View>
          <View className="theme-recommed-temp">|</View>
          <View className="title-tag">为孩子制定阅读主题</View>
        </View>
        <View className="theme-content-wrapper">
          {themeList.map((res, index) => {
            return (
              <View
                className="theme-content"
                onClick={() => {
                  Taro.navigateTo({
                    url: "../../pages/themeRecommedPage/ThemeRecommedPage?themeId=" + res.id
                  });
                }}
              >
                <Image className="theme-img" src={res.coverUrl}></Image>
                <View className="content-wrapper">
                  <View className="wrapper-top">
                    <View className="content-title">{res.title}</View>
                    <View className="content-subhead">{res.subtitle}</View>
                  </View>
                  <View className="wrapper-bottom">
                    <Text className="book-count">{`${res.bookAmount}本`}</Text>
                    <Text className="book-reader">{`${res.uv}个孩子已阅读`}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default ThemeRecommed;
