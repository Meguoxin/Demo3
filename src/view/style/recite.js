import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    reciteWrap: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    reciteItemWrap: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    reciteItembtn: {
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    reciteMain: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 26
    },
    reciteall: {
        alignItems: 'center'
    },
    reciteList: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingBottom: 55
    },
    reciteButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    IOSbutton: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { h: -10, w: 0 },
        shadowColor: '#e5e5e5',
        shadowRadius: 5,
        shadowOpacity: 1
    },
    ANDROIDbuttonView: {
        width: Dimensions.get('window').width,
        height: 100,
        transform: [{ rotateZ: '180deg' }],
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'absolute',
        bottom: 0
    },
    ANDROIDbutton: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: '#fff',
        elevation: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ANDROIDtitle: {
        fontSize: 18,
        color: '#ff7400',
        transform: [{ rotateZ: '180deg' }]
    },
    ItemSeparatorComponent: {
        height: 1,
        marginTop: 17,
        backgroundColor: '#E6E6E6'
    },
    reciteButton: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        shadowColor: '#e5e5e5',
        shadowRadius: 5,
        shadowOffset: { h: -10, w: 0 },
        shadowOpacity: 1
    },
    reciteButtonWord: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff7400'
    },
    reciteitemSize: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 11,
        color: '#000000'
    },
    reciteitemimage: {
        width: 26,
        height: 26,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: '#413DFF',
        right: 0,
        top: 26
    },
    translate: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        fontSize: 16,
        marginTop: 11,
        color: '#9B9B9B'
    }
});
module.exports = styles;
