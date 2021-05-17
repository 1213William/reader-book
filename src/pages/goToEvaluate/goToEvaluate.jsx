import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./goToEvaluate.scss";
import lang from "@/assets/lang.jpg";
import { AtRate } from "taro-ui";
import "taro-ui/dist/style/components/rate.scss";
import "taro-ui/dist/style/components/icon.scss";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { request } from "@/common/helper";

class GoToEvaluate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "this is go to evaluate",
      orderList: [],
      rateVal: 0
    };
  }

  componentDidMount() {
    let { orderId } = getCurrentInstance().router.params;

    // 请求接口，将评价信息置顶
    let orderReqData = {
      orderType: 3,
      orderId
    };
    request("/haohuidu/app/user/order", "GET", orderReqData).then(resp => {
      console.log("resp ", resp);
      let newOrderList = JSON.parse(JSON.stringify(resp.orderData.list));
      newOrderList.map(item => (item["rateVal"] = 0));
      this.setState({
        orderList: newOrderList
      });
    });
  }

  handleChangeRate = (e, index) => {
    console.log(e, index);
    let newOrderList = JSON.parse(JSON.stringify(this.state.orderList));

    newOrderList[index].rateVal = e;

    this.setState({
      orderList: newOrderList
    });
  };

  render() {
    const { msg, orderList } = this.state;
    return (
      <View className="go-to-evaluate">
        <View className="to-evaluate-header">
          <View className="header-style selected-header">
            待评价
            <View className="header-style-bottom"></View>
          </View>
          <View className="header-style">
            已评价
            <View className="header-style-bottom"></View>
          </View>
        </View>

        <View className="evaluate-wrapper">
          {orderList.map((item, itemIndex) => {
            return (
              <View className="evaluate-content">
                <View className="content-header">
                  <View className="header-create-time">
                    下单时间：{item.orderTIme}
                  </View>
                  <View className="header-status">待评价</View>
                </View>
                <View className="content-middle">
                  <Image src={item.bookCoverUrl} className="middle-book-img" />
                  <View className="middle-book-intro">
                    <Text className="book-title">{item.bookTitle}</Text>
                    <Text className="book-desc">
                      本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不
                    </Text>
                  </View>
                </View>
                <View className="content-bottom">
                  <AtRate
                    value={item.rateVal}
                    onChange={event => this.handleChangeRate(event, itemIndex)}
                  />

                  <View className="bottom-btn">确认评价</View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default GoToEvaluate;
