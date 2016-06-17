/**
 * Created by bogdanbegovic on 4/10/16.
 */

import keyMirror from 'keymirror';

let GroupAction = keyMirror({
    LOAD_GROUP: null,
    GET_GROUP: null,
    SAVE_GROUP: null
});

let GroupUrl = 'https://api.meetup.com/JS-Belgrade-Meetup?&photo-host=public&key=303b493952312314f517d2648147f20';

export {GroupAction, GroupUrl};
