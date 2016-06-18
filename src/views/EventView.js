/**
 * Created by bogdanbegovic on 6/17/16.
 */
import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicatorIOS,
    ScrollView,
    TouchableOpacity,
    Linking,
    Animated,
    LayoutAnimation
} from 'react-native';
import striptags from 'striptags';
import moment from 'moment';
import styles from './GroupView.style';
import EventStore from '../dao/stores/EventStore';
const eventStore = new EventStore();
import EventActions from '../dao/actions/EventActions';

export default class EventView extends Component {

    static contextTypes = {
        navigator: React.PropTypes.object
    };

    constructor() {
        super();
        this.state = {
            currentEvent: eventStore.getCurrentEvent()
        };
        this.onStoreChange = this.onStoreChange.bind(this);
        this.openLink = this.openLink.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    onStoreChange() {
        this.setState({currentEvent: eventStore.getCurrentEvent()});
    }

    componentDidMount() {
        eventStore.addChangeListener(this.onStoreChange);
    }

    componentWillUnmount() {
        eventStore.removeChangeListener(this.onStoreChange);
        EventActions.deleteEvent();
    }

    openLink() {
        Linking.canOpenURL(this.state.currentEvent.link).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + this.state.group.link);
            } else {
                return Linking.openURL(this.state.currentEvent.link);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    render() {
        if (!this.state.currentEvent) {
            return (
                <View style={styles.centering}>
                    <ActivityIndicatorIOS
                        animating={true}
                        style={{height: 80}}
                        size="large"
                    />
                </View>);
        } else {
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title}>{this.state.currentEvent.name}</Text>
                    <View style={styles.separator}>
                        <Text style={styles.label}>Venue</Text>
                        <Text style={[styles.description, {marginBottom: 0}]}>{this.state.currentEvent.venue.name}</Text>
                        <Text style={[styles.description, {marginTop: 0}]}>{
                            this.state.currentEvent.venue.address_1
                            + ', '
                            + this.state.currentEvent.venue.city
                            + ', '
                            + this.state.currentEvent.venue.localized_country_name
                        }</Text>
                    </View>
                    <View style={styles.separator}>
                        <Text style={styles.label}>Time</Text>
                        <Text style={styles.description}>{moment(this.state.currentEvent.time).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                    </View>
                    <View style={styles.separator}>
                        <Text style={styles.label}>Description</Text>
                        <Text style={styles.description}>{striptags(this.state.currentEvent.description)}</Text>
                    </View>
                    <View style={styles.separator}>
                        <Text style={styles.label}>Link</Text>
                        <TouchableOpacity onPress={this.openLink}>
                            <Text style={styles.link}>{this.state.currentEvent.link}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>);
        }
    }
}
