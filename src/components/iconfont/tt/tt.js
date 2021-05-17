Component({
  properties: {
    // gengduo_icon3x | yichu2 | chaoshiguanbi | yiwancheng | daishouhuo1 | daizhifu1 | yiqianshou | zhengzailushang | kefu | bianjidizhi | dizhi | huiyuanyiguoqi-tishi2 | kaitonghuiyuan-tishi | shipindaodu | siweidaotu | shu | yaoqingtishi | daipingjia | daishouhuo | daizhifu | tongzhi | tishi | zhankai | shuku-icon2 | shuku-icon | qingkong | bofang | top3 | top1 | top22 | gengduo2 | gengduo | sousuo-icon
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * tt.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    svgSize: 18 / 750 * tt.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
});
