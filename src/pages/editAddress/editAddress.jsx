import React, { Component } from "react";
import { View, Text, Image, Input, Form, Button } from "@tarojs/components";
import "./editAddress.scss";
import { AtSwitch } from "taro-ui";
import "taro-ui/dist/style/components/switch.scss";
import IconFont from "@/components/iconfont";
import { Picker } from "@tarojs/components";
import "taro-ui/dist/style/components/list.scss";
import { request } from "@/common/helper";
import Taro from "@tarojs/taro";

class EditAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "this is edit address",
      addressInfo: {} // 传递过来需要修改的信息
    };
  }

  componentDidMount() {
    this.setState(
      {
        addressInfo: Taro.getStorageSync("addressInfo")
      },
      () => {
        console.log("address ", this.state.addressInfo);
      }
    );
  }
  bottomBtnRender = () => {
    return <Button className="bottom-btn">保存</Button>;
  };

  handleSubmit = e => {
    console.log(e.detail.value);
  };
  render() {
    const { msg, addressInfo } = this.state;
    return (
      <View className="edit-address">
        <Form onSubmit={this.handleSubmit}>
          <View className="wrapper">
            <View className="consignee row-temp">
              <View className="consignee-left left-temp">收货人：</View>
              <View className="consignee-right">
                <Input
                  placeholder="请输入收货人姓名"
                  placeholderStyle="color: #999"
                  value={addressInfo.consignee}
                />
              </View>
            </View>
            <View className="phone row-temp">
              <View className="phone-left left-temp">手机号码：</View>
              <View className="phone-right">
                <Input
                  placeholder="请输入手机号"
                  placeholderStyle="color: #999"
                  value={addressInfo.phone}
                />
              </View>
            </View>
            <View className="p-addr row-temp">
              <View className="p-addr-left left-temp">所在地区：</View>
              <View className="p-addr-right">
                <View className="addr-right-text">{addressInfo.provinces}</View>
                <View className="icon">
                  <IconFont name="gengduo2" size="20" />
                </View>
              </View>
            </View>
            <View className="p-detail-addr row-temp">
              <View className="p-detail-addr-left left-temp">详细地址：</View>
              <View className="p-detail-addr-right">
                <Input
                  placeholder="如道路、门牌号、小区、乡镇、村…"
                  placeholderStyle="color: #999"
                  value={addressInfo.addr}
                />
              </View>
            </View>
            <View className="default-address">
              <View className="default-text">设为默认地址：</View>
              <View>
                <AtSwitch
                  border={false}
                  color="#0399FA"
                  checked={addressInfo.isDefault ? true : false}
                />
              </View>
            </View>
          </View>
          {this.bottomBtnRender()}
        </Form>
      </View>
    );
  }
}

export default EditAddress;
