import React, { Component } from "react";
import "./index.scss";
import { View, Text } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import Taro from "@tarojs/taro";
import { request } from "@/common/helper";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "order form"
    };
  }

  // componentDidMount() {
  //   request('/haohuidu/app/user/order/status', 'GET')
  //   .then(resp => {
  //     console.log('resp ', resp)
  //   })
  // }

  toOrderFormList = type => {
    Taro.navigateTo({
      url: "../orderFormList/orderFormList?type=" + type
    });
  };

  render() {
    const { msg } = this.state;
    return (
      <View className="order-form">
        <View className="order-form-title">
          <View className="title">我的订单</View>
          <View className="title-check-all" onClick={() => this.toOrderFormList(-1)}>
            <Text>全部</Text>
            <IconFont name="gengduo2" size="20"></IconFont>
          </View>
        </View>
        <View className="order-form-desc">
          <View className="desc-temp" onClick={() => this.toOrderFormList(0)}>
            <View className="icon">
              <View className="dot daizhifu">1</View>
              <IconFont name="daizhifu" size={55}></IconFont>
            </View>
            <Text>待支付</Text>
          </View>
          <View className="desc-temp" onClick={() => this.toOrderFormList(2)}>
            <View className="icon">
              <View className="dot daishouhuo">10</View>
              <IconFont name="daishouhuo" size={55}></IconFont>
            </View>
            <Text>待收货</Text>
          </View>
          <View className="desc-temp" onClick={() => {
            Taro.navigateTo({
              url: '../goToEvaluate/goToEvaluate'
            })
          }}>
            <View className="icon">
              <View className="dot daipingjia">10</View>
              <IconFont name="daipingjia" size={55}></IconFont>
            </View>
            <Text>待评价</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default OrderForm;
