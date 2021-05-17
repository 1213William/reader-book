import React, { Component } from "react";
import "./index.scss";
import { View, Text, Image } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import readerIcon from "@/assets/readerIcon.png";
import freeIcon from "@/assets/freeIcon.png";
import saleIcon from "@/assets/saleIcon.png";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "member "
    };
  }

  render() {
    const { msg } = this.state;
    return (
      <View className="member">
        <View className="member-title">
          会员享
          <Text>3</Text>
          大权益
        </View>
        <View className="book-desc">
          <View className="desc">
            <Image src={readerIcon} />
            <Text className="text-title">阅读券</Text>
            <Text className="text-desc">每月一张</Text>
          </View>
          <View className="desc">
            <Image src={freeIcon} />
            <Text className="text-title">免费活动</Text>
            <Text className="text-desc">线下体验</Text>
          </View>
          <View className="desc">
            <Image src={saleIcon} />
            <Text className="text-title">优惠福利</Text>
            <Text className="text-desc">培训机构</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Member;
