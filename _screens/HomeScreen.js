import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

export default class HomeScreen extends Component {
    
    static navigationOptions = {
        header: null,
    }

    goToSignUp = () => {
        this.props.navigation.navigate('SignUpScreen')
    }

    goToLogin = () => {
        this.props.navigation.navigate('LoginScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../_assets/images/logo.png')} />
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.goToSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.goToLogin}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001f3f'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logo: {
        height: 70,
        width: 200,
    },
    actionContainer: {
        flex: 1, 
        justifyContent: 'flex-end',
        paddingHorizontal: 40,
        marginBottom: 40
    },
    buttonContainer: {
        marginBottom: 15,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        borderRadius: 4
    },
    buttonText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16
    }

});