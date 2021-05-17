import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./orderFormList.scss";
import lang from "@/assets/lang.jpg";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { request } from "@/common/helper";

class OrderFormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "order form list",

      headerStatus: [
        {
          id: -1,
          statusName: "全部",
          styleName: "all-pay"
        },
        {
          id: 0,
          statusName: "待支付",
          styleName: "wait-pay"
        },
        {
          id: 2,
          statusName: "待收货",
          styleName: "take-pay"
        },
        {
          id: 3,
          statusName: "已完成",
          styleName: "finish-pay"
        },
        {
          id: 4,
          statusName: "已关闭",
          styleName: "close-pay"
        }
      ],
      showType: 0,
      orderList: [],
      bookList: []
    };
  }

  componentDidMount() {
    let { type } = getCurrentInstance().router.params;
    this.setState(
      {
        showType: type
      },
      async () => {
        let orderListReqData = {
          orderType: type
        };
        await request("/haohuidu/app/user/order", "GET", orderListReqData).then(
          resp => {
            this.setState({
              orderList: resp.orderData.list
            });
          }
        );
      }
    );
  }

  switchStatus = statusId => {
    this.setState(
      {
        showType: statusId
      },
      () => {
        // 回调函数中对数据发起请求
        let orderType = 0;
        switch (statusId) {
          case 0:
            orderType = 0;
            break;
          case 1:
            orderType = 1;
            break;
          case 2:
            orderType = 2;
            break;
          case 3:
            orderType = 3;
            break;
          case 4:
            orderType = -1;
            break;
          case -1:
            orderType = "";
        }
        let orderListReqData = {
          orderType
        };
        request("/haohuidu/app/user/order", "GET", orderListReqData).then(
          resp => {
            console.log("resp ", resp);
            // debugger;
            this.setState({
              orderList: resp.orderData.list
            });
          }
        );
      }
    );
  };

  takePayRender = () => {
    return this.state.orderList.map(item => {
      return (
        <View className="order-form-content">
          <View className="content-wrapper">
            <View className="content-header">
              <Text className="header-create-time">
                下单时间：2020-10-22 13:23:10
              </Text>
              <Text className="header-status wait-pay">待收货</Text>
            </View>
            <View className="content-middle">
              <Image src={item.bookCoverUrl} className="middle-img" />
              <View className="middle-right">
                <Text className="right-title">{item.bookTitle}</Text>
                <Text className="right-desc">
                  本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
                </Text>
                <Text className="right-count">x 1</Text>
                {/* <Text className="right-spend">兑换花费：¥23.9</Text> */}
                <View className="price-or-reader">
                  {/* <View className="price-or-reader-left">¥{item.expenditureMoney}</View>
                  <View className="price-or-reader-right">
                    兑换花费: 1张阅读卡
                  </View> */}
                  <View className="price-or-reader-right">
                    ¥{item.expenditureMoney}
                  </View>
                </View>
              </View>
            </View>
            <View className="take-content-bottom">
              您的订单已发货，请注意查收！
            </View>
            <View
              className="take-content-btn"
              onClick={() => {
                Taro.navigateTo({
                  url: "../logisticsInfo/logisticsInfo"
                });
              }}
            >
              查看物流
            </View>
          </View>
        </View>
      );
    });
  };

  finishPayRender = () => {
    return this.state.orderList.map(item => {
      return (
        <View className="order-form-content">
          <View className="content-wrapper">
            <View className="content-header">
              <Text className="header-create-time">
                下单时间：{item.orderTime}
              </Text>
              <Text className="header-status wait-pay">已完成</Text>
            </View>
            <View className="content-middle">
              <Image src={item.bookCoverUrl} className="middle-img" />
              <View className="middle-right">
                <Text className="right-title">{item.bookTitle}</Text>
                <Text className="right-desc">
                  本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
                </Text>
                <Text className="right-count">x 1</Text>
                {/* <Text className="right-spend">兑换花费：¥23.9</Text> */}
                <View className="price-or-reader">
                  <View className="price-or-reader-left">
                    ¥{item.expenditureMoney}
                  </View>
                  <View className="price-or-reader-right">
                    兑换花费: 1张阅读卡
                  </View>
                </View>
              </View>
            </View>
            <View className="finish-content-bottom">
              您的订单已完成，快去评价吧！
            </View>
            <View
              className="finish-content-btn"
              onClick={() => {
                Taro.navigateTo({
                  url: "../goToEvaluate/goToEvaluate?orderId=" + item.id
                });
              }}
            >
              去评价
            </View>
          </View>
        </View>
      );
    });
  };

  closePayRender = () => {
    return this.state.orderList.map(item => {
      return (
        <View className="order-form-content">
          <View className="content-wrapper">
            <View className="content-header">
              <Text className="header-create-time">
                下单时间：{item.orderTime}
              </Text>
              <Text className="header-status wait-pay">已关闭</Text>
            </View>
            <View className="content-middle">
              <Image src={item.bookCoverUrl} className="middle-img" />
              <View className="middle-right">
                <Text className="right-title">{item.bookTitle}</Text>
                <Text className="right-desc">
                  本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
                </Text>
                {/* <Text className="right-count">x 1</Text>
              <Text className="right-spend">兑换花费：¥23.9</Text> */}
                <Text className="right-count">x 1</Text>
                <Text className="close-right-spend">
                  ¥{item.expenditureMoney}
                </Text>
              </View>
            </View>
            <View className="close-content-bottom">您的订单已关闭！</View>
            <View
              className="close-content-btn"
              onClick={() => {
                Taro.navigateTo({
                  url: "../orderFormDetail/orderFormDetail"
                });
              }}
            >
              查看详情
            </View>
          </View>
        </View>
      );
    });
  };

  waitPayRender = () => {
    let { showType, orderList } = this.state;
    return orderList.map(item => {
      // var date1= '2015/05/01 00:00:00';  //开始时间
      // var date2 = new Date();    //结束时间
      // var date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数
      // const autoCloseTime = '2020-05-15 11:06:00'
      // let startDate = new Date();
      // let computedDate =
      //   startDate.getTime() - new Date(autoCloseTime).getTime();
      // let days = Math.floor(computedDate / (24 * 3600 * 1000));

      // var leave1 = computedDate % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      // var hours = Math.floor(leave1 / (3600 * 1000));

      // var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      // var minutes = Math.floor(leave2 / (60 * 1000));

      // console.log(days, hours, minutes);
      return (
        <View className="order-form-content">
          <View className="content-wrapper">
            <View className="content-header">
              <Text className="header-create-time">
                下单时间：{item.orderTime}
              </Text>
              <Text className="header-status wait-pay">待支付</Text>
            </View>
            <View className="content-middle">
              <Image src={item.bookCoverUrl} className="middle-img" />
              <View className="middle-right">
                <Text className="right-title">{item.bookTitle}</Text>
                <Text className="right-desc">
                  本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
                </Text>
                <Text className="right-count">x 1</Text>
                <Text className="right-spend">
                  兑换花费：¥{item.expenditureMoney}
                </Text>
              </View>
            </View>
            <View className="content-bottom">
              17小时27分钟后订单自动取消，请尽快支付！
            </View>
            <View
              className="content-btn"
              onClick={() => {
                Taro.navigateTo({
                  url: `../orderFormDetail/orderFormDetail?type=${showType}&id=${item.id}`
                });
              }}
            >
              马上支付
            </View>
          </View>
        </View>
      );
    });
  };

  showAll = () => {
    return (
      // 根据不同的类型展示不同的内容
      this.state.orderList.map(item => {
        switch (item.status) {
          case 0:
            return (
              <View className="order-form-content">
                <View className="content-wrapper">
                  <View className="content-header">
                    <Text className="header-create-time">
                      下单时间：{item.orderTime}
                    </Text>
                    <Text className="header-status wait-pay">待支付</Text>
                  </View>
                  <View className="content-middle">
                    <Image src={item.bookCoverUrl} className="middle-img" />
                    <View className="middle-right">
                      <Text className="right-title">{item.bookTitle}</Text>
                      <Text className="right-desc">
                        本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
                      </Text>
                      <Text className="right-count">x 1</Text>
                      <Text className="right-spend">
                        兑换花费：¥{item.expenditureMoney}
                      </Text>
                    </View>
                  </View>
                  <View className="content-bottom">
                    17小时27分钟后订单自动取消，请尽快支付！
                  </View>
                  <View className="content-btn">马上支付</View>
                </View>
              </View>
            );
          case 1:
            return (
              <View className="order-form-content">
                <View className="content-wrapper">
                  <View className="content-header">
                    <Text className="header-create-time">
                      下单时间：2020-10-22 13:23:10
                    </Text>
                    <Text className="header-status wait-pay">待收货</Text>
                  </View>
                  <View className="content-middle">
                    <Image src={item.bookCoverUrl} className="middle-img" />
                    <View className="middle-right">
                      <Text className="right-title">{item.bookTitle}</Text>
                      <Text className="right-desc">
                        本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
                      </Text>
                      <Text className="right-count">x 1</Text>
                      {/* <Text className="right-spend">兑换花费：¥23.9</Text> */}
                      <View className="price-or-reader">
                        {/* <View className="price-or-reader-left">¥{item.expenditureMoney}</View>
                  <View className="price-or-reader-right">
                    兑换花费: 1张阅读卡
                  </View> */}
                        <View className="price-or-reader-right">
                          ¥{item.expenditureMoney}
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="take-content-bottom">
                    您的订单已发货，请注意查收！
                  </View>
                  <View
                    className="take-content-btn"
                    onClick={() => {
                      Taro.navigateTo({
                        url: "../logisticsInfo/logisticsinfo"
                      });
                    }}
                  >
                    查看物流
                  </View>
                </View>
              </View>
            );
          case 2:
            return (
              <View className="order-form-content">
                <View className="content-wrapper">
                  <View className="content-header">
                    <Text className="header-create-time">
                      下单时间：{item.orderTime}
                    </Text>
                    <Text className="header-status wait-pay">已完成</Text>
                  </View>
                  <View className="content-middle">
                    <Image src={item.bookCoverUrl} className="middle-img" />
                    <View className="middle-right">
                      <Text className="right-title">{item.bookTitle}</Text>
                      <Text className="right-desc">
                        本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
                      </Text>
                      <Text className="right-count">x 1</Text>
                      {/* <Text className="right-spend">兑换花费：¥23.9</Text> */}
                      <View className="price-or-reader">
                        <View className="price-or-reader-left">
                          ¥{item.expenditureMoney}
                        </View>
                        <View className="price-or-reader-right">
                          兑换花费: 1张阅读卡
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="finish-content-bottom">
                    您的订单已完成，快去评价吧！
                  </View>
                  <View
                    className="finish-content-btn"
                    onClick={() => {
                      Taro.navigateTo({
                        url: "../goToEvaluate/goToEvaluate"
                      });
                    }}
                  >
                    去评价
                  </View>
                </View>
              </View>
            );
          case -1:
            return (
              <View className="order-form-content">
                <View className="content-wrapper">
                  <View className="content-header">
                    <Text className="header-create-time">
                      下单时间：{item.orderTime}
                    </Text>
                    <Text className="header-status wait-pay">已关闭</Text>
                  </View>
                  <View className="content-middle">
                    <Image src={item.bookCoverUrl} className="middle-img" />
                    <View className="middle-right">
                      <Text className="right-title">{item.bookTitle}</Text>
                      <Text className="right-desc">
                        本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者将从不…
                      </Text>
                      {/* <Text className="right-count">x 1</Text>
              <Text className="right-spend">兑换花费：¥23.9</Text> */}
                      <Text className="right-count">x 1</Text>
                      <Text className="close-right-spend">
                        ¥{item.expenditureMoney}
                      </Text>
                    </View>
                  </View>
                  <View className="close-content-bottom">您的订单已关闭！</View>
                  <View
                    className="close-content-btn"
                    onClick={() => {
                      Taro.navigateTo({
                        url: "../orderFormDetail/orderFormDetail"
                      });
                    }}
                  >
                    查看详情
                  </View>
                </View>
              </View>
            );
        }
      })
    );
  };

  render() {
    const { msg, headerStatus, showType } = this.state;
    return (
      <View className="order-form-list">
        <View className="form-list-header">
          {headerStatus.map(item => {
            return (
              <View
                className={showType == item.id ? "select-tag" : ""}
                onClick={() => this.switchStatus(item.id)}
              >
                {item.statusName}
              </View>
            );
          })}
        </View>
        <View className="wrapper">
          {showType == 0
            ? this.waitPayRender()
            : showType == 2
            ? this.takePayRender()
            : showType == 3
            ? this.finishPayRender()
            : showType == 4
            ? this.closePayRender()
            : this.showAll()}
          {/* {this.closePayRender()}
          {this.finishPayRender()}
          {this.waitPayRender()}
          {this.takePayRender()} */}
        </View>
      </View>
    );
  }
}

export default OrderFormList;
