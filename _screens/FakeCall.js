import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class FakeCall extends Component {

    static navigationOptions = {
        title: 'Fake Call'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Fake Call</Text>
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