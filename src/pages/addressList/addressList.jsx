import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./addressList.scss";
import Taro from "@tarojs/taro";
import defaultAddrBg from "@/assets/defaultAddrBg.png";
import IconFont from "@/components/iconfont";
import { request } from "@/common/helper";

class AddressList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "this is address list",
      addressListData: {}
    };
  }

  bottomBtnRender = () => {
    return (
      <View
        className="button-btn"
        onClick={() => {
          Taro.navigateTo({
            url: "../addAddress/addAddress"
          });
        }}
      >
        添加地址
      </View>
    );
  };

  componentDidMount() {}

  componentDidShow() {
    request("/haohuidu/app/user/addr", "GET").then(resp => {
      console.log("resp ", resp);
      this.setState({
        addressListData: resp.addr
      });
    });
  }

  removeAddr = (e, addrId, addrIndex) => {
    e.stopPropagation();
    Taro.showModal({
      title: "确定要移除当前地址吗？",
      confirmText: "确认",
      cancelText: "取消",
      success: m => {
        // 直接将书籍进行删除
        // 确定删除
        if (m.confirm == true) {
          let removeAddrReqData = {
            addrId
          };
          request(
            "/haohuidu/app/user/addr/remove",
            "POST",
            removeAddrReqData
          ).then(() => {
            let newAddressListData = JSON.parse(
              JSON.stringify(this.state.addressListData)
            );
            newAddressListData.list.splice(addrIndex, 1);
            this.setState({
              addressListData: newAddressListData
            });
            if (this.state.addressListData.list.length == 0) {
              Taro.navigateBack({
                delta: 1
              });
            }
          });
        }
      }
    });
  };

  render() {
    const { addressListData } = this.state;
    return (
      <View className="address-list">
        <View className="wrapper">
          {addressListData.list
            ? addressListData.list.map((item, itemIndex) => {
                return (
                  <View
                    className={
                      item.isDefault
                        ? "default-address-content"
                        : "address-content"
                    }
                  >
                    {item.isDefault ? (
                      <Image
                        className="default-address-bg"
                        src={defaultAddrBg}
                      />
                    ) : (
                      ""
                    )}
                    <View className="content-left">
                      <View className="address-content-header">
                        <Text className="header-name">{item.consignee}</Text>
                        <Text className="header-phone">{item.phone}</Text>
                      </View>
                      <View className="address-content-detail-address">
                        {`${item.provinces}${item.addr}`}
                      </View>
                    </View>
                    <View
                      style={{
                        position: "absolute",
                        right: "50px",
                        top: "35px"
                      }}
                      onClick={event =>
                        this.removeAddr(event, item.id, itemIndex)
                      }
                    >
                      <IconFont name="gengduo_icon3x" size="30" />
                    </View>
                    <View
                      className="content-right"
                      onClick={() => {
                        Taro.setStorageSync("addressInfo", item);
                        Taro.navigateTo({
                          url: "../editAddress/editAddress"
                        });
                      }}
                    >
                      <IconFont name="bianjidizhi" size="44" />
                    </View>
                  </View>
                );
              })
            : ""}
        </View>
        {this.bottomBtnRender()}
      </View>
    );
  }
}

export default AddressList;
