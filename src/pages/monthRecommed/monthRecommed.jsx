import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import monthRecommedBg from "@/assets/monthRecommedBg.png";
import "./monthRecommed.scss";
import lang from "@/assets/lang.jpg";
import MoreRecommedView from "@/components/MoreRecommedView";
import HotRank from "@/components/HotRank";
import { request } from "@/common/helper";
import Taro, { getCurrentInstance } from "@tarojs/taro";

class MonthRecommed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthData: {}
    };
  }

  componentDidMount() {
    // 根据recommedId去请求详情推荐列表
    let { recommedId } = getCurrentInstance().router.params;
    let recommedReqData = {
      recommendId: recommedId
    };

    request("/haohuidu/app/book/recommend/detail", "GET", recommedReqData).then(
      resp => {
        this.setState({
          monthData: resp.recommendBookData
        });
        console.log("resp ", resp);
      }
    );
  }

  render() {
    const { monthData } = this.state;
    return (
      <View className="month-recommed">
        <Image src={monthRecommedBg} className="month-recommed-bg" />
        <View className="wrapper">
          {monthData.list
            ? monthData.list.map(item => {
                return (
                  <View
                    className="theme-content-month"
                    onClick={() => {
                      Taro.navigateTo({
                        url: "../bookDetail/bookDetail?bookId=" + item.id
                      });
                    }}
                  >
                    <Image className="theme-img" src={item.coverUrl}></Image>
                    <View className="content-wrapper">
                      <View className="wrapper-top">
                        <View className="content-title">{item.title}</View>
                        <View className="content-subhead">
                          {item.recommendReason}
                        </View>
                      </View>
                    </View>
                    <View className="wrapper-bottom-month">
                      <Text className="book-reader">{`${item.sales}个孩子已阅读`}</Text>
                    </View>
                  </View>
                );
              })
            : ""}
          <MoreRecommedView />
          <HotRank />
        </View>
      </View>
    );
  }
}

export default MonthRecommed;
