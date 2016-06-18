/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from 'react-native';
import addNetworkConnectivityGatekeeper from './src/wrappers/addNetworkConnectivityGatekeeper';
import initializeApp from './src/wrappers/initializeApp';
import MainView from './src/views/MainView';
const app = initializeApp(
    addNetworkConnectivityGatekeeper(MainView)
);

AppRegistry.registerComponent('JSMeetupApp', () => app);
