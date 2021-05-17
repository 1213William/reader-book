import React, { Component } from 'react';
import {View, Text} from '@tarojs/components'
import './index.scss'

class MoreTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'this is more theme'
    }
  }
  
  render() {
    const {msg} = this.state
    return (
      <View className="more-theme">
        {{msg}}
      </View>
    );
  }
}

export default MoreTheme;