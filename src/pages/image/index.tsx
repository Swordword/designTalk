import React, { Component } from 'react';
import { getCurrentInstance } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class Index extends Component {
    componentDidMount() {
        console.log('id', getCurrentInstance().router.params);
    }
    render() {
        return (
            <View>
                <Text>view Page</Text>
            </View>
        );
    }
}
