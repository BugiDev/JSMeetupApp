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
import styles from './GroupView.style';
import Router from '../router/Router';
import GroupStore from '../dao/stores/GroupStore';
const groupStore = new GroupStore();
import EventsActions from '../dao/actions/EventsActions';

export default class GroupView extends Component {

    static contextTypes = {
        navigator: React.PropTypes.object
    };

    constructor() {
        super();
        this.state = {
            group: groupStore.getGroup(),
            heightAnim: new Animated.Value(100),
            layoutAnim: 100
        };
        this.onStoreChange = this.onStoreChange.bind(this);
        this.openGroupLink = this.openGroupLink.bind(this);
        this.openAllEvents = this.openAllEvents.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.expandOrganizer = this.expandOrganizer.bind(this);
    }

    onStoreChange() {
        this.setState({group: groupStore.getGroup()});
    }

    componentDidMount() {
        groupStore.addChangeListener(this.onStoreChange);
    }

    componentWillUnmount() {
        groupStore.removeChangeListener(this.onStoreChange);
    }

    openGroupLink() {
        Linking.canOpenURL(this.state.group.link).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + this.state.group.link);
            } else {
                return Linking.openURL(this.state.group.link);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    openAllEvents() {
        EventsActions.loadEvents();
        this.context.navigator ? this.context.navigator.push(Router.getEventsViewRoute()) : null;
    }

    expandOrganizer() {
        if(this.state.heightAnim._value > 100){
            Animated.timing(          // Uses easing functions
                this.state.heightAnim,    // The value to drive
                {toValue: 100}            // Configuration
            ).start();
        } else {
            Animated.timing(          // Uses easing functions
                this.state.heightAnim,    // The value to drive
                {toValue: 200}            // Configuration
            ).start();
        }

        // if (this.state.layoutAnim > 100) {
        //     this.setState({layoutAnim: 100});
        //     LayoutAnimation.easeInEaseOut();
        // } else {
        //     this.setState({layoutAnim: 200});
        //     LayoutAnimation.easeInEaseOut();
        // }
    }

    render() {
        if (!this.state.group) {
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
                    <Image source={{uri: this.state.group.group_photo.photo_link}} style={styles.groupImage}/>
                    <Text style={styles.title}>{this.state.group.name}</Text>
                    <Text style={styles.location}>{this.state.group.city + ', ' + this.state.group.localized_country_name}</Text>
                    <View style={styles.separator}>
                        <Text style={styles.label}>Description</Text>
                        <Text style={styles.description}>{striptags(this.state.group.description)}</Text>
                    </View>
                    <View style={styles.separator}>
                        <Text style={styles.label}>Link</Text>
                        <TouchableOpacity onPress={this.openGroupLink}>
                            <Text style={styles.link}>{this.state.group.link}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.expandOrganizer}>
                        <Animated.View style={[styles.separator, {height: this.state.heightAnim}]}>
                            <Text style={styles.label}>Organizer</Text>
                            <View style={styles.row}>
                                <Image source={{uri: this.state.group.organizer.photo.thumb_link}} style={styles.organizerPhoto}/>
                                <Text style={styles.organizerName}>{this.state.group.organizer.name}</Text>
                            </View>
                            <Text style={styles.label}>Twitter</Text>
                            <Text style={styles.link}>https://twitter.com/slobodan_/</Text>
                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.openAllEvents} style={{marginBottom: 10}}>
                        <View style={styles.separator}>
                            <Text style={styles.buttonText}>View all events</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>);
        }
    }
}
