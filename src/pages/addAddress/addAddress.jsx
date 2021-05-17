import React, { Component } from "react";
import "./addAddress.scss";
import {
  View,
  Text,
  Image,
  Input,
  Form,
  Button,
  Picker
} from "@tarojs/components";
import { AtSwitch } from "taro-ui";
import "taro-ui/dist/style/components/switch.scss";
import IconFont from "@/components/iconfont";
// import { Picker } from "@tarojs/components";
import "taro-ui/dist/style/components/list.scss";
import { request } from "@/common/helper";
import Taro from "@tarojs/taro";

class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "add address",
      isDefault: false, // 1 默认 0 非默认
      isPhone: true, // 校验手机号是否合法
      provincesList: [], // 省
      provincesArr: [],
      currentProvinceKey: 0,
      cityList: [], // 市
      cityArr: [],
      currentCityKey: 0,
      areaList: [], // 区
      areaArr: [],
      currentAreaKey: 0,
      multiArray: [[], [], []],
      multiIndex: [0, 0, 0],
      ownerAddr: "" // 所在地区
    };
  }

  componentDidMount() {
    this.getProvince();
  }

  getProvince = () => {
    let reqData = {
      parentCode: ""
    };
    request("/haohuidu/app/area/list", "GET", reqData).then(resp => {
      let provincesList = [...resp.list];
      let provincesArr = [
        ...resp.list.map(item => {
          return item.code;
        })
      ];
      this.setState({
        provincesList,
        provincesArr,
        multiArray: [provincesList, [], []]
      });
      let defaultCode = this.state.provincesList[0].code;
      if (defaultCode) {
        this.setState({
          currentProvinceKey: defaultCode
        });

        this.getCity(defaultCode);
      }
    });
  };

  getCity = code => {
    let reqData = {
      parentCode: code
    };
    request("/haohuidu/app/area/list", "GET", reqData).then(resp => {
      let cityList = [...resp.list];
      let cityArr = [
        ...resp.list.map(item => {
          return item.code;
        })
      ];
      this.setState({
        multiArray: [this.state.provincesList, cityList, []],
        cityList,
        cityArr
      });
      let defaultCode = this.state.cityList[0].code;
      if (defaultCode) {
        this.setState({
          currentCityKey: defaultCode
        });
        this.getArea(defaultCode);
      }
    });
  };

  getArea = code => {
    let reqData = {
      parentCode: code
    };

    request("/haohuidu/app/area/list", "GET", reqData).then(resp => {
      let areaList = [...resp.list];
      let areaArr = [
        ...resp.list.map(item => {
          return item.code;
        })
      ];
      this.setState({
        multiArray: [this.state.provincesList, this.state.cityList, areaList],
        areaList,
        areaArr
      });
    });
  };

  bottomBtnRender = () => {
    return (
      <Button className="bottom-btn" formType="submit">
        保存
      </Button>
    );
  };

  formSubmit = e => {
    let { name, phone, detailAddr } = e.detail.value;
    let { ownerAddr } = this.state;
    let addReqData = {
      consignee: name,
      phone,
      // provinces: "浙江省绍兴市上虞区",
      provinces: ownerAddr,
      addr: detailAddr,
      setDefault: this.state.isDefault
    };
    // 判断信息是否完善
    if (!(ownerAddr && name && phone && detailAddr)) {
      // debugger;
      Taro.showToast({
        icon: "none",
        title: "请先完善信息..."
      });
      return;
    } else {
      request("/haohuidu/app/user/addr/add", "POST", addReqData)
        .then(() => {
          Taro.showToast({
            icon: "success",
            title: "保存成功"
          });
          Taro.navigateBack({
            delta: 1
          });
        })
        .catch(err => {
          Taro.showToast({
            title: err.msg,
            icon: "none"
          });
        });
    }
  };

  handleChangeSwitch = e => {
    this.setState({
      isDefault: e
    });
  };

  handleBlurPhone = e => {
    let phone = e.detail.value;

    if (phone && !/^1[3456789]\d{9}$/.test(phone)) {
      this.setState({
        isPhone: false
      });
    } else {
      this.setState({
        isPhone: true
      });
    }
  };

  handleChangePicker = e => {
    let selectedPickerIndex = e.detail.value;
    let { provincesList, areaList, cityList } = this.state;
    let provinceName = "";
    let cityName = "";
    let areaName = "";
    if (provincesList.length) {
      provinceName = provincesList[selectedPickerIndex[0]].name;
      if (cityList.length) {
        cityName = cityList[selectedPickerIndex[1]].name;
        if (areaList.length) {
          areaName = areaList[selectedPickerIndex[2]].name;
        }
      }
    }
    this.setState({
      ownerAddr: [provinceName, cityName, areaName].join(" ")
    });
    // console.log(provinceName, cityName, areaName)
  };

  handleColumnChange = e => {
    let column = e.detail.column;
    let data = {
      multiIndex: JSON.parse(JSON.stringify(this.state.multiIndex)),
      multiArray: JSON.parse(JSON.stringify(this.state.multiArray))
    };
    data.multiIndex[column] = e.detail.value;
    switch (column) {
      case 0:
        let currentCityKey = this.state.provincesList[e.detail.value].code;
        this.getCity(currentCityKey);
        data.multiIndex[1] = 0;
        break;
      case 1:
        let currentAreaKey = this.state.cityList[e.detail.value].code;
        this.getArea(currentAreaKey);
        data.multiIndex[2] = 0;
        break;
    }
    this.setState({
      multiIndex: data.multiIndex,
      multiArray: data.multiArray
    });
  };

  render() {
    const { isPhone, multiArray, ownerAddr } = this.state;
    return (
      <View className="add-address">
        <Form onSubmit={this.formSubmit}>
          <View className="wrapper">
            <View className="consignee row-temp">
              <View className="consignee-left left-temp">收货人：</View>
              <View className="consignee-right">
                <Input
                  placeholder="请输入收货人姓名"
                  placeholderStyle="color: #999"
                  name="name"
                  maxlength="8"
                />
              </View>
            </View>
            <View className="phone row-temp">
              <View className="phone-left left-temp">手机号码：</View>
              <View className="phone-right">
                <Input
                  placeholder="请输入手机号"
                  placeholderStyle="color: #999"
                  name="phone"
                  maxlength="11"
                  onBlur={this.handleBlurPhone}
                  className={isPhone ? "" : "check-phone"}
                />
              </View>
            </View>
            <Picker
              mode="multiSelector"
              range={multiArray}
              onChange={this.handleChangePicker}
              rangeKey="name"
              onColumnChange={this.handleColumnChange}
            >
              <View className="p-addr row-temp">
                <View className="p-addr-left left-temp">所在地区：</View>
                <View className="p-addr-right">
                  {ownerAddr ? (
                    <View className="content-addr-right-text">{ownerAddr}</View>
                  ) : (
                    <View className="addr-right-text">省份 城市 地区</View>
                  )}

                  <View className="icon">
                    <IconFont name="gengduo2" size="20" />
                  </View>
                </View>
              </View>
            </Picker>

            <View className="p-detail-addr row-temp">
              <View className="p-detail-addr-left left-temp">详细地址：</View>
              <View className="p-detail-addr-right">
                <Input
                  placeholder="如道路、门牌号、小区、乡镇、村…"
                  placeholderStyle="color: #999"
                  name="detailAddr"
                  maxlength="50"
                />
              </View>
            </View>
            <View className="default-address">
              <View className="default-text">设为默认地址：</View>
              <View>
                <AtSwitch
                  border={false}
                  color="#0399FA"
                  onChange={this.handleChangeSwitch}
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

export default AddAddress;
