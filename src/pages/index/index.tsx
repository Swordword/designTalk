import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import api from '../../api'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { 
    api.imageList()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onShareTimeline(){
    
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello11 world!</Text>
      </View>
    )
  }
}
