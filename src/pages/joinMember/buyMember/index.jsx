import React, { Component } from "react";
import "./index.scss";
import { View, Text, Image } from "@tarojs/components";
import wxPay from "@/assets/wxPay.png";
import Taro from '@tarojs/taro'

class BuyMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "buy member"
    };
  }

  render() {
    const { msg } = this.state;
    return (
      <View className="buy-member">
        <View className="member-title">
          <Text>购买会员</Text>
        </View>
        <View className="pay-list">
          <View className="wx-pay">
            <Image src={wxPay} className="wx" />
            <View className='temp'>原价</View>
            <View className='price'>¥ 299</View>
            <View className='pay-btn'>微信支付</View>
          </View>
          <View className="three-pay">
            <Image src={wxPay} className="three" />
            <View className='temp'>团购价</View>
            <View className='price'>
              <Text className='laofeiwu'>¥ 99</Text>
              <Text className='feiwu'>¥299</Text>
              <View className="recommed">推荐</View>
            </View>
            <View className='pay-btn'>发起三人团</View>
          </View>
        </View>
      </View>
    );
  }
}

export default BuyMember;
