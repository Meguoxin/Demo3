import { NavigationActions } from 'react-navigation';
import { AppNavigation } from '../../main';

import * as TYPES from '../actions/user/loginTypes';
import login from '../../view/page/login';

// const mainAction = AppNavigation.router.getActionForPathAndParams('Main');
// const mainTempState = AppNavigation.router.getStateForAction(mainAction);
const loginAction = AppNavigation.router.getActionForPathAndParams('Login');
const initialState = AppNavigation.router.getStateForAction(loginAction);

// TODO：初始化登录状态！！！

export default function nav(state, action) {
    switch (action.type) {
        case TYPES.LOGIN_IN_DONE:
            return AppNavigation.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Main' }),
                state
            );
        case TYPES.LOGIN_IN_OUT:
            return initialState;
        default:
            return AppNavigation.router.getStateForAction(action, state);
    }
}
