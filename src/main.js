import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import * as counterActions from './redux/actions/user/user';
import LoginPage from './view/page/login';
import MainPage from './view/page/register/register';
import ForgetPage from './view/page/loginPage/forgetpw';
import ResetPage from './view/page/loginPage/reset';
import registerpwdPage from './view/page/register/registerpwd';
import reciteItemPage from './view/page/recitePage/reciteItem';
import recitePage from './view/page/recitePage/recite';

export const AppNavigation = StackNavigator(
    {
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
        reciteItem: {
            screen: reciteItemPage
        },
        recite: {
            screen: recitePage
        }
    },
    {
        headerMode: 'screen',
        transitionConfig: () => ({
            screenInterpolator: CardStackStyleInterpolator.forHorizontal
        })
    }
);

class CounterApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this);
        return (
            <AppNavigation
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}
export default connect(state => ({
    // key为组建的props属性 Value为组建的State
    state: state.user,
    nav: state.nav
}))(CounterApp);
