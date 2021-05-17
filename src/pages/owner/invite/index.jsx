import React, { Component } from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import "./index.scss";
import inviteBg from "@/assets/inviteBg.png";
import IconFont from "@/components/iconfont";
import Taro from "@tarojs/taro";

class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "invite"
    };
  }

  render() {
    const { msg } = this.state;
    return (
      <View className="invite">
        <Image src={inviteBg} className="invite-bg" />
        <View className="invite-left">
          <View className="tongzhi">
            <IconFont name="tongzhi" size="24"></IconFont>
          </View>
          <Text>邀请好友加入会员，即得阅读券！</Text>
          <View className="tishi">
            <IconFont name="yaoqingtishi" size="28"></IconFont>
          </View>
        </View>
        <Button className="invite-right" openType="share">
          去邀请
        </Button>
      </View>
    );
  }
}

export default Invite;
