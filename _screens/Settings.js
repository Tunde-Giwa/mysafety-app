import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Settings extends Component {

    static navigationOptions = {
        title: 'Settings',
        headerLeft: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
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