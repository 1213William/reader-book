import React, { Component } from 'react';
import {View, Text} from '@tarojs/components'
import './checkOrderForm.scss'

class CheckOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'check order form'
    }
  }
  
  render() {
    const {msg} = this.state
    return (
      <View className="check-order-form">
        {msg}
      </View>
    );
  }
}

export default CheckOrderForm;