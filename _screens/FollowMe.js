import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import MapView from 'react-native-maps';

export default class FollowMe extends Component {

    static navigationOptions = {
        title: 'MySafetyApp',
        headerLeft: null
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>A map is going to load here</Text> */}
                <MapView style={styles.map}
                    region={{
                        latitude: 9.0653857,
                        longitude: 7.4678714000000355,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}
                >
                    <MapView.Marker 
                        coordinates={{
                            latitude: 9.0653857,
                            longitude: 7.4678714000000355,
                        }}
                        title={"Title"}
                        description={"Description"}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    map: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});