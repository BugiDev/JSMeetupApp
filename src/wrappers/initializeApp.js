/**
 * Created by bogdanbegovic on 6/17/16.
 */
import React, {Component} from 'react';
import codePush from 'react-native-code-push';
import AppInitializingView from '../views/AppInitializingView';

export default function initializeApp(component) {
    return class InitializeApp extends Component {

        constructor() {
            super();
            this.state = {
                statusText: 'Arbor App is initialising...',
                progressPercentage: 0,
                upToDate: false,
                timePassed: false
            };
            this.syncStatusCallback = this.syncStatusCallback.bind(this);
            this.updateStatusCallback = this.updateStatusCallback.bind(this);
        }

        syncStatusCallback(status) {
            switch (status) {
                case codePush.SyncStatus.CHECKING_FOR_UPDATE:
                    this.setState({statusText: 'Checking for update...'});
                    break;
                case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                    this.setState({statusText: 'Downloading package...'});
                    break;
                case codePush.SyncStatus.INSTALLING_UPDATE:
                    this.setState({statusText: 'Installing update...'});
                    break;
                case codePush.SyncStatus.UP_TO_DATE:
                    this.setState(
                        {
                            statusText: 'App is up to date',
                            upToDate: true
                        });
                    break;
                case codePush.SyncStatus.UPDATE_IGNORED:
                    this.setState({statusText: 'Update ignored'});
                    break;
                case codePush.SyncStatus.UPDATE_INSTALLED:
                    this.setState({statusText: 'Update installed'});
                    break;
                case codePush.SyncStatus.SYNC_IN_PROGRESS:
                    this.setState({statusText: 'Another sync in progress'});
                    break;
                case codePush.SyncStatus.UNKNOWN_ERROR:
                    this.setState({statusText: 'Unknown error happened'});
                    break;
            }
        }

        updateStatusCallback({receivedBytes, totalBytes}) {
            this.setState({progressPercentage: receivedBytes / totalBytes});
        }

        componentDidMount() {
            if (!__DEV__) {
                setTimeout(() => {
                    this.setState({timePassed: true});
                }, 3000);
                codePush.sync(
                    {
                        updateDialog: false,
                        installMode: codePush.InstallMode.IMMEDIATE,
                        mandatoryInstallMode: codePush.InstallMode.IMMEDIATE
                    },
                    this.syncStatusCallback,
                    this.updateStatusCallback
                );
            } else {
                this.setState({timePassed: true});
                this.setState({upToDate: true});
            }
        }

        render() {
            let dom;
            if (this.state.timePassed && this.state.upToDate) {
                dom = React.createElement(component);
            } else {
                dom = <AppInitializingView progressPercentage={this.state.progressPercentage}
                                           statusText={this.state.statusText}/>;
            }
            return dom;
        }
    };
}
