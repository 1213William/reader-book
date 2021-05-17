import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "@tarojs/components";
import "./stackRoom.scss";
import lang from "@/assets/lang.jpg";
import IconFont from "@/components/iconfont";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/components/button.scss";
import { request } from "@/common/helper";

class StackRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageTagGroup: {},
      bookTagGroup: {},
      selectedAge: 0,
      selectedBook: 0,
      bookList: []
    };
  }

  componentDidMount() {
    request("/haohuidu/app/book/tag", "GET").then(resp => {
      this.setState(
        {
          ageTagGroup: resp.ageTagGroup,
          bookTagGroup: resp.bookTagGroup,
          selectedAge: resp.ageTagGroup[0].id,
          selectedBook: resp.bookTagGroup[0].id
        },
        () => {
          let bookListReqData = {
            typeTagId: this.state.bookTagGroup[0].id,
            ageTagId: this.state.ageTagGroup[0].id
          };
          request("/haohuidu/app/book/tag/filter", "GET", bookListReqData).then(
            resp => {
              this.setState({
                bookList: resp.bookData.list
              });
            }
          );
        }
      );
    });
  }

  switchAge = ageId => {
    this.setState(
      {
        selectedAge: ageId
      },
      () => {
        let bookListReqData = {
          typeTagId: this.state.bookTagGroup[0].id,
          ageTagId: ageId
        };
        request("/haohuidu/app/book/tag/filter", "GET", bookListReqData).then(
          resp => {
            this.setState({
              bookList: resp.bookData.list
            });
          }
        );
      }
    );
  };

  switchBook = bookId => {
    this.setState(
      {
        selectedBook: bookId
      },
      () => {
        let bookListReqData = {
          typeTagId: bookId,
          ageTagId: this.state.ageTagGroup[0].id
        };
        request("/haohuidu/app/book/tag/filter", "GET", bookListReqData).then(
          resp => {
            this.setState({
              bookList: resp.bookData.list
            });
          }
        );
      }
    );
  };

  render() {
    const {
      ageTagGroup,
      bookTagGroup,
      selectedAge,
      selectedBook,
      bookList
    } = this.state;
    return (
      <View className="stack-room">
        <View className="stack-room-top-header">
          <View className="stack-room-wrapper">
            <View
              className="stack-room-header"
              onClick={() => {
                Taro.navigateTo({
                  url: "../searchPage/searchPage"
                });
              }}
            >
              <IconFont name="sousuo-icon" size="34" />
              <Text className="header-text">小王子绘本</Text>
            </View>
            <ScrollView
              scrollX
              scrollWithAnimation
              style="white-space: nowrap; width:100%"
              showScrollbar={false}
              className="stack-room-type"
            >
              {ageTagGroup.length
                ? ageTagGroup.map(item => {
                    return (
                      <Text
                        className={
                          selectedAge == item.id ? "selected-age" : "age"
                        }
                        onClick={() => this.switchAge(item.id)}
                      >
                        {item.name}
                      </Text>
                    );
                  })
                : ""}
            </ScrollView>
          </View>
        </View>

        <View className="stack-room-content">
          <ScrollView
            className="room-content-left"
            scrollY
            scrollWithAnimation
            scrollTop={0}
          >
            {bookTagGroup.length
              ? bookTagGroup.map(item => {
                  return (
                    <Text
                      className={
                        selectedBook == item.id ? "selected-type" : "type"
                      }
                      onClick={() => this.switchBook(item.id)}
                    >
                      {item.name}
                    </Text>
                  );
                })
              : ""}
          </ScrollView>
          <ScrollView
            className="room-content-right"
            scrollY
            scrollWithAnimation
            scrollTop={0}
          >
            {bookList.map(item => {
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
                      <View className="content-subhead">{item.intro}</View>
                    </View>
                  </View>
                  <View className="wrapper-bottom">
                    <Text className="book-reader">{`${item.sales}个孩子已阅读`}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default StackRoom;
