import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import todayImage from '../../assets/images/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage}
                    style={styles.background}>


                </ImageBackground>
                <View style={styles.TaskList}>
                    <Text>TaskList</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    TaskList: {
        flex: 7
    },
})