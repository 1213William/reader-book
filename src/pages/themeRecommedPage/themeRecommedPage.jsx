import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./themeRecommedPage.scss";
import lang from "@/assets/lang.jpg";
import MoreRecommedView from "@/components/MoreRecommedView";
import ThemeRecommed from "@/components/ThemeRecommed";
import HotRank from "@/components/HotRank";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { request } from "@/common/helper";

class ThemeRecommedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeData: {}
    };
  }

  componentDidMount() {
    let { themeId } = getCurrentInstance().router.params;
    console.log(themeId);
    let themeReqData = {
      themeId
    };
    request("/haohuidu/app/book/theme/detail", "GET", themeReqData).then(
      resp => {
        this.setState(
          {
            themeData: resp.themeBookData
          },
          () => {
            console.log(this.state);
          }
        );
      }
    );
  }

  render() {
    const { themeData } = this.state;
    return (
      <View className="theme-recommed">
        <Image
          className="theme-recommed-img"
          src="https://haohuidu.oss-cn-hangzhou.aliyuncs.com/app/static/images/themeRBj.png"
        />
        <View className="theme-recommed-wrapper">
          <View className="recommed-header">
            <View className="recommed-header-top">亲子阅读，优质陪伴</View>
            <View className="recommed-header-middle">
              <Text>和孩子共同成长</Text>
              <View className="header-middle-temp"></View>
              <Text>{themeData.total}本</Text>
            </View>
            <View className="recommed-header-bottom">
              以书为媒，以阅读为纽带，让孩子和家长共同分享多种形式的阅读过程。通过共读，父母与孩子共同学习，一同成长。
            </View>
          </View>

          {themeData.list
            ? themeData.list.map(item => {
                return (
                  <View
                    className="theme-content"
                    onClick={() => {
                      Taro.navigateTo({
                        url: "../bookDetail/bookDetail?bookId=" + item.id
                      });
                    }}
                  >
                    <Image className="theme-img" src={item.coverUrl}></Image>
                    <View className="content-wrapper-page">
                      <View className="wrapper-top">
                        <View className="content-title">{item.title}</View>
                        <View className="content-subhead">
                          {item.recommendReason}
                        </View>
                      </View>
                    </View>
                    <View className="wrapper-bottom-page">
                      <Text className="book-reader">{`${item.sales}个孩子已阅读`}</Text>
                    </View>
                  </View>
                );
              })
            : ""}

          <MoreRecommedView />
          <View style={{ marginTop: "-30px" }}>
            <ThemeRecommed />
          </View>
          <View style={{ marginBottom: "57px" }}>
            <HotRank />
          </View>
        </View>
      </View>
    );
  }
}

export default ThemeRecommedPage;
