import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { request } from "@/common/helper";
import "./index.scss";
import Taro from '@tarojs/taro'

class MRecommed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "this is rrrr",
      recommedList: []
    };
  }

  componentDidMount() {
    let recommedListData = {
      type: 2,
      token: Taro.getStorageSync("token")
    };
    request("/haohuidu/app/book/recommend", "GET", recommedListData).then(resp => {
      this.setState({
        recommedList: resp.recommendData.list
      });
    });
  }

  render() {
    let { recommedList } = this.state;
    return (
      <View className="r-recommed">
        <View className="recommed-title">
          <View className="title-name">月度推荐</View>
          <View className="temp">|</View>
          <View className="title-tag">每月给孩子换本书</View>
        </View>
        <View className="recommed-card" onClick={() => {
          Taro.navigateTo({url: '../../pages/monthRecommed/monthRecommed?recommedId=' + recommedList[0].id})
        }}>
          {recommedList.map((res, index) => {
            if (index == 0) {
              return (
                <Image src={res.coverUrl} />
              )
            }
          })}
        </View>
      </View>
    );
  }
}

export default MRecommed;
