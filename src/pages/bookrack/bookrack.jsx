import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./bookrack.scss";
import lang from "@/assets/lang.jpg";
import Taro from "@tarojs/taro";
import { request } from "@/common/helper";
import IconFont from "@/components/iconfont";
import MoreRecommedView from "@/components/MoreRecommedView";
import ThemeRecommed from "@/components/ThemeRecommed";
import HotRank from "@/components/HotRank";

class BookRack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookRackStatus: 0, // 0 收藏 1 正在读
      collectData: {},
      readingData: {}
    };
  }

  componentDidMount() {
    // request("/haohuidu/app/bookrack/collect", "GET").then(resp => {
    //   this.setState({
    //     collectData: resp.collectData
    //   });
    // });
  }

  componentDidShow() {
    // console.log('页面刷新了...')
    request("/haohuidu/app/bookrack/collect", "GET").then(resp => {
      this.setState({
        collectData: resp.collectData
      });
    });
  }

  switchBookRackStatus = status => {
    if (status == 0) {
      this.setState(
        {
          bookRackStatus: 1
        },
        () => {
          request("/haohuidu/app/bookrack/reading", "GET").then(resp => {
            console.log("resp ", resp);
            this.setState({
              collectData: resp.readingData
            });
          });
        }
      );
    } else {
      this.setState(
        {
          bookRackStatus: 0
        },
        () => {
          request("/haohuidu/app/bookrack/collect", "GET").then(resp => {
            this.setState({
              collectData: resp.collectData
            });
          });
        }
      );
    }

    // 请求接口填充数据
  };

  removeBookRack = (event, bookId, bookIndex) => {
    event.stopPropagation();
    Taro.showModal({
      title: "确定要移除当前书籍吗？",
      confirmText: "确认",
      cancelText: "取消",
      success: m => {
        if (m.confirm == true) {
          let removeReqData = {
            bookId
          };
          request(
            "/haohuidu/app/bookrack/collect/remove",
            "POST",
            removeReqData
          ).then(() => {
            let newCollectData = JSON.parse(
              JSON.stringify(this.state.collectData)
            );
            newCollectData.list.splice(bookIndex, 1);
            this.setState({
              collectData: newCollectData
            });
          });
        }
      }
    });
  };

  noneItem = () => {
    return (
      <View className="none-item">
        <Image
          className="collect-none-bg"
          src="https://haohuidu.oss-cn-hangzhou.aliyuncs.com/app/static/images/collectNoneBg.png"
        />
        <View className="collect-none-text">暂无收藏内容</View>
      </View>
    );
  };

  moreRecommed = () => {
    return (
      <View style={{ marginTop: "40px" }}>
        <MoreRecommedView />
      </View>
    );
  };

  showCollectContent = () => {
    let { collectData, bookRackStatus } = this.state;
    return collectData.list
      ? collectData.list.map((item, itemIndex) => {
          return (
            <View
              className="theme-content"
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
              <View
                className="theme-remove"
                onClick={event =>
                  this.removeBookRack(event, item.id, itemIndex)
                }
                style={{ display: bookRackStatus == 0 ? "" : "none" }}
              >
                <IconFont name="gengduo_icon3x" size="35" />
              </View>
            </View>
          );
        })
      : "";
  };

  render() {
    const { bookRackStatus, collectData } = this.state;
    return (
      <View className="book-rack">
        <View className="book-rack-header">
          <View
            className="collection"
            onClick={() => this.switchBookRackStatus(bookRackStatus)}
          >
            <Text className={bookRackStatus == 0 ? "selected-choose" : ""}>
              我的收藏
            </Text>
            <View className={bookRackStatus == 0 ? "temp" : ""}></View>
          </View>
          <View
            className="reader"
            onClick={() => this.switchBookRackStatus(bookRackStatus)}
          >
            <Text className={bookRackStatus == 1 ? "selected-choose" : ""}>
              我正在读
            </Text>
            <View className={bookRackStatus == 1 ? "temp" : ""}></View>
          </View>
        </View>
        <View className="wrapper">
          {collectData.list && collectData.list.length
            ? this.showCollectContent()
            : this.noneItem()}
          {/* {this.showCollectContent()} */}
          {this.moreRecommed()}
          <ThemeRecommed />
          <HotRank />
        </View>
      </View>
    );
  }
}

export default BookRack;
