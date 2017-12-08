import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from './view/page/counter';
import * as counterActions from './redux/actions/user/user';
import { addNavigationHelpers, StackNavigator,NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import  LoginPage  from './view/page/login';
import MainPage from './view/page/register/register'
import ForgetPage from './view/page/loginPage/forgetpw';
import ResetPage from './view/page/loginPage/reset';
import registerpwdPage from './view/page/register/registerpwd';

const App = StackNavigator({
    Login: {
      screen: LoginPage
    },
    Main: {
        screen: MainPage
    },
    Forgetpw: {
        screen: ForgetPage
    },
    Reset: {
        screen: ResetPage
    },
    registerpwd: {
        screen: registerpwdPage
    },
});

class CounterApp extends Component {

  constructor(props) {
    super(props);
  }
  render() {
      return(
            <App/>
        );
}
}
export default connect ((state) => {
  return {
    //key为组建的props属性 Value为组建的State
      state:state.user,
  }
},
  (dispatch) => ({
     actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp)
