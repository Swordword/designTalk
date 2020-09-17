import React, { Component } from 'react';
import { getCurrentInstance } from '@tarojs/taro';
import { View, Text, CoverView, CoverImage } from '@tarojs/components';
import api from '../../api';
import { singleImageInfo } from '../../types';

export default class Index extends Component<
    {},
    {
        imageList: Array<singleImageInfo>;
    }
> {
    state = {
        imageList: null,
    };
    componentDidMount() {
        console.log('id', getCurrentInstance()?.router?.params);
        const relationId = getCurrentInstance()?.router?.params.id;
        this.getImgInfo(relationId);
    }
    async getImgInfo(relationId) {
        let imageList;
        try {
            imageList = await api.image(relationId);
            console.log('api imageList', imageList);
            this.setState({
                imageList: imageList.data,
            });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        const { imageList } = this.state;
        if (!imageList) return <Text>loading..</Text>;
        return imageList.map((image, index) => (
            <View key={index}>
                <CoverView>
                    <CoverImage src={image.key} />
                </CoverView>
                <Text>{image.name}</Text>
            </View>
        ));
    }
}
