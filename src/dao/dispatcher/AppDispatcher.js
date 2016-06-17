/**
 * Created by bogdanbegovic on 4/10/16.
 */
import {Dispatcher} from 'flux';

let instance = null;

export default class AppDispatcher extends Dispatcher {
    constructor() {
        super();

        if (!instance) {
            instance = this;
            instance.handleViewAction = instance.handleViewAction.bind(instance);
        }

        return instance;
    }

    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
}
