import React, { Component } from "react";
import { View, Text, Input, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import { request, onloadUserInfo } from "@/common/helper";
import HeaderInput from "@/components/HeaderInput";
import MRecommed from "@/components/MRecommed";
import headerBg from "@/assets/headerBg.png";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import ReaderAssess from "@/components/ReaderAssess";
import ThemeRecommed from "@/components/ThemeRecommed";
import HotRank from "@/components/HotRank";
import Footer from "@/components/Footer";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "change tag"
    };
  }
  onLoad() {
    let token = Taro.getStorageSync("token");
    if (!token) {
      Taro.showModal({
        title: "提示",
        content:
          "若不授权微信登录，则无法使用相关功能；点击重新获取授权，则可重新使用。",
        cancelText: "不授权",
        confirmText: "去授权",
        success: res => {
          if (res.confirm) {
            Taro.navigateTo({
              url: "../getUserInfo/getUserInfo"
            });
          } else if (res.cancel) {
            Taro.showModal({
              title: "提示",
              content: "未授权，无法流畅使用主要功能",
              showCancel: false
            });
          }
        }
      });
    }
  }

  render() {
    return (
      <View className="index">
        {/* <AtButton onClick={
          () => {
            Taro.requestPayment({
              timeStamp: '123',
              nonceStr: '123',
              package: '123',
              signType: 'MD5',
              paySign: '123',
              success: function (res) {
                console.log(res)
              },
              fail: function (res) { 
                console.log(res)
              }
            })
          }
        }>支付</AtButton> */}
        <Image src={headerBg} className="header-bg" />
        <View className="index-wrapper">
          <HeaderInput />
          <MRecommed />
          {/* 阅读评估 */}
          {/* <ReaderAssess /> */}
          <ThemeRecommed />
          <HotRank />
          <Footer />
        </View>
      </View>
    );
  }
}
