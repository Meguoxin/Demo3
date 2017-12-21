import * as types from '../actions/register/registerTypes';

const initialState = {
    status: '注册',
    isSuccess: false,
    user: null,
    regerro: '',
    getShort: false
};

export default (user = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.REGISTER_IN_DOING:
            return {
                ...state,
                status: '正在',
                isSuccess: false,
                user: null
            };
        case types.REGISTER_IN_DONE:
            return {
                ...state,
                status: '成功',
                isSuccess: true,
                user: action.user
            };
        case types.REGISTER_IN_ERROR:
            return {
                ...state,
                status: '注册出错',
                isSuccess: false,
                user: null
            };
        case types.REGISTER_IN_REGERROR:
            return {
                ...state,
                status: '注册',
                isSuccess: false,
                user: null
            };
        case types.REGISTER_IN_OUT:
            return {
                ...state,
                status: '注册',
                isSuccess: false,
                user: null
            };
        case types.REGISTER_IN_SMSCODE_SUCCESS:
            return {
                ...state,
                regerro: '',
                getShort: true
            };
        case types.REGISTER_IN_SMSCODE_FAIL:
            return {
                ...state,
                status: '失败',
                regerro: '手机号或验证码错误',
                getShort: false
            };
        case types.REGISTER_IN_PHONESETNULL:
            return {
                ...state,
                regerro: '请输入11位手机号码'
            };
        case types.REGISTER_IN_REPEAT:
            return {
                ...state,
                regerro: '该手机号已注，请前去登录'
            };
        case types.REGISTER_IN_PHONESETFIX:
            return {
                ...state,
                regerro: ''
            };
        default:
            return state;
    }
});
