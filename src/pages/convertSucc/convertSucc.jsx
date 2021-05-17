import React, { Component } from "react";
import "./convertSucc.scss";
import { View, Text, Image } from "@tarojs/components";
import readerPayBg from "@/assets/readerPayBg.png";
import MoreRecommedView from "@/components/MoreRecommedView";
import ThemeRecommed from "@/components/ThemeRecommed";
import HotRank from "@/components/HotRank";
import Taro from "@tarojs/taro";
import wxPayBg from "@/assets/wxPayBg.png";

class ConvertSucc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "convert succ"
    };
  }

  wxPayTips = () => {
    return (
      <View className="header-img">
        <Image src={wxPayBg} className="reader-pay-bg" />
        <Text className="convert-text">支付成功</Text>
      </View>
    );
  };

  readerPayTips = () => {
    return (
      <View className="header-img">
        <Image src={readerPayBg} className="reader-pay-bg" />
        <Text className="convert-text">兑换成功</Text>
      </View>
    );
  };

  render() {
    const { msg } = this.state;
    return (
      <View className="convert-succ">
        <View className="wrapper">
          {/* 微信支付 */}
          {/* {this.wxPayTips()} */}
          {/* 阅读券 */}
          {this.readerPayTips()}

          <View className="button-list">
            <View
              className="return-page"
              onClick={() => {
                Taro.switchTab({
                  url: "../index/index"
                });
              }}
            >
              返回首页
            </View>
            <View
              className="check-order-form"
              onClick={() => {
                Taro.navigateTo({
                  url: "../checkOrderForm/checkOrderForm"
                });
              }}
            >
              查看订单
            </View>
          </View>
          <View style={{ marginTop: "50px" }}>
            <MoreRecommedView />
          </View>
          <View>
            <ThemeRecommed />
          </View>

          <View style={{ marginBottom: "82.5px" }}>
            <HotRank />
          </View>
        </View>
      </View>
    );
  }
}

export default ConvertSucc;
