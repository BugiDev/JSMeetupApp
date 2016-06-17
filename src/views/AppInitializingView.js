/**
 * Created by bogdanbegovic on 6/17/16.
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ProgressViewIOS
} from 'react-native';

import DeviceInfo from 'react-native-device-info';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    subtitle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 5
    },
    progress: {
        width: 300
    }
});

export default class AppInitializingView extends Component {

    render() {
        let progressBar;
        if (this.props.progressPercentage > 0) {
            progressBar = <ProgressViewIOS style={styles.progress} progress={this.props.progressPercentage} progressTintColor="#f7281f"/>;
        }
        return (
            <View style={styles.container}>
                <Image source={require('../images/meetup-logo.png')}/>
                <Text style={styles.subtitle}>{this.props.statusText}</Text>
                <Text style={styles.subtitle}>App Version: {DeviceInfo.getVersion()}</Text>
                {progressBar}
            </View>
        );
    }
}

AppInitializingView.propTypes = {
    progressPercentage: React.PropTypes.number,
    statusText: React.PropTypes.string
};
