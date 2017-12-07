import * as types from '../actions/registerTypes'
const initialState = {
    status: '注册',
    isSuccess: false,
    user: null,
}

export default user = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                status: '正在',
                isSuccess: false,
                user: null,
            }
            break;
        case types.LOGIN_IN_DONE:
            return {
                ...state,
                status: '成功',
                isSuccess: true,
                user: action.user,
            }
            break;
        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                status: '注册出错',
                isSuccess: true,
                user: null,
            }
            break;
        case types.LOGIN_IN_OUT:
            return {
                ...state,
                status: '注册',
                isSuccess: false,
                user: null,
            }
            break;
        default:
            return state;
    }
}