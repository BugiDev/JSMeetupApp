/**
 * Created by bogdanbegovic on 6/17/16.
 */
import React, {
    Component
} from 'react';
import ExNavigator from '@exponent/react-native-navigator';
import Router from '../router/Router';

import GroupAction from '../dao/actions/GroupActions';

export default class GroupView extends Component {

    static childContextTypes = {
        navigator: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            navigator: null
        };
        this.getChildContext = this.getChildContext.bind(this);
    }

    getChildContext() {
        return {
            navigator: this.state.navigator
        };
    }

    componentDidMount() {
        GroupAction.loadGroup();
    }

    render() {
        return <ExNavigator
            ref={(ref) => {
                        if (!this.state.navigator) {
                            this.setState({navigator: ref});
                        }
                    }}
            initialRoute={Router.getGroupViewRoute()}
            style={{ flex: 1 }}
            sceneStyle={{ paddingTop: 64 }}
        />
    }
}
