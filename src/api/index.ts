import Taro from '@tarojs/taro'

import {response} from '../types'


const baseURL = "https://mp.massivejohn.com"


class API {
  // constructor() {
  // }
  imageList() {
    return new Promise<response>((resolve , reject) => {
      Taro.request({
        url: `${baseURL}/imageList`,
        success: function (res) {
          console.log('res', res)
          resolve(res.data)
        },
        fail: function (error) {
          reject(error)
        }
      })
    })
  }
  image(relationId: string | number) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: `${baseURL}/image?relationId=${relationId}`,
        success: function (res) {
          console.log('res', res)
          resolve(res.data)
        },
        fail: function (error) {
          reject(error)
        }
      })

    })

  }
}
export default new API()