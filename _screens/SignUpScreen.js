import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    ScrollView,
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { BorderedInput, Button } from '../_components/common';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SignUpScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    handleSignUp = () => {
        this.props.navigation.navigate('FakeCall');
    }

    render() {
        const height = Dimensions.get("window").height;
        const {goBack} = this.props.navigation;
        return (
            <KeyboardAwareScrollView
                style={{ backgroundColor: '#f0f0f0' }} 
                contentContainerStyle={styles.container}
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}>

                <ScrollView
                    keyboardDismissMode="on-drag"
                    contentContainerStyle={{paddingTop: 0 }}
                    style={{ backgroundColor: '#f0f0f0', height: height }}>

                    <View style={styles.container}>
                        <View style={styles.cancelButtonContainer}>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={ () => goBack()}>
                                <Icon
                                    name='close'
                                    type='ant-design'
                                    color='#666666'
                                    size={32}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accessFormArea}>

                            <Image
                                style={styles.logo} 
                                source={require('../_assets/images/logo-color.png')} />
                            
                            <BorderedInput 
                                placeholder="First Name"
                            />
                            
                            <BorderedInput 
                                placeholder="Last Name"
                            />
                            
                            <BorderedInput 
                                placeholder="Phone"
                            />
                            
                            <BorderedInput 
                                placeholder="Email"
                            />
                            
                            <BorderedInput 
                                placeholder="Password"
                            />
                            
                            <Button onPress={this.handleSignUp}>
                                <Text>Sign Up</Text>
                            </Button>
                            
                            <Text style={styles.alternativeText}>or sign up with</Text>
                            
                            <View style={styles.socialMedia}>
                                <TouchableOpacity style={styles.socialMediaLink}>
                                    <Image 
                                        source={require('../_assets/images/search.png')}
                                        style={styles.socialMediaIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.socialMediaLink}>
                                    <Image 
                                        source={require('../_assets/images/facebook.png')}
                                        style={styles.socialMediaIcon} />
                                </TouchableOpacity>
                            </View>
                        
                        </View>
                    
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    cancelButtonContainer: {
        height: 50,
        width: 50,
        top: 20,
        right: 20,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    accessFormArea: {
        flex: 1,
        marginTop: 70,
    },
    logoContainer: {
        height: 40,
    },
    logo: {
        height: 40,
        width: 120,
        marginBottom: 20,
        alignSelf: 'center'
    },
    alternativeText: {
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
        color: '#999'
    },
    socialMedia: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    socialMediaLink: {
        height: 30,
        width: 30,
       marginHorizontal: 10
    },
    socialMediaIcon: {
        height: 30,
        width: 30,
        
    }
});