import React, { Component } from "react";
import { View, Button } from "@tarojs/components";
import "./owner.scss";
import Member from "./equity/member";
import Basic from "./equity/basic";
import OrderForm from "./orderForm";
import Invite from "./invite";
import MemberCard from "./card/memberCard";
import MemberNotCard from "./card/memberNotCard";
import PastDue from "./card/pastDue";
import Taro from "@tarojs/taro";
import lang from "@/assets/lang.jpg";
import IconFont from "@/components/iconfont";
import { request } from "@/common/helper";

class Owner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    request("/haohuidu/app/user", "GET").then(resp => {
      this.setState(
        {
          userData: resp.user
        },
        () => {
          if (resp.user.isVip) {
            Taro.setNavigationBarColor({
              frontColor: "#ffffff",
              backgroundColor: "#2B2F3E",
              animation: {
                duration: 400,
                timingFunc: "easeIn"
              }
            });
          }
        }
      );
    });
  }

  onShareAppMessage(e) {
    return {
      title: "赶紧邀请好友吧！",
      path: "/pages/index/index",
      imageUrl:
        "https://haohuidu.oss-cn-hangzhou.aliyuncs.com/app/static/images/inviteMemberBg.png"
    };
  }

  serviceItemRender = () => {
    return (
      <View className="service">
        <View className="icon">
          <IconFont name="kefu" size="145" />
        </View>
      </View>
    );
  };

  render() {
    const { userData } = this.state;
    return (
      <View className="book-rack">
        <View className="book-wrapper">
          {/* 会员 */}
          <MemberCard userData={userData} />
          {/* 非会员 */}
          {/* <MemberNotCard /> */}
          {/* 过期 */}
          {/* <PastDue /> */}
          <Invite />
          <Member />
          <Basic />
          <OrderForm />
          {/* {this.serviceItemRender()} */}
        </View>
      </View>
    );
  }
}

export default Owner;
