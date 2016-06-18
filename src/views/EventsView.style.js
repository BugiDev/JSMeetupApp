/**
 * Created by bogdanbegovic on 6/17/16.
 */

import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    row: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DCDCDC'
    },
    eventName: {
        textAlign: 'left',
        color: '#CC9A03',
        marginVertical: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    eventLabel: {
        textAlign: 'left',
        color: '#9D9C9C',
        marginBottom: 5,
        fontSize: 10
    },
    eventText: {
        textAlign: 'left',
        color: '#333333',
        marginBottom: 5,
        fontSize: 14
    },
    centering: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
