import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loginWrap: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    loginMain: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
        marginTop: 30
    },
    loginMain1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 25,
        marginTop: 80
    },
    loginMain2: {
        flex: 1,
        justifyContent: 'flex-start',
        marginVertical: 25
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 45
    },
    loginMode: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 295,
        height: 35
    },

    formStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        height: 110
    },
    formStyle1: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        height: 100
    },
    formInputWarp: {
        flex: 1
    },
    linearGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

    formInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    verification: {
        right: 0,
        position: 'absolute'
    },
    image: {
        position: 'absolute',
        height: 11,
        width: 16,
        right: 5
    },
    loginInput: {
        height: 40,
        width: 295,
        alignSelf: 'center',
        paddingLeft: -10,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 0.4
    },

    formInputSplit: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    btn: {
        flexDirection: 'row'
    },

    btnWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        height: 40,
        width: 295,
        borderRadius: 100,
    },
    btnWrap3: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 295,
        borderRadius: 100
    },
    btnWrap1: {
        marginLeft: 77,
        right: 38,
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
        paddingVertical: 3
    },
    btnWrap2: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginBtn1: {
        alignItems: 'center',
        fontSize: 16,
        color: '#666666'
    },
    loginBtn2: {
        alignItems: 'center',
        fontSize: 16,
        color: '#666666'
    },
    loginforget: {
        alignItems: 'center',
        fontSize: 14,
        color: '#333333',
        marginTop: 17
    },
    forget: {
        alignItems: 'center',
        fontSize: 14,
        color: '#999999',
        marginTop: 17
    },
    eyes: {
        position: 'absolute',
        height: 11,
        width: 22,
        right: 0
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
