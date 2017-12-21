import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    registerWrap: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    registerMain: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 25,
        marginTop: 80
    },
    registerMain2: {
        flex: 1,
        justifyContent: 'flex-start',
        marginVertical: 25
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    registerMode: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 295,
        height: 35
    },
    registerformStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        height: 100
    },
    registerformInputWarp: {
        flex: 1
    },
    registerlinearGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

    registerformInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    registerverification: {
        right: 0,
        position: 'absolute'
    },
    registerimage: {
        position: 'absolute',
        height: 11,
        width: 16,
        right: 5
    },
    registerInput: {
        height: 40,
        width: 295,
        alignSelf: 'center',
        paddingLeft: -10,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 0.4
    },

    registerformInputSplit: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    registerbtn: {
        flexDirection: 'row'
    },

    registerbtnWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        height: 38,
        width: 295,
        borderRadius: 100,
    },
    registerbtnWrap3: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        width: 295,
        borderRadius: 100
    },
    registerbtnWrap1: {
        marginTop: 35,
        marginLeft: 30,
        marginRight: 30,
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
        paddingVertical: 3
    },
    registerbtnWrap2: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    registerBtn: {
        alignItems: 'center',
        fontSize: 16,
        color: '#999999'
    },
    registerforget: {
        alignItems: 'center',
        fontSize: 14,
        color: '#CCCCCC',
        marginTop: 17
    },
    feedback: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center'
    },
    errorfont: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        marginTop: 5,
        fontSize: 14,
        color: '#FF5A5A',
        alignItems: 'center'
    }
});

module.exports = styles;
