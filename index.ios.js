/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import addNetworkConnectivityGatekeeper from './src/wrappers/addNetworkConnectivityGatekeeper';
import initializeApp from './src/wrappers/initializeApp';
import request from 'superagent';

class JSMeetupApp extends Component {

    componentDidMount() {
        request
            .get('https://api.meetup.com/JS-Belgrade-Meetup?&photo-host=public&key=303b493952312314f517d2648147f20')
            .end((err, data) => {
                console.log(data);
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Testing code push
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

const app = initializeApp(
    addNetworkConnectivityGatekeeper(JSMeetupApp)
);

AppRegistry.registerComponent('JSMeetupApp', () => app);
