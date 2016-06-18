/**
 * Created by bogdanbegovic on 4/10/16.
 */

import keyMirror from 'keymirror';
import APIkey from './APIkey';

let GroupAction = keyMirror({
    LOAD_GROUP: null,
    GET_GROUP: null,
    SAVE_GROUP: null
});

let GroupUrl = 'https://api.meetup.com/JS-Belgrade-Meetup?&photo-host=public&key=' + APIkey;

let EventsAction = keyMirror({
    LOAD_EVENTS: null,
    GET_EVENTS: null,
    SAVE_EVENTS: null
});

let EventsUrl = 'https://api.meetup.com/JS-Belgrade-Meetup/events?&sign=true&photo-host=public&page=20&key=' + APIkey;

let EventAction = keyMirror({
    LOAD_EVENT: null,
    GET_EVENT: null,
    SAVE_EVENT: null,
    DELETE_EVENT: null
});

let EventUrl = (eventId) => {
    return `https://api.meetup.com/JS-Belgrade-Meetup/events/${eventId}?&sign=true&photo-host=public&key=` + APIkey
};

export {GroupAction, GroupUrl, EventsAction, EventsUrl, EventAction, EventUrl};
