import * as types from '../actions/register/registerTypes'
const initialState = {
    status: '注册',
    isSuccess: false,
    user: null,
    erro:"",
    smsCode:false
}

export default user = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.REGISTER_IN_DOING:
            return {
                ...state,
                status: '正在',
                isSuccess: false,
                user: null,
                erro:""
            }
            break;
        case types.REGISTER_IN_DONE:
            return {
                ...state,
                status: '成功',
                isSuccess: true,
                user: action.user,
                erro:""
            }
            break;
        case types.REGISTER_IN_ERROR:
            return {
                ...state,
                status: '注册出错',
                isSuccess: true,
                user: null,
                erro:"账号或密码输入错误,请重新输入"
            }
            break;
        case types.REGISTER_IN_REGERROR:
            return {
                ...state,
                status: '注册',
                isSuccess: false,
                user: null,
                erro:"手机号或者是验证码输入错误"
            }
            break;
        case types.REGISTER_IN_OUT:
            return {
                ...state,
                status: '注册',
                isSuccess: false,
                user: null,
                erro:""
            }
            break;
        case types.REGSMSCODE_SUCCESS:
            return {
                ...state,
                smsCode:true
            }
            break;
        case types.REGSMSCODE_FAIL:
            return {
                ...state,
                smsCode:false,
                erro:"获取验证码失败"
            }
            break;
        case types.REGSMSCODEUSERNAME_SUCCESS:
            return {
                ...state,
                erro:""
            }
            break;
        case types.REGSMSCODEFORGETUSERNAME_FAIL:
            return {
                ...state,
                erro:"请输入11位手机号码"
            }
            break;
        default:
            return state;
    }
}