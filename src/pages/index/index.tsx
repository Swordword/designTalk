import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import api from '../../api'
import { imageInfo, Props, State } from '../../types'



export default class Index extends Component<Props, State> {
  componentDidMount() {
    
    api.imageList().then((result) => {
      console.log('result', result)
      const resList: imageInfo[] = result.data
      this.setState({
        imageList: resList
      })
    }).catch((err) => {
      throw err
    });
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  onShareTimeline() {

  }

  render() {
    // const { imageList } = this.state
    return (
      <View className='index'>
        <Text>Hello11 world!</Text>
        {/* imageList.map(image => (
          <Text>{image.title}</Text>
        )) */}
        {/* {imageList.length ? 'hello world' : null} */}
      </View>
    )
  }
}
