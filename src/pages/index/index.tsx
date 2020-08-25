import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, CoverView, CoverImage } from '@tarojs/components';
import './index.scss';
import api from '../../api';

import { Props, State } from '../../types';

export default class Index extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { imageList: [], loading: false };
    }

    componentDidMount() {
        api.imageList()
            .then((result) => {
                console.log('result', result);
                const resList = result.data;
                this.setState({
                    imageList: resList,
                });
            })
            .catch((err) => {
                throw err;
            });
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}
    onShareTimeline() {}
    navigateImage = (id) => {
        console.log('id', id);
        Taro.navigateTo({
            url: `/pages/image/index?id=${id}`,
        });
    };
    render() {
        const { imageList } = this.state;
        return (
            <View className='home-page'>
                {imageList.map((img) => (
                    <View className='img-grid' key={img.id} onClick={() => this.navigateImage(img.id)}>
                        <CoverView>
                            <CoverImage src={img.thumbnail} />
                        </CoverView>
                        <Text className='img-title'>{img.title}</Text>
                    </View>
                ))}
            </View>
        );
    }
}
