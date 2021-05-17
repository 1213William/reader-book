import React, { Component } from "react";
import "./confirmOrderForm.scss";
import { View, Text, Image } from "@tarojs/components";
import harvestBg from "@/assets/harvestBg.png";
import IconFont from "@/components/iconfont";
import lang from "@/assets/lang.jpg";
import chooseModeBg from "@/assets/chooseModeBg.png";
import Taro from "@tarojs/taro";
import { AtCurtain, AtButton } from "taro-ui";
import "taro-ui/dist/style/components/curtain.scss";
import "taro-ui/dist/style/components/button.scss";

class ConfirmOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "confirm order form",
      isOpened: false,
      payMode: "0" // 0 阅读券  1 wx
    };
  }

  handleChange = () => {
    this.setState({
      isOpened: true
    });
  };
  onClose = () => {
    this.setState({
      isOpened: false
    });
  };

  bottomRender = () => {
    return (
      <View className="order-form-bottom">
        <View className="bottom-left">
          <Text className="dafeiwu">应付：1张阅读卡</Text>
          <Text className="xiaofeiwu">剩余5张阅读券</Text>
        </View>
        <View
          className="bottom-right"
          onClick={() => {
            this.setState({
              isOpened: true
            });
          }}
        >
          兑换
        </View>
        <AtCurtain
          isOpened={this.state.isOpened}
          // onClose={this.onClose}
          // closeBtnPosition="top-right"
        >
          <View className="pop-up-box">{this.popUpBoxContent()}</View>
        </AtCurtain>
      </View>
    );
  };

  popUpBoxContent = () => {
    return (
      <View className="header">
        <View className="pay-header-title">
          <Text className="pay-title">确认支付</Text>
          <Text className="pay-temp-text">请确认购买的书和收货地址</Text>
        </View>
        <View className="book-detail-img">
          <Image src={lang} className="book-detail-img-bg" />
          <View className="text-list">
            <View className="text-top">
              <Text className="book-name">小王子绘本</Text>
              <Text className="book-count">数量：1</Text>
            </View>
            <View className="text-bottom">
              <Text className="book-price">¥29.9</Text>
            </View>
          </View>
        </View>

        <View className="person-intro">
          <View className="text-temp">姓名：郑俊平</View>
          <View className="text-temp">电话：13584738567</View>
          <View className="text-temp">
            地址：浙江省绍兴市上虞区复兴东路惠普广场惠普广场惠普广场
          </View>
        </View>

        <View className="bottom-btn">
          <View
            className="pop-up-cancle flex-layout"
            onClick={() => {
              this.setState({
                isOpened: false
              });
            }}
          >
            取消
          </View>
          <View
            className="pop-up-confirm-pay flex-layout"
            onClick={() => {
              Taro.navigateTo({
                url: "../convertSucc/convertSucc"
              });
            }}
          >
            确认支付
          </View>
        </View>
      </View>
    );
  };

  fillHarvestAddr = () => {
    return (
      <View
        className="harvest-addr"
        onClick={() => {
          Taro.navigateTo({
            url: "../addressList/addressList"
          });
        }}
      >
        <View className="addr-left">
          <View className="icon-left">
            <IconFont name="dizhi" size="50" />
          </View>
          <Text className="please">请填写收货地址</Text>
        </View>
        <View className="addr-right">
          <IconFont name="gengduo2" size="18" />
        </View>
        <Image src={harvestBg} className="harvest-bg" />
      </View>
    );
  };

  buyBookDetail = () => {
    return (
      <View className="book-detail">
        <View className="detail-intro">
          <View className="intro-left">
            <Image src={lang} className="intro-img" />
          </View>
          <View className="intro-right">
            <View className="right-title">
              <Text className="title">小王子绘本</Text>
              <Text className="desc">
                本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
              </Text>
            </View>
            <View className="right-bottom">
              <View className="zuobiandefeiwu">
                <Text className="yuduquan">1张阅读券</Text>
                <Text className="jiage">¥29.9</Text>
              </View>
              <View className="youbiandefeiwu">x 1</View>
            </View>
          </View>
        </View>
        <View className="detail-price">
          <View className="price-left">商品金额</View>
          <View className="price-right">
            <Text className="text-temp" style={{ marginRight: "5px" }}>
              阅读券
            </Text>
            <Text className="text-temp">x 1</Text>
          </View>
        </View>
        <View className="detail-freight">
          <View className="freight-left">运费</View>
          <View className="freight-right">
            <Text className="text-temp" style={{ marginRight: "5px" }}>
              快递
            </Text>
            <Text className="text-temp">免邮</Text>
          </View>
        </View>
      </View>
    );
  };

  chooseBuyMode = () => {
    const { payMode } = this.state;
    return (
      <View className="choose-buy-mode">
        <View className="buy-mode-title">选择兑换方式</View>
        <View className="choose-mode">
          <View
            className={payMode == 0 ? "mode-yueduquan" : "mode-wx"}
            style={{ border: payMode == 0 ? "none" : "" }}
            onClick={() => {
              this.setState({
                payMode: 0
              });
            }}
          >
            {payMode == 0 ? (
              <Image src={chooseModeBg} className="choose-mode-bg" />
            ) : (
              ""
            )}
            <Text className={payMode == 0 ? "choose-text" : "temp-text"}>
              阅读券
            </Text>
          </View>
          <View
            className={payMode == 1 ? "mode-yueduquan" : "mode-wx"}
            style={{ border: payMode == 1 ? "none" : "" }}
            onClick={() => {
              this.setState({
                payMode: 1
              });
            }}
          >
            {payMode == 1 ? (
              <Image src={chooseModeBg} className="choose-mode-bg" />
            ) : (
              ""
            )}
            <Text className={payMode == 1 ? "choose-text" : "temp-text"}>
              微信支付
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { msg } = this.state;
    return (
      <View className="confirm-order-form">
        <View className="wrapper">
          {this.fillHarvestAddr()}
          {this.buyBookDetail()}
          {this.chooseBuyMode()}
        </View>
        {this.bottomRender()}
      </View>
    );
  }
}

export default ConfirmOrderForm;
