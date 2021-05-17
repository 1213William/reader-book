import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import dredge from "@/assets/dredge.png";
import lang from "@/assets/lang.jpg";
import IconFont from "@/components/iconfont";
import Taro from "@tarojs/taro";
import memberBg from "@/assets/memberBg.png";

class MemberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "member card"
    };
  }

  // componentDidMount() {
  //   console.log(this.props)
  //   debugger
  // }

  render() {
    const { msg } = this.state;

    let { userData } = this.props;
    console.log('userData ', userData)
    return (
      <View className="member-card">
        <Image src={memberBg} className="member-view-img" />
        <Image src={dredge} className="member-card-img" />
        <View className="member-info">
          <View className="info-header">
            <View className="header-left">
              <Image src={userData.avatarUrl} />
              <View className="info-link-man">
                <Text className="link-man-name">{userData.username}</Text>
                <View className="link-man-bottom">
                  <Text className="link-man-deadline">{userData.vipExpire}到期</Text>
                  <Text className="text-temp"></Text>
                  <Text className="quanyi">权益记录</Text>
                </View>
              </View>
            </View>
            {/* <View className="header-right">
              <Text>权益记录</Text>
            </View> */}
          </View>
          <View className="info-middle">
            <Text>当前阅读券：{userData.bookTicket} 张</Text>
            <View className="icon">
              <IconFont name="kaitonghuiyuan-tishi" size="25" />
            </View>
          </View>
          <View className="info-bottom">
            您的孩子在好慧读的学习时间已经将近{userData.learningTime}个月了！
          </View>
        </View>
      </View>
    );
  }
}

export default MemberCard;
