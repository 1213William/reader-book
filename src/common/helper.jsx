import Taro from "@tarojs/taro";

// const baseUrl = "https://lyt.youshupai.com/api";
let baseUrlPrefix = "";

let a = "http://192.168.8.16:8080";

// 根据环境配置URL
switch (process.env.NODE_ENV) {
  case "development":
    baseUrlPrefix = "https://yapi.yihui.wang/mock/51";
    // test-haohuidu
    // baseUrlPrefix = 'https://haohuidu-api-test.yihui.wang'
    // 重八
    // baseUrlPrefix = 'http://192.168.8.65:8080'
    // 阿雅
    // baseUrlPrefix = "http://192.168.8.16:8080";
    break;
  case "production":
    baseUrlPrefix = "https://release.com/";
    break;
}

export const request = (url, method = "GET", data) => {
  let _url = `${baseUrlPrefix}${url}`;

  return new Promise((resolve, reject) => {
    Taro.showLoading({
      title: "正在加载"
    });
    // data['token'] = Taro.getStorageSync('token')
    Taro.request({
      url: _url,
      data: data,
      method: method,
      header: {
        "content-type": "application/json",
        token: Taro.getStorageSync("token")
      },
      success: res => {
        // console.log(`从${url}获取到的数据`, res);
        let { code } = res.data;
        if (code === 200) {
          resolve(res.data.data);
          Taro.hideLoading();
        }
        // else if (code === 6001) {
        //   Taro.showToast({
        //     icon: "success",
        //     title: "已加入书架"
        //   });
        // }
        else {
          Taro.showToast({
            title: "数据请求错误"
          });
          reject(res.data);
        }
        Taro.hideLoading();
      },
      fail() {
        reject("接口有误，请检查");
      }
    });
  });
};
