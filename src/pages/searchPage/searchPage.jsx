import React, { Component } from "react";
import "./searchPage.scss";
import { View, Text, Input, Image } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import noneSearch from "@/assets/none-search.png";
import ThemeRecommed from "@/components/ThemeRecommed";
import HotRank from "@/components/HotRank";
import { request } from "@/common/helper";
import Taro from "@tarojs/taro";
import lang from "@/assets/lang.jpg";
import debounce from "debounce";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "thjis is search page",
      searchInputValue: "",
      searchResultList: []
    };
  }

  searchResultContent = () => {
    const { searchResultList } = this.state;
    return (
      <View className="search-content">
        {searchResultList.map((res, index) => {
          console.log(res);
          return (
            <View
              className="theme-content-search"
              onClick={() => {
                Taro.navigateTo({
                  url: "../bookDetail/bookDetail?bookId=" + res.id
                });
              }}
            >
              <Image className="theme-img" src={res.coverUrl}></Image>
              <View className="content-wrapper">
                <View className="wrapper-top">
                  <View className="content-title">{res.title}</View>
                  <View className="content-subhead">{res.author}</View>
                </View>
                <View className="wrapper-bottom">
                  <Text className="book-reader">{`${res.sales}个孩子已阅读`}</Text>
                </View>
              </View>
            </View>
          );
        })}

        {/* {searchResultList.map((item, index) => {
          return (
            <View
              className="search-item"
              // onClick={() => this.checkBookDetail()}
            >
              {item.title}
            </View>
          );
        })} */}
        {this.moreRecommed()}
      </View>
    );
  };
  searchResultNone = () => {
    return (
      <View className="search-none">
        <View className="none-hint">
          <Image src={noneSearch} className="none-img" />
          <Text className="none-text">暂未搜索到任何图书</Text>
        </View>
        {this.moreRecommed()}
      </View>
    );
  };

  moreRecommed = () => {
    return (
      <View className="more-recommed-search">
        <View className="search-more">
          <View className="temp" style={{ marginRight: "34px" }}></View>
          <View className="temp-text">更多推荐</View>
          <View className="temp" style={{ marginLeft: "34px" }}></View>
        </View>
        <ThemeRecommed />
        <HotRank />
      </View>
    );
  };

  handleChangeInput = event => {
    let inputValue = event.detail.value;
    if (inputValue == "") {
      this.setState({
        searchInputValue: "",
        searchResultList: []
      });
      return;
    }
    this.setState({
      searchInputValue: inputValue
    });
    let searchData = {
      keyWord: inputValue
    };
    request("/haohuidu/app/book/search", "GET", searchData).then(resp => {
      this.setState(
        {
          searchResultList: resp.bookData.list
        },
        () => {
          console.log(this.state);
        }
      );
    });
  };

  delInputValue = event => {
    event.stopPropagation();
    this.setState({
      searchInputValue: "",
      searchResultList: []
    });
  };

  render() {
    const { searchInputValue, searchResultList } = this.state;
    return (
      <View className="search-page">
        <View className="search-wrapper">
          <View className="search-header">
            <Input
              className="search-ipt"
              placeholder="请输入需要搜索的内容"
              onInput={debounce(event => this.handleChangeInput(event), 500)}
              value={searchInputValue}
              autoFocus
            ></Input>
            <View
              className="search-cancle"
              onClick={() => {
                Taro.navigateBack({
                  delta: 1
                });
              }}
            >
              取消
            </View>
            <View className="sousuo">
              <IconFont name="sousuo-icon" size="34"></IconFont>
            </View>
            <View
              className="qingkong"
              onClick={event => this.delInputValue(event)}
            >
              <IconFont name="qingkong" size="34"></IconFont>
            </View>
          </View>
          {/* {this.searchResultContent()} */}
          {searchResultList && searchResultList.length
            ? this.searchResultContent()
            : this.searchResultNone()}
        </View>
      </View>
    );
  }
}

export default SearchPage;
