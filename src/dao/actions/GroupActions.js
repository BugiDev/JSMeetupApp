/**
 * Created by bogdanbegovic on 4/10/16.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import {GroupAction} from '../../constants/AppConstants';

let appDispatcher = new AppDispatcher();

export default {
    loadGroup: function(item) {
        appDispatcher.handleViewAction({
            actionName: GroupAction.LOAD_GROUP,
            data: item
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
