/**
 * Created by bogdanbegovic on 6/18/16.
 */

import GroupView from '../views/GroupView';
import EventsView from '../views/EventsView';
import EventView from '../views/EventView';

export default {

    getGroupViewRoute() {
        return {
            getSceneClass() {
                return GroupView;
            },
            getTitle() {
                return 'Group';
            }
        };
    },

    getEventsViewRoute() {
        return {
            getSceneClass() {
                return EventsView;
            },
            getTitle() {
                return 'Events';
            },
            renderRightButton() {
                return true;
            }
        };
    },

    getEventViewRoute() {
        return {
            getSceneClass() {
                return EventView;
            },
            getTitle() {
                return 'Event';
            },
            renderRightButton() {
                return true;
            }
        };
    }


    // getProfileRoute(profile) {
    //     return {
    //         // You can also render a scene yourself when you need more control over
    //         // the props of the scene component
    //         renderScene(navigator) {
    //             let ProfileScene = require('./ProfileScene');
    //             return <ProfileScene navigator={navigator} profile={profile} />;
    //         },
    //
    //         // There are onWillBlur and onDidBlur events when the scene loses focus.
    //         // These events occur when another scene will focus or did focus,
    //         // respectively. The difference between "will" and "did" is the start and
    //         // end of the scene transition.
    //         onDidBlur(event) {
    //             console.log(`Profile Scene for ${profile} lost focus.`);
    //         },
    //
    //         // You can render arbitrary views for the title component. Note that you
    //         // also need to implement getTitle if you want the title of this route to
    //         // show up in the back button to it.
    //         renderTitle() {
    //             return (
    //                 <View style={{ flexDirection: 'row' }}>
    //                     <Image source={profile.photoUrl} style={styles.titlePhoto} />
    //                     <Text style={styles.titleName}>{profile.name}</Text>
    //                 </View>
    //             );
    //         },
    //
    //         getTitle() {
    //             return profile.name;
    //         },
    //
    //         // Render the view to display on the right side of the navigation bar. It
    //         // is typically a button but doesn't have to be.
    //         renderRightButton() {
    //             return (
    //                 <Button onPress={() => { console.log('Tapped right button'); }}>
    //                     Log
    //                 </Button>
    //             );
    //         }
    //     };
    // }
};
