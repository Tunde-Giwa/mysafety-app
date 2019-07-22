import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Platform
} from 'react-native';

const BorderedInput = ({ autoCapitalize, placeholder, onChangeText, keyboardType, secureTextEntry, value }) => {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={onChangeText}
                keyboardType={keyboardType} 
                secureTextEntry={secureTextEntry}
                value={value}
                placeholder={placeholder}
                autoCapitalize={autoCapitalize}
                style={styles.textInput}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginBottom: 10,
    },
    textInput: {
        paddingHorizontal: 10,
        lineHeight: Platform.OS === 'ios' ? 50 : 25,
        height: 50,
        fontSize: 15,
    }
});

export { BorderedInput }