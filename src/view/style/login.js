'use strict';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';

const cell_w = Dimensions.get('window').width;
const styles = StyleSheet.create({
    loginWrap: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },

    loginMain: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
    },
    loginMain1: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 25,
    },
    loginMain2: {
        flex:1,
        justifyContent: 'flex-start',
        marginVertical: 25,
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    loginMode: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 295,
        height: 35,
    },

    formStyle: {
        alignSelf: 'stretch',
        backgroundColor:'#FFFFFF',
        height: 130,
        marginTop:40
    },

    formInputWarp: {
        flex: 1,

    },
    linearGradient: {
        justifyContent:'center',
        alignItems:'center',
        width:200,
        height:50,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

    formInput:{
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        position: 'relative',
    },
    verification:{
        right: 0,
        position: 'absolute',
    },
   image:{
       position: 'absolute',
        height:11,
       width:16,
       right: 5,
   },
    loginInput: {
        height: 40,
        width:295,
        alignSelf: 'center',
        paddingLeft: -10,
        borderBottomColor:'#CCCCCC',
        borderBottomWidth:0.4,
    },

    formInputSplit:{
        borderBottomWidth:1,
        borderBottomColor:'#FFFFFF',
    },

    btn: {

        flexDirection:'row',
    },

    btnWrap:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 17,
        height: 38,
        width: 295,
        borderRadius: 100,
        backgroundColor: '#DDDDDD'
    },
    btnWrap3:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        width: 295,
        borderRadius: 100,
    },
    btnWrap1:{
        marginTop: 35,
        marginLeft:30,
        marginRight:30,
        borderBottomColor: "transparent",
        borderBottomWidth: 2,
        paddingVertical: 3,
    },
    btnWrap2:{
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    loginBtn1: {
        alignItems: 'center',
        fontSize: 16,
        color: '#666666',

    },
    loginBtn2: {
        alignItems: 'center',
        fontSize: 16,
        color: '#666666',
    },
    loginforget: {
        alignItems: 'center',
        fontSize: 14,
        color: '#CCCCCC',
       marginTop:17,
    },
    eyes:{
        position: 'absolute',
        height:11,
        width:22,
        right: 0,
    },
   errorfont:{
       alignSelf:'flex-start',
       flexDirection:'row',
       marginTop:5,
       fontSize:14,
       color:"#FF5A5A",
       alignItems: 'center',
   }
});

module.exports = styles;
