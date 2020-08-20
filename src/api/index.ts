import Taro from '@tarojs/taro'

const baseURL = "https://massivejohn.com:8012"

interface params {
  relationId: string | number
}

class API {
  constructor() {

  }
  imageList() {
    Taro.request({
      url:`${baseURL}/imageList`,
      success:function(res){
        console.log('res',res)
      }
    })
  }
  image(relationId: string | number) {
    Taro.request({
      url:`${baseURL}/imageList?id=${relationId}`,
      success:function(res){
        console.log('res',res)
      }
    })
  }
}
export default new API()