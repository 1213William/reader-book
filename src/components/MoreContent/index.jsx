import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import lang from "@/assets/lang.jpg";
import "./index.scss";
import { request } from "@/common/helper";
import Taro from '@tarojs/taro'

class MoreContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotListData: {}
    };
  }

  componentDidMount() {
    request("/haohuidu/app/book/hot", "GET").then(resp => {
      console.log("resp ", resp);
      this.setState({
        hotListData: resp.hotData
      });
    });
  }

  render() {
    const { hotListData } = this.state;
    return (
      <View className="more-content">
        <View className="wrapper">
          <View className="content-title">更多</View>
          {hotListData.list
            ? hotListData.list.map(item => {
                return (
                  <View className="theme-content-hot" onClick={
                    () => {
                      Taro.navigateTo({
                        url: '../bookDetail/bookDetail?bookId=' + item.id
                      })
                    }
                  }>
                    <Image className="theme-img" src={item.coverUrl}></Image>
                    <View className="content-wrapper">
                      <View className="wrapper-top">
                        <View className="content-title">{item.title}</View>
                        <View className="content-subhead">{item.intro}</View>
                      </View>
                    </View>
                    <View className="wrapper-bottom-hot">
                      <Text className="book-reader">{`${item.sales}个孩子已阅读`}</Text>
                    </View>
                  </View>
                );
              })
            : ""}
        </View>
      </View>
    );
  }
}

export default MoreContent;
