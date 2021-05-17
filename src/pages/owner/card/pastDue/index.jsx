import React, { Component } from "react";
import { Image, View, Text } from "@tarojs/components";
import "./index.scss";
import memberBg from "@/assets/memberBg.png";
import dredge from "@/assets/dredge.png";
import memberPastDue from "@/assets/memberPastDue.png";
import lang from "@/assets/lang.jpg";
import IconFont from "@/components/iconfont";

class PastDue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "past due"
    };
  }

  render() {
    const { msg } = this.state;
    return (
      <View className="past-due">
        <Image src={memberBg} className="member-view-img" />
        <Image src={memberPastDue} className="member-card-img" />
        <View className="past-due-header">
          <Image src={lang} className='header-img' />
          <View className="header-info">
            <Text className="info-name">何春杰</Text>
            <View className="info-temp">
              <Text className="temp-date">2020-08-09到期</Text>
              <View className="temp"></View>
              <Text className="temp-quanyi">权益记录</Text>
            </View>
          </View>
        </View>
        <View className="past-due-middle">
          <View className="middle-left">
            <Text className='left-count'>当前阅读券：2 张</Text>
            <View className="icon">
              <IconFont name='kaitonghuiyuan-tishi' size='25' />
            </View>
          </View>
          <View className="middle-right">立即续费</View>
        </View>
        <View className="past-due-bottom">
          好慧读的会员服务已经让孩子学习了12个月了！
        </View>
      </View>
    );
  }
}

export default PastDue;
