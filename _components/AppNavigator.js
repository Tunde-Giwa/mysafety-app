import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';
 
// Screens
import HomeScreen from '../_screens/HomeScreen';
import SignUpScreen from '../_screens/SignUpScreen';
import LoginScreen from '../_screens/LoginScreen';

// Tab Screens
import FollowMeScreen from '../_screens/FollowMe';
import FakeCallScreen from '../_screens/FakeCall';
import SOSScreen from '../_screens/SOS';
import MyLocationScreen from '../_screens/MyLocation';
import SettingsScreen from '../_screens/Settings';

  
const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
    SignUpScreen: { screen: SignUpScreen },
    LoginScreen: { screen: LoginScreen },
  },{
    mode: 'card',
    headerMode: 'screen',
  });

const FakeCallStack = createStackNavigator({
    FakeCall: { screen: FakeCallScreen },
});

const FollowMeStack = createStackNavigator({
    FollowMe: { screen: FollowMeScreen },
});

const SOSStack = createStackNavigator({
    SOS: { screen: SOSScreen },
});

const MyLocationStack = createStackNavigator({
    MyLocation: { screen: MyLocationScreen },
});

const SettingsStack = createStackNavigator({
    Settings: { screen: SettingsScreen },
});

const Tabs = createBottomTabNavigator({
    FollowMe: {
        screen: FollowMeStack,
        navigationOptions: {
            tabBarLabel: 'Follow Me',
            tabBarIcon: ({tintColor}) => <Icon name='navigation' type='feather' size={24} color={tintColor} />
        }
    },
    FakeCall: {
        screen: FakeCallStack,
        navigationOptions: {
            tabBarLabel: 'Fake Call',
            tabBarIcon: ({tintColor}) => <Icon name='phone-incoming' type='feather' size={24} color={tintColor} />
        }
    }, 
    SOS: {
        screen: SOSStack,
        navigationOptions: {
            title: '',
            tabBarIcon: ({ tintColor }) => <View style={styles.makeRequestContainer}><Text style={styles.sosButtonText}>SOS</Text></View>
        }
    },
    MyLocation: {
        screen: MyLocationStack,
        navigationOptions: {
            tabBarLabel: "I'm Here",
            tabBarIcon: ({tintColor}) => <Icon name='map-pin' type='feather' size={24} color={tintColor} />
        }
    }, 
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
            tabBarLabel: 'Setting',
            tabBarIcon: ({tintColor}) => <Icon name='settings' type='feather' size={24} color={tintColor} />
        }
    },
}, {
    tabBarOptions: {
        style: {
            height: 55,
            backgroundColor: '#001f3f'
        },
        showLabel: true,
        labelStyle: {
            fontSize: 13,
        },
        inactiveTintColor: "#888",
        activeTintColor: "#fff",
    }
});


const AppNavigator = createStackNavigator({
    Tabs: { screen: Tabs },
}, {
    mode: 'card',
    headerMode: 'none'
});

const styles = StyleSheet.create({
    makeRequestContainer: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginBottom: 35,
        backgroundColor: '#FF4136',
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sosButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    }
});

export default createAppContainer(AppNavigator);

