import * as types from '../actions/forgetpwd/forgetpwTypes';

const initialState = {
    status: '下一步',
    isSuccess: false,
    user: null
};

export default (user = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.FORGET_IN_DOING:
            return {
                ...state,
                status: '正在',
                isSuccess: false,
                user: null
            };
            break;
        case types.FORGET_IN_DONE:
            return {
                ...state,
                status: '成功',
                isSuccess: true,
                user: action.user
            };
            break;
        case types.FORGET_IN_ERROR:
            return {
                ...state,
                status: '出错',
                isSuccess: true,
                user: null
            };
            break;
        case types.FORGET_IN_OUT:
            return {
                ...state,
                status: '下一步',
                isSuccess: false,
                user: null
            };
            break;
        default:
            return state;
    }
});
