/**
 * Created by bogdanbegovic on 4/10/16.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventsAction, EventsUrl} from '../../constants/AppConstants';
import request from 'superagent';

let appDispatcher = new AppDispatcher();

export default {
    loadEvents: function() {
        request
            .get(EventsUrl)
            .end((err, data) => {
                appDispatcher.handleViewAction({
                    actionName: EventsAction.LOAD_EVENTS,
                    data: data
                });
            });
    },
    getEvents: function(item) {
        appDispatcher.handleViewAction({
            actionName: EventsAction.GET_EVENTS,
            data: item
        });
    },
    saveEvents: function(item) {
        appDispatcher.handleViewAction({
            actionName: EventsAction.SAVE_EVENTS,
            data: item
        });
    }
};
