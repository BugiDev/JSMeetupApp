/**
 * Created by bogdanbegovic on 6/17/16.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './NetworkUnavailableView.style';

export default class NetworkErrorView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.subtitle}>{this.props.subTitle}</Text>
            </View>
        );
    }
}

NetworkErrorView.propTypes = {
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string
};

NetworkErrorView.defaultProps = {
    title: 'Network Unavailable',
    subTitle: 'You are currently offline, and our application needs network in order to run. Please find a wifi.'
};
