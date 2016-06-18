/**
 * Created by bogdanbegovic on 4/2/16.
 */

import Store from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventsAction} from '../../constants/AppConstants';

let appDispatcher = new AppDispatcher();
let instance = null;

export default class EventsStore extends Store {

    constructor() {
        super();

        if (!instance) {
            instance = this;

            instance._allEvents = null;

            instance.dispatchToken = appDispatcher.register(payload => {
                let action = payload.action;
                switch (action.actionName) {
                    case EventsAction.SAVE_EVENTS:
                    {
                        instance._saveEvents(action.data);
                        break;
                    }
                    case EventsAction.LOAD_EVENTS:
                    {
                        instance._saveEvents(action.data);
                        break;
                    }
                    default:
                        return;
                }
                instance.emitChange();
            });

            instance.getEvents = instance.getEvents.bind(instance);
            instance._saveEvents = instance._saveEvents.bind(instance);
        }

        return instance;
    }

    getEvents() {
        return this._allEvents;
    }

    _saveEvents(data) {
        this._allEvents = data.body;
    }

}
