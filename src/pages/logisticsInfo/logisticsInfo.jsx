import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./logisticsInfo.scss";
import IconFont from "@/components/iconfont";

class LogisticsInfo extends Component {
  render() {
    return (
      <View className="logistics-info">
        <View className="info-wrapper">
          <View className="info-header">
            <View className="header-left">
              <IconFont name="dizhi" size="50" />
            </View>
            <View className="header-right">
              <View className="right-top">
                <Text className="top-name">屠林涛</Text>
                <Text className="top-phone">13017702303</Text>
              </View>
              <View className="right-bottom">
                浙江省绍兴市上虞区惠普广场惠普广场惠普广场
              </View>
            </View>
          </View>
        </View>
        <View className="logistics-info-temp"></View>

        <View className="info-middle">
          <Text className="middle-type">中通快递</Text>
          <Text className="middle-number">3458979374597239457923</Text>
        </View>
        <View className="info-bottom">
          <View className="bottom-status-item">
            <View className="item-left">
              <Text className="item-left-top">01-12</Text>
              <Text className="item-left-bottom">19:00</Text>
            </View>
            <View className="item-right">
              <Text className="item-right-top">已签收</Text>
              <Text className="item-right-bottom">
                您已在上虞滨江重信誉啊791便利店完成取件
              </Text>
            </View>
          </View>
          <View className="bottom-status-item">
            <View className="item-left">
              <Text className="item-left-top">01-12</Text>
              <Text className="item-left-bottom">19:00</Text>
            </View>
            <View className="item-right">
              <Text className="item-right-top">已签收</Text>
              <Text className="item-right-bottom">
                您已在上虞滨江重信誉啊791便利店完成取件
              </Text>
            </View>
          </View>
          <View className="bottom-status-item">
            <View className="item-left">
              <Text className="item-left-top">01-12</Text>
              <Text className="item-left-bottom">19:00</Text>
            </View>
            <View className="item-right">
              <Text className="item-right-top">已签收</Text>
              <Text className="item-right-bottom">
                您已在上虞滨江重信誉啊791便利店完成取件
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default LogisticsInfo;
