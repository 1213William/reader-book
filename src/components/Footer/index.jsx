import React, { Component } from 'react';
import './index.scss'
import {View, Text} from '@tarojs/components'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'this is Footer'
    }
  }
  
  render() {
    const {msg} = this.state
    return (
      <View className="footer">
        已经到底了～
      </View>
    );
  }
}

export default Footer;