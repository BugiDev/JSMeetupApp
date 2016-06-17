/**
 * Created by bogdanbegovic on 4/2/16.
 */

import Store from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {GroupAction} from '../../constants/AppConstants';

let appDispatcher = new AppDispatcher();
let instance = null;

export default class GroupStore extends Store {

    constructor() {
        super();

        if (!instance) {
            instance = this;

            instance._group = {};

            instance.dispatchToken = appDispatcher.register(payload => {
                let action = payload.action;
                switch (action.actionName) {
                    case GroupAction.SAVE_GROUP:
                    {
                        instance._saveGroup(action.data);
                        break;
                    }
                    case GroupAction.LOAD_GROUP:
                    {
                        instance._saveGroup(action.data);
                        break;
                    }
                    default:
                        return;
                }
                instance.emitChange();
            });

            instance.getGroup = instance.getGroup.bind(instance);
            instance._saveGroup = instance._saveGroup.bind(instance);
        }

        return instance;
    }

    getGroup() {
        return this._group;
    }

    _saveGroup(data) {
        this._group = data;
    }

}
