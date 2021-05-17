import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./orderFormDetail.scss";
import waitPayBg from "@/assets/waitPayBg.png";
import IconFont from "@/components/iconfont";
import lang from "@/assets/lang.jpg";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { request } from "@/common/helper";

class OrderFormDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "order form detail",
      orderDetailData: {},
      showType: 0
    };
  }

  componentDidMount() {
    let { type, id } = getCurrentInstance().router.params;

    // 请求订单详情
    let orderDetailReqData = {
      orderId: id
    };
    request("/haohuidu/app/user/order/detail", "GET", orderDetailReqData).then(
      resp => {
        console.log("resp ", resp);
        this.setState({
          orderDetailData: resp.orderDetailData,
          showType: type
        });
      }
    );
  }

  waitPayRender = () => {
    return (
      <View className="wait-pay">
        <View className="wait-pay-status">
          <IconFont name="daizhifu1" size="44" />
          <Text className="status-name">待支付</Text>
          <Text className="status-price">需支付¥34.8</Text>
        </View>
        <Text className="status-text">18小时23分钟之后订单自动关闭</Text>
      </View>
    );
  };

  orderFormPersonInfo = () => {
    return (
      <View className="order-form-person-info">
        <View className="wrapper">
          <View className="order-form-info-info">
            <View className="form-info-left">
              <IconFont name="zhengzailushang" size="50" />
              <Text>您的订单正在路上，请耐心等待</Text>
            </View>
            <View className="form-info-right">
              <IconFont name="gengduo2" size="20" />
            </View>
          </View>
          <View className="person-info-info">
            <View className="info-header">
              <IconFont name="dizhi" size={50} />
              <Text className="name">金小明</Text>
              <Text className="phone">13493849494</Text>
            </View>
            <View className="info-bottom">
              浙江省绍兴市上虞区复兴东路惠普广场惠普广 场惠普广场
            </View>
          </View>
        </View>
      </View>
    );
  };

  orderFormFinishPersonInfo = () => {
    return (
      <View className="order-form-person-info">
        <View className="wrapper">
          <View className="sign-for">
            <View className="sign-top">
              <IconFont name="yiqianshou" size="50" />
              <Text>您的订单已签收</Text>
            </View>
            <View className="sign-bottom">
              快递员：张成凯 电话：13456645567
            </View>
          </View>
          <View className="person-info-info">
            <View className="info-header">
              <IconFont name="dizhi" size={50} />
              <Text className="name">金小明</Text>
              <Text className="phone">13493849494</Text>
            </View>
            <View className="info-bottom">
              浙江省绍兴市上虞区复兴东路惠普广场惠普广 场惠普广场
            </View>
          </View>
        </View>
      </View>
    );
  };

  personInfo = () => {
    return (
      <View className="person-info">
        <View className="info-header">
          <IconFont name="dizhi" size={50} />
          <Text className="name">金小明</Text>
          <Text className="phone">13493849494</Text>
        </View>
        <View className="info-bottom">
          浙江省绍兴市上虞区复兴东路惠普广场惠普广 场惠普广场
        </View>
      </View>
    );
  };

  bookDetailRender = () => {
    return (
      <View className="content-middle">
        <Image src={lang} className="middle-img" />
        <View className="middle-right">
          <Text className="right-title">小王子绘本</Text>
          <Text className="right-desc">
            本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
          </Text>
          <View className="price-count">
            <Text className="price">¥34.8</Text>
            <Text className="count">x 1</Text>
          </View>
        </View>
      </View>
    );
  };

  orderFormInfoRender = () => {
    return (
      <View className="order-form-info">
        <View className="order-form-bh">订单编号：9816249871294</View>
        <View className="order-form-time">下单时间：2020-10-11 14:21:04</View>
      </View>
    );
  };

  payInfoRender = () => {
    return (
      <View className="pay-info">
        <View className="info-header">
          <View className="header-left">应付</View>
          <View className="header-right">¥34.8</View>
        </View>
        <View className="info-middle">
          <View className="middle-left">运费</View>
          <View className="middle-right">快递 免邮</View>
        </View>
        <View className="info-bottom">
          <View className="bottom-left">实际支付</View>
          <View className="bottom-right">¥34.8</View>
        </View>
      </View>
    );
  };

  waitPayBottomRender = () => {
    return (
      <View className="wait-pay-bottom-btn">
        <View className="btn-left">18小时23分钟后，订单自动取消！</View>
        <View className="btn-right">去支付</View>
      </View>
    );
  };

  takePayRender = () => {
    return (
      <View className="take-pay pay-temp">
        <IconFont name="daizhifu1" size="44" />
        <Text>待收货</Text>
      </View>
    );
  };

  closePayRender = () => {
    return (
      <View className="close-pay pay-temp">
        <IconFont name="chaoshiguanbi" size="44" />
        <Text>超时关闭</Text>
      </View>
    );
  };

  finishPayRender = () => {
    return (
      <View className="finish-pay pay-temp">
        <IconFont name="yiwancheng" size="44" />
        <Text>已完成</Text>
      </View>
    );
  };

  // 待支付
  waitPayListItem = () => {
    return (
      <View>
        {this.waitPayRender()}
        {this.personInfo()}
        {this.bookDetailRender()}
        {this.payInfoRender()}
        {this.orderFormInfoRender()}
      </View>
    );
  };

  // 待收货
  takePayListItem = () => {
    return (
      <View>
        {this.takePayRender()}
        {this.orderFormPersonInfo()}
        {this.bookDetailRender()}
        {this.payInfoRender()}
        {this.orderFormInfoRender()}
      </View>
    );
  };

  // 已完成
  finishPayListItem = () => {
    return (
      <View>
        {this.finishPayRender()}
        {this.orderFormFinishPersonInfo()}
        {this.bookDetailRender()}
        {this.payInfoRender()}
        {this.orderFormInfoRender()}
      </View>
    );
  };

  // 已关闭
  closePayListItem = () => {
    return (
      <View>
        {this.closePayRender()}
        {this.personInfo()}
        {this.bookDetailRender()}
        {this.payInfoRender()}
        {this.orderFormInfoRender()}
      </View>
    );
  };

  render() {
    const { msg, showType } = this.state;
    return (
      <View className="order-form-detail">
        <Image src={waitPayBg} className="order-form-detail-bg" />
        <View className="wrapper">
          {/* {this.takePayListItem()} */}
          {/* {this.waitPayListItem()} */}
          {/* {this.finishPayListItem()} */}
          {/* {this.closePayListItem()} */}
          {showType == 0
            ? this.waitPayListItem()
            : showType == 1
            ? this.takePayListItem()
            : showType == 2
            ? this.finishPayListItem()
            : showType == 3
            ? this.closePayListItem()
            : "feiwu"}
        </View>
        {this.waitPayBottomRender()}
      </View>
    );
  }
}

export default OrderFormDetail;
