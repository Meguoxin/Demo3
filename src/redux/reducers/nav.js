import { NavigationActions } from 'react-navigation';
import { AppNavigation } from '../../main';

import * as LOGINTYPES from '../actions/user/loginTypes';
import * as REGISTERTYPES from '../actions/register/registerTypes';
import * as FORGET from '../actions/forgetpwd/forgetpwTypes';
import * as SHORTMESG from '../actions/shortMessage/shortMessageTypes';

// const mainAction = AppNavigation.router.getActionForPathAndParams('Main');
// const mainTempState = AppNavigation.router.getStateForAction(mainAction);
const loginAction = AppNavigation.router.getActionForPathAndParams('Login');
const initialState = AppNavigation.router.getStateForAction(loginAction);

// TODO：初始化登录状态！！！

export default function nav(state, action) {
    switch (action.type) {
        case LOGINTYPES.LOGIN_IN_DONE:
            return AppNavigation.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Main' }),
                state
            );
        case REGISTERTYPES.REGISTER_IN_DONE:
            return AppNavigation.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'registerpwd' }),
                state
            );
        case FORGET.FORGET_IN_DONE:
            return AppNavigation.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'recite' }),
                state
            );
        case SHORTMESG.SHORT_IN_DONE:
            return AppNavigation.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Main' }),
                state
            );
        case LOGINTYPES.LOGIN_IN_OUT:
            return initialState;
        default:
            return AppNavigation.router.getStateForAction(action, state);
    }
}
