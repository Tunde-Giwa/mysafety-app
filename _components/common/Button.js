import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}>
            <Text style={styles.buttonTextStyle}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 50,
        backgroundColor: '#001f3f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    buttonTextStyle: {
        color: '#fff',
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 10,
    }
});

export { Button };