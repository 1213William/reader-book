Component({
  props: {
    // gengduo_icon3x | yichu2 | chaoshiguanbi | yiwancheng | daishouhuo1 | daizhifu1 | yiqianshou | zhengzailushang | kefu | bianjidizhi | dizhi | huiyuanyiguoqi-tishi2 | kaitonghuiyuan-tishi | shipindaodu | siweidaotu | shu | yaoqingtishi | daipingjia | daishouhuo | daizhifu | tongzhi | tishi | zhankai | shuku-icon2 | shuku-icon | qingkong | bofang | top3 | top1 | top22 | gengduo2 | gengduo | sousuo-icon
    name: null,
    // string | string[]
    color: '',
    size: 18,
  },
  data: {
    quot: '"',
    svgSize: 18,
    isStr: true,
  },
  didMount() {
    const size = this.props.size;
    const color = this.props.color;

    this.setData({
      isStr: typeof color === 'string',
    });

    if (size !== this.data.svgSize) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
  disUpdate(prevProps) {
    const size = this.props.size;
    const color = this.props.color;

    if (color !== prevProps.color) {
      this.setData({
        isStr: typeof color === 'string',
      });
    }

    if (size !== prevProps.size) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
});
