import React, { Component } from 'react';
import {View, Text, Image} from '@tarojs/components'
import './index.scss'
import IconFont from '@/components/iconfont'
import rAssessBg from "@/assets/rAssessBg.png";

class ReaderAssess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'this is reader assess'
    }
  }
  
  render() {
    const {msg} = this.state
    return (
      <View className="reader-assess">
        <Image src={rAssessBg} className='assess-img' />
        <View className="assess-title">
          阅读力评估
        </View>
        <View className="assess-choose">
          <Text>去选择适合孩子的书</Text>
          <View className="icon">
            <IconFont name='gengduo' size='30'></IconFont>
          </View>
        </View>
      </View>
    );
  }
}

export default ReaderAssess;