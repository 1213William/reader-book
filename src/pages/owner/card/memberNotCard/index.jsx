import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import notDredge from "@/assets/notDredge.png";
import lang from "@/assets/lang.jpg";
import IconFont from "@/components/iconfont";
import Taro from "@tarojs/taro";

class MemberNotCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "member not card"
    };
  }

  render() {
    const { msg } = this.state;
    return (
      <View className="member-not-card">
        <Image src={notDredge} className="member-bg" />
        <View className="not-member-info">
          <View className="info-header">
            <View className="header-left">
              <Image src={lang} className="member-logo" />
              <Text>何春杰</Text>
            </View>
            <View
              className="header-right"
              onClick={() => {
                Taro.navigateTo({ url: "../../../../joinMember/joinMember" });
              }}
            >
              加入会员
            </View>
          </View>
          <View className="info-middle">
            <Text>当前阅读券：0 张</Text>
            <View className="icon">
              <IconFont name="tishi" size="25" />
            </View>
          </View>
          <View className="info-bottom">
            加入好慧读成为会员，让孩子开始阅读吧！
          </View>
        </View>
      </View>
    );
  }
}

export default MemberNotCard;
