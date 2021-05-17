import React, { Component } from 'react';
import {View, Text} from '@tarojs/components'
import './index.scss'

class BookItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'this is bookItem'
    }
  }
  render() {
    const {msg} = this.state
    return (
      <View className="book-item">
        {{msg}}
      </View>
    );
  }
}

export default BookItem;