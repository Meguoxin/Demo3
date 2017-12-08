import * as types from '../actions/register/registerTypes'
const initialState = {
    status: '注册',
    isSuccess: false,
    user: null,
    regerro:"",
    getShort:false
}

export default user = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.REGISTER_IN_DOING:
            return {
                ...state,
                status: '正在',
                isSuccess: false,
                user: null,
            }
            break;
        case types.REGISTER_IN_DONE:
            return {
                ...state,
                status: '成功',
                isSuccess: true,
                user: action.user,
            }
            break;
        case types.REGISTER_IN_ERROR:
            return {
                ...state,
                status: '注册出错',
                isSuccess: true,
                user: null,
            }
            break;
        case types.REGISTER_IN_REGERROR:
            return {
                ...state,
                status: '注册',
                isSuccess: false,
                user: null,
            }
            break;
        case types.REGISTER_IN_OUT:
            return {
                ...state,
                status: '注册',
                isSuccess: false,
                user: null,
            }
            break;
        case types.REGISTER_IN_SMSCODE_SUCCESS:
            return {
                ...state,
                regerro:"",
                getShort:true
            }
            break;
        case types.REGISTER_IN_SMSCODE_FAIL:
            return {
                ...state,
                regerro:"获取验证码失败",
                getShort:false,
            }
            break;
        case types.REGISTER_IN_PHONESETNULL:
            return {
                ...state,
                regerro:"请输入11位手机号码",
            }
            break;
        default:
            return state;
    }
}