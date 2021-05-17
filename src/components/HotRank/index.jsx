import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import IconFont from "@/components/iconfont";
import lang from "@/assets/lang.jpg";
import { request } from "@/common/helper";
import Taro, { getCurrentInstance } from "@tarojs/taro";

class HotRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "this is hot rank",
      hotRankList: []
    };
  }

  componentDidMount() {
    let hotRankData = {
      token: Taro.getStorageSync("token")
    };
    request("/haohuidu/app/book/hot", "GET", hotRankData).then(resp => {
      this.setState({
        hotRankList: resp.hotData.list
      });
    });
  }

  showTopRank = () => {
    return this.state.hotRankList.map((res, index) => {
      if (index < 3) {
        return (
          <View
            className="book-content"
            onClick={() => {
              Taro.navigateTo({
                url: "../../pages/bookDetail/bookDetail?bookId=" + res.id
              });
            }}
          >
            <Image className="book-img" src={res.coverUrl} />
            <Text className="book-text">{res.title}</Text>
            <View className={`tag${index + 1}`}>{`TOP${index + 1}`}</View>
          </View>
        );
      }
    });
  };

  render() {
    const { hotRankList } = this.state;
    return (
      <View className="hot-rank">
        <View className="hot-rank-title">
          <View className="title-wrapper">
            <View className="title-name">热度榜</View>
            <View className="hot-rank-temp">|</View>
            <View className="title-sub">孩子们最爱的绘本</View>
          </View>
          <View
            className="title-tag"
            onClick={() => {
              Taro.navigateTo({
                url: "../../pages/hotBookList/hotBookList"
              });
            }}
          >
            <Text>更多</Text>
            <IconFont name="gengduo2"></IconFont>
          </View>
        </View>
        <View className="hot-rank-wrapper">{this.showTopRank()}</View>
      </View>
    );
  }
}

export default HotRank;
