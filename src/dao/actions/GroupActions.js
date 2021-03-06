/**
 * Created by bogdanbegovic on 4/10/16.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import {GroupAction, GroupUrl} from '../../constants/AppConstants';
import request from 'superagent';

let appDispatcher = new AppDispatcher();

export default {
    loadGroup: function() {
        request
            .get(GroupUrl)
            .end((err, data) => {
                appDispatcher.handleViewAction({
                    actionName: GroupAction.LOAD_GROUP,
                    data: data
                });
            });
    },
    getGroup: function(item) {
        appDispatcher.handleViewAction({
            actionName: GroupAction.GET_GROUP,
            data: item
        });
    },
    saveGroup: function(item) {
        appDispatcher.handleViewAction({
            actionName: GroupAction.SAVE_GROUP,
            data: item
        });
    }
};
