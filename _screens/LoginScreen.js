import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { BorderedInput, Button } from '../_components/common';

export default class LoginUpScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
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
                        placeholder="Email"
                    />
                    
                    <BorderedInput 
                        placeholder="Password"
                    />
                    
                    <Button>
                        <Text>Log In</Text>
                    </Button>
                    
                    <Text style={styles.alternativeText}>or login in with</Text>
                    
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
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
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