/**
 * Created by bogdanbegovic on 6/17/16.
 */

import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#FAFAFA'
    },
    groupImage: {
        width: 150,
        height: 150,
        marginTop: 10,
        alignSelf: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#CC9A03',
        marginBottom: 5,
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    location: {
        textAlign: 'center',
        color: '#9D9C9C',
        marginBottom: 5,
        fontSize: 15
    },
    label: {
        textAlign: 'left',
        color: '#9D9C9C',
        marginVertical: 5,
        paddingLeft: 20,
        fontSize: 12
    },
    description: {
        textAlign: 'left',
        color: '#333333',
        marginBottom: 5,
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 14
    },
    centering: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        borderWidth: 0.5,
        borderColor: '#DCDCDC',
        borderRadius: 3,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    organizerPhoto: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    },
    organizerName: {
        textAlign: 'justify',
        color: '#CC9A03',
        marginBottom: 5,
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 14
    },
    link: {
        textAlign: 'justify',
        color: '#CC9A03',
        marginBottom: 5,
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 14
    },
    buttonText: {
        textAlign: 'center',
        color: '#CC9A03',
        marginBottom: 5,
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: 'bold'
    }
});
