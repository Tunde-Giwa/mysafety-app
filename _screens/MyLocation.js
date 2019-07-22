import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class MyLocation extends Component {

    static navigationOptions = {
        title: 'My Location',
        headerLeft: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>My Location</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});