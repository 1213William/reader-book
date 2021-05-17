import React, { Component } from "react";
import "./joinMember.scss";
import { View, Text, Image } from "@tarojs/components";
import memberBg from "@/assets/memberBg.png";
import joinMemberBg from "@/assets/joinMemberBg.png";
import Member from "../owner/equity/member";
import Basic from '../owner/equity/basic'
import BuyMember from './buyMember'
import Taro from '@tarojs/taro'

class JoinMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "join member"
    };
  }

  componentDidMount() {
    Taro.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#2B2F3E",
      animation: {
        duration: 400,
        timingFunc: "easeIn"
      }
    });
  }

  render() {
    const { msg } = this.state;
    return (
      <View className="join-member">
        <View className="wrapper">
          <Image src={memberBg} className="member-view-img" />
          <Image src={joinMemberBg} className="member-card-img" />
          <Member />
          <Basic />
          <BuyMember />
        </View>
      </View>
    );
  }
}

export default JoinMember;
