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
    ListView
} from 'react-native';
import moment from 'moment';
import styles from './EventsView.style';
import Router from '../router/Router';
import EventsStore from '../dao/stores/EventsStore';
const eventsStore = new EventsStore();

import EventActions from '../dao/actions/EventActions';

export default class EventsView extends Component {

    static contextTypes = {
        navigator: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        let events = eventsStore.getEvents();
        let me = this;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        if (events) {
            this.state = {
                events: events,
                dataSource: ds.cloneWithRows(me.extractEventsInfo(events))
            };
        } else {
            this.state = {
                events: null,
                dataSource: ds.cloneWithRows([])
            };
        }

        this.extractEventsInfo = this.extractEventsInfo.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
    }

    extractEventsInfo(events) {
        let eventsInfo = [];
        events.forEach((item) => {
            eventsInfo.push({
                name: item.name,
                time: item.time,
                id: item.id,
                venue: item.venue
            });
        });
        return eventsInfo;
    }

    onStoreChange() {
        let me = this;
        let events = eventsStore.getEvents();
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            events: events,
            dataSource: ds.cloneWithRows(me.extractEventsInfo(events))
        });
    }

    componentDidMount() {
        eventsStore.addChangeListener(this.onStoreChange);
    }

    componentWillUnmount() {
        eventsStore.removeChangeListener(this.onStoreChange);
    }

    openEvent(id) {
        this.context.navigator ? this.context.navigator.push(Router.getEventViewRoute()) : null;
        EventActions.loadEvent(id);
    }

    render() {
        if (!this.state.events) {
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                    <TouchableOpacity onPress={() => {this.openEvent(rowData.id)}}>
                        <View style={styles.row} key={rowData.id}>
                            <Text style={styles.eventName}>{rowData.name}</Text>
                            <Text style={styles.eventLabel}>Venue</Text>
                            <Text style={styles.eventText}>{rowData.venue.name + ' - ' + rowData.venue.address_1 + ', ' + rowData.venue.city}</Text>
                            <Text style={styles.eventLabel}>Time</Text>
                            <Text style={styles.eventText}>{moment(rowData.time).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                        </View>
                    </TouchableOpacity>
                    }
                />
            );
        }
    }
}
