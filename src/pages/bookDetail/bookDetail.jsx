import React, { Component } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Text, Image, Video } from "@tarojs/components";
import lang from "@/assets/lang.jpg";
import "./bookDetail.scss";
import { AtRate } from "taro-ui";
import "taro-ui/dist/style/components/rate.scss";
import "taro-ui/dist/style/components/icon.scss";
import IconFont from "@/components/iconfont";
import { request } from "@/common/helper";

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetail: {},
      fullScreen: false
    };
  }

  componentDidMount() {
    let { bookId } = getCurrentInstance().router.params;
    let reqDetailData = {
      bookId
    };
    request("/haohuidu/app/book/detail", "GET", reqDetailData).then(resp => {
      this.setState({
        bookDetail: resp.bookDetail,
        imgList: resp.bookDetail.intro_img
      });
    });
  }

  showVideoContent = () => {
    let videoContext = wx.createVideoContext("myVideo", this);
    videoContext.requestFullScreen();
    this.setState({
      fullScreen: true
    });
  };

  fullScreen = e => {
    let isFull = e.detail.fullScreen;
    this.setState({
      fullScreen: isFull
    });
  };

  closeVideo = () => {
    let videoContext = Taro.createVideoContext("myVideo", this);
    videoContext.exitFullScreen();
  };

  addBookRack = () => {
    let collectionReqData = {
      bookId: this.state.bookDetail.id
    };
    request(
      "/haohuidu/app/bookrack/collect/add",
      "POST",
      collectionReqData
    ).then(() => {
      Taro.showToast({
        icon: "success",
        title: "已加入书架"
      });
    });
  };

  render() {
    const { bookDetail, fullScreen } = this.state;
    console.log(bookDetail);
    return (
      <View className="book-detail">
        <Video
          className={fullScreen ? "show" : "hide"}
          id="myVideo"
          src={bookDetail.videoIntroUrl}
          autoplay={true}
          // showFullscreenBtn={true}
          onFullscreenChange={this.fullScreen}
          onEnded={this.closeVideo}
          showCenterPlayBtn={true}
          controls
          poster={bookDetail.coverUrl}
          enablePlayGesture={true}
          showCenterPlayBtn={true}
        />
        <Image src={bookDetail.coverUrl} className="book-detail-bg" />
        <View className="book-intro">
          <View className="book-img-wrapper" onClick={this.showVideoContent}>
            <Image src={bookDetail.coverUrl} className="book-img" />
            <View className="icon">
              <IconFont name="bofang" size="66"></IconFont>
            </View>
          </View>
          <View className="intro-detail">
            <Text className="book-name">{bookDetail.title}</Text>
            <Text className="book-author">{bookDetail.author} 著</Text>
            <View className="book-rate">
              <AtRate
                value={Math.round(bookDetail.scoreDouban / 2)}
                className="rate"
              />
              <Text className="rate-number">{bookDetail.scoreDouban}</Text>
            </View>

            <View className="book-temp">
              <Text className="yueduquan">{bookDetail.voucher}张阅读券</Text>
              <Text className="price">{bookDetail.price}</Text>
              <View className="temp"></View>
              <Text className="age">适合{bookDetail.appropriateAge}</Text>
            </View>
          </View>
        </View>
        <View className="book-bg"></View>
        <View className="book-wrapper">
          <View className="book-content">
            <View className="recommed-reason">
              <View className="reason-title">
                <Text>推荐理由</Text>
                <View></View>
              </View>
              <View className="reason-content">
                {bookDetail.recommendReason}
              </View>
            </View>

            <View className="book-jianjie">
              <View className="jianjie-title">
                <Text>图书简介</Text>
                <View></View>
              </View>
              <View className="jianjie-content">
                <View className="content-res">{bookDetail.intro}</View>
                <View className="img-list">
                  {bookDetail.introImg
                    ? bookDetail.introImg.map(res => {
                        return <Image src={res} />;
                      })
                    : ""}
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="bottom-btn">
          <View className="add-bookrack" onClick={this.addBookRack}>
            加入书架
          </View>
          <View
            className="conversation-buy"
            onClick={() => {
              Taro.navigateTo({
                url: "../confirmOrderForm/confirmOrderForm"
              });
            }}
          >
            兑换&购买
          </View>
        </View>
      </View>
    );
  }
}

export default BookDetail;
