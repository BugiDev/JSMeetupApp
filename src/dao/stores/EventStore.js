/**
 * Created by bogdanbegovic on 4/2/16.
 */

import Store from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventAction} from '../../constants/AppConstants';

let appDispatcher = new AppDispatcher();
let instance = null;

export default class EventStore extends Store {

    constructor() {
        super();

        if (!instance) {
            instance = this;

            instance._currentEvent = null;

            instance.dispatchToken = appDispatcher.register(payload => {
                let action = payload.action;
                switch (action.actionName) {
                    case EventAction.SAVE_EVENT:
                    {
                        instance._saveCurrentEvent(action.data);
                        break;
                    }
                    case EventAction.LOAD_EVENT:
                    {
                        instance._saveCurrentEvent(action.data);
                        break;
                    }
                    case EventAction.DELETE_EVENT:
                    {
                        instance._currentEvent = null;
                        break;
                    }
                    default:
                        return;
                }
                instance.emitChange();
            });

            instance.getCurrentEvent = instance.getCurrentEvent.bind(instance);
            instance._saveCurrentEvent = instance._saveCurrentEvent.bind(instance);
        }

        return instance;
    }

    getCurrentEvent() {
        return this._currentEvent;
    }

    _saveCurrentEvent(data) {
        this._currentEvent = data.body;
    }

}
