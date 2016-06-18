/**
 * Created by bogdanbegovic on 4/10/16.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventAction, EventUrl} from '../../constants/AppConstants';
import request from 'superagent';

let appDispatcher = new AppDispatcher();

export default {
    loadEvent: function(eventId) {
        request
            .get(EventUrl(eventId))
            .end((err, data) => {
                appDispatcher.handleViewAction({
                    actionName: EventAction.LOAD_EVENT,
                    data: data
                });
            });
    },
    getEvent: function(item) {
        appDispatcher.handleViewAction({
            actionName: EventAction.GET_EVENT,
            data: item
        });
    },
    saveEvent: function(item) {
        appDispatcher.handleViewAction({
            actionName: EventAction.SAVE_EVENT,
            data: item
        });
    },
    deleteEvent: function(item) {
        appDispatcher.handleViewAction({
            actionName: EventAction.DELETE_EVENT,
            data: item
        });
    }
};
