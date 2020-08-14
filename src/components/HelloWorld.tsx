import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'



export default class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Text>hello world</Text>
        <Button>显示欢迎</Button>
      </View>
    )
  }
}
