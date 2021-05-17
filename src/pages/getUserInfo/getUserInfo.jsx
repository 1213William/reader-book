import React, { Component } from "react";
import "./getUserInfo.scss";
import { View, Text, Image, Button } from "@tarojs/components";
import lang from "@/assets/lang.jpg";
import { onloadUserInfo } from "@/common/helper";
import Taro from "@tarojs/taro";
import { request } from "@/common/helper";

class GetUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "this is get user info",
      loginCode: ""
    };
  }

  componentDidMount() {
    Taro.login({
      success: loginSucc => {
        this.setState({
          loginCode: loginSucc.code
        });
      }
    });
  }

  onGetUserInfo = e => {
    Taro.getUserProfile({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        console.log(res)
        let loginData = {
          code: this.state.loginCode,
          encryptedData: res.encryptedData,
          iv: res.iv
        }
        request('/haohuidu/wx/login', 'POST', loginData)
        .then(resp => {
          Taro.setStorageSync('token', resp.token)
          console.log(resp)
        })
        Taro.navigateBack({
          delta: 1
        });
      }
    });
  };

  // getPhoneNumber = e => {
  //   let { encryptedData, iv } = e.detail;
  //   let loginData = {
  //     encryptedData,
  //     iv,
  //     code: this.state.loginCode
  //   };
  //   console.log(encryptedData, iv);
  //   request("/hhd/wx/login", "POST", loginData).then(resp => {
  //     Taro.setStorageSync("token", resp.token);
  //     console.log(resp);
  //     Taro.navigateBack({
  //       delta: 1
  //     });
  //     debugger
  //   });
  // };

  render() {
    const { msg } = this.state;
    return (
      <View className="get-user-info">
        <View className="user-info-header">
          <Image src={lang} className="header-img" />
          <Text className="temp">好慧读</Text>
        </View>
        <View className="user-info-desc">
          <Text className="temp1 tag">
            为了更好的提供服务，请确认授权以下信息
          </Text>
          <Text className="temp2 tag">
            &nbsp;•&nbsp;获得您的公开信息（手机号、微信号等）
          </Text>
        </View>
        <Button
          className="user-info-btn"
          type="primary"
          openType="getUserProfile"
          onClick={this.onGetUserInfo}
          // openType="getPhoneNumber"
          // onGetPhoneNumber={this.getPhoneNumber}
        >
          微信用户快捷登录
        </Button>
      </View>
    );
  }
}

export default GetUserInfo;
