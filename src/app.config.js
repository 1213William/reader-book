import { useGlobalIconFont } from "./components/iconfont/helper";

export default {
  pages: [
    "pages/owner/owner",
    'pages/logisticsInfo/logisticsInfo',
    "pages/index/index",
    "pages/bookrack/bookrack", 
    "pages/stackRoom/stackRoom",
    "pages/orderFormList/orderFormList",
    "pages/orderFormDetail/orderFormDetail",
    "pages/addressList/addressList",
    "pages/addAddress/addAddress",
    "pages/themeRecommedPage/ThemeRecommedPage",
    'pages/goToEvaluate/goToEvaluate',
    "pages/searchPage/searchPage",
    "pages/hotBookList/hotBookList",
    "pages/getUserInfo/getUserInfo",
    "pages/confirmOrderForm/confirmOrderForm",
    "pages/convertSucc/convertSucc",
    "pages/editAddress/editAddress",
    "pages/monthRecommed/monthRecommed",
    "pages/joinMember/joinMember",
    "pages/bookDetail/bookDetail",
    "pages/checkOrderForm/checkOrderForm",
  ],
  tabBar: {
    list: [
      {
        iconPath: "./assets/index-logo.png",
        selectedIconPath: "./assets/index-logo-s.png",
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        iconPath: "./assets/bookrack.png",
        selectedIconPath: "./assets/bookrack-s.png",
        pagePath: "pages/bookrack/bookrack",
        text: "书架"
      },
      {
        iconPath: "./assets/owner.png",
        selectedIconPath: "./assets/owner-s.png",
        pagePath: "pages/owner/owner",
        text: "我的"
      }
    ],
    color: "#E1E1E1",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white"
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  usingComponents: Object.assign(useGlobalIconFont())
};
