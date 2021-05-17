/* eslint-disable */

import React from 'react';
import IcongengduoIcon3X from './IcongengduoIcon3X';
import Iconyichu2 from './Iconyichu2';
import Iconchaoshiguanbi from './Iconchaoshiguanbi';
import Iconyiwancheng from './Iconyiwancheng';
import Icondaishouhuo1 from './Icondaishouhuo1';
import Icondaizhifu1 from './Icondaizhifu1';
import Iconyiqianshou from './Iconyiqianshou';
import Iconzhengzailushang from './Iconzhengzailushang';
import Iconkefu from './Iconkefu';
import Iconbianjidizhi from './Iconbianjidizhi';
import Icondizhi from './Icondizhi';
import IconhuiyuanyiguoqiTishi2 from './IconhuiyuanyiguoqiTishi2';
import IconkaitonghuiyuanTishi from './IconkaitonghuiyuanTishi';
import Iconshipindaodu from './Iconshipindaodu';
import Iconsiweidaotu from './Iconsiweidaotu';
import Iconshu from './Iconshu';
import Iconyaoqingtishi from './Iconyaoqingtishi';
import Icondaipingjia from './Icondaipingjia';
import Icondaishouhuo from './Icondaishouhuo';
import Icondaizhifu from './Icondaizhifu';
import Icontongzhi from './Icontongzhi';
import Icontishi from './Icontishi';
import Iconzhankai from './Iconzhankai';
import IconshukuIcon2 from './IconshukuIcon2';
import IconshukuIcon from './IconshukuIcon';
import Iconqingkong from './Iconqingkong';
import Iconbofang from './Iconbofang';
import Icontop3 from './Icontop3';
import Icontop1 from './Icontop1';
import Icontop22 from './Icontop22';
import Icongengduo2 from './Icongengduo2';
import Icongengduo from './Icongengduo';
import IconsousuoIcon from './IconsousuoIcon';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'gengduo_icon3x':
      return <IcongengduoIcon3X {...rest} />;
    case 'yichu2':
      return <Iconyichu2 {...rest} />;
    case 'chaoshiguanbi':
      return <Iconchaoshiguanbi {...rest} />;
    case 'yiwancheng':
      return <Iconyiwancheng {...rest} />;
    case 'daishouhuo1':
      return <Icondaishouhuo1 {...rest} />;
    case 'daizhifu1':
      return <Icondaizhifu1 {...rest} />;
    case 'yiqianshou':
      return <Iconyiqianshou {...rest} />;
    case 'zhengzailushang':
      return <Iconzhengzailushang {...rest} />;
    case 'kefu':
      return <Iconkefu {...rest} />;
    case 'bianjidizhi':
      return <Iconbianjidizhi {...rest} />;
    case 'dizhi':
      return <Icondizhi {...rest} />;
    case 'huiyuanyiguoqi-tishi2':
      return <IconhuiyuanyiguoqiTishi2 {...rest} />;
    case 'kaitonghuiyuan-tishi':
      return <IconkaitonghuiyuanTishi {...rest} />;
    case 'shipindaodu':
      return <Iconshipindaodu {...rest} />;
    case 'siweidaotu':
      return <Iconsiweidaotu {...rest} />;
    case 'shu':
      return <Iconshu {...rest} />;
    case 'yaoqingtishi':
      return <Iconyaoqingtishi {...rest} />;
    case 'daipingjia':
      return <Icondaipingjia {...rest} />;
    case 'daishouhuo':
      return <Icondaishouhuo {...rest} />;
    case 'daizhifu':
      return <Icondaizhifu {...rest} />;
    case 'tongzhi':
      return <Icontongzhi {...rest} />;
    case 'tishi':
      return <Icontishi {...rest} />;
    case 'zhankai':
      return <Iconzhankai {...rest} />;
    case 'shuku-icon2':
      return <IconshukuIcon2 {...rest} />;
    case 'shuku-icon':
      return <IconshukuIcon {...rest} />;
    case 'qingkong':
      return <Iconqingkong {...rest} />;
    case 'bofang':
      return <Iconbofang {...rest} />;
    case 'top3':
      return <Icontop3 {...rest} />;
    case 'top1':
      return <Icontop1 {...rest} />;
    case 'top22':
      return <Icontop22 {...rest} />;
    case 'gengduo2':
      return <Icongengduo2 {...rest} />;
    case 'gengduo':
      return <Icongengduo {...rest} />;
    case 'sousuo-icon':
      return <IconsousuoIcon {...rest} />;

  }

  return null;
};

export default IconFont;
