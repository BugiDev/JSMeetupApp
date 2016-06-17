/**
 * Created by bogdanbegovic on 4/10/16.
 */
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

export default class Store extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = null;
        this.emitChange = this.emitChange.bind(this);
        this.addChangeListener = this.addChangeListener.bind(this);
        this.removeChangeListener = this.removeChangeListener.bind(this);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}
