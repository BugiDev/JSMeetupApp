/**
 * Created by bogdanbegovic on 6/17/16.
 */
import React, {Component} from 'react';
import {NetInfo} from 'react-native';
import NetworkUnavailableView from './../views/NetworkUnavailableView';

export default function addNetworkConnectivityGatekeeper(component) {
    return class NetworkConnectivityGatekeeper extends Component {

        constructor(props) {
            super(props);
            this.state = {
                isConnected: true
            };
            this._updateState = this._updateState.bind(this);
            this.componentDidMount = this.componentDidMount.bind(this);
            this.componentWillUnmount = this.componentWillUnmount.bind(this);
        }

        _updateState(isConnected) {
            this.setState({isConnected});
        }

        componentDidMount() {
            // get network info for the first time
            NetInfo.isConnected.fetch().then(this._updateState);

            // subscrube to updates in the future
            NetInfo.isConnected.addEventListener(
                'change',
                this._updateState
            );
        }

        componentWillUnmount() {
            NetInfo.isConnected.removeEventListener(
                'change',
                this._updateState
            );
        }

        render() {
            return this.state.isConnected ? React.createElement(component) : (<NetworkUnavailableView />);
        }

    };
}
