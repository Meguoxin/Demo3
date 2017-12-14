import * as types from '../actions/user/loginTypes';

const initialState = {
    status: '登录',
    isSuccess: false,
    user: {},
    erro: ''
};

export default (user = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                status: '正在',
                isSuccess: false,
                erro: ''
            };
            break;
        case types.LOGIN_IN_DONE:
            return {
                ...state,
                status: '成功',
                isSuccess: true,
                user: action.user,
                erro: ''
            };
            break;
        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                status: '登录出错',
                isSuccess: true,
                erro: '网络出错'
            };
            break;
        case types.LOGIN_IN_OUT:
            return {
                ...state,
                status: '登录',
                isSuccess: false,
                erro: ''
            };
            break;
        case types.LOGIN_IN_USERPWDERROR:
            return {
                ...state,
                status: '登录',
                isSuccess: false,
                erro: '账号或密码输入错误,请重新输入'
            };
            break;
        default:
            return state;
    }
});
