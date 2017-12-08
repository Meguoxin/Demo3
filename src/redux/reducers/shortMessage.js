import * as types from '../actions/shortMessage/shortMessageTypes'
const initialState = {
    shortstatus: '登录',
    shortisSuccess: false,
    shortuser: null,
    shorterro:"",
    smsCode:false
}

export default user = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SHORT_IN_DOING:
            return {
                ...state,
                shortstatus: '正在',
                shortisSuccess: false,
                shortuser: null,
                shorterro:""
            }
            break;
        case types.SHORT_IN_DONE:
            return {
                ...state,
                shortstatus: '成功',
                shortisSuccess: true,
                shortuser: action.user,
                shorterro:""
            }
            break;
        case types.SHORT_IN_ERROR:
            return {
                ...state,
                shortstatus: '登录出错',
                shortisSuccess: true,
                shortuser: null,
                shorterro:"验证码格式不正确"
            }
            break;
        case types.SHORT_IN_USERPWDERROR:
            return {
                ...state,
                shortstatus: '登录',
                shortisSuccess: false,
                shortuser: null,
                shorterro:"验证码格式不正确"
            }
            break;
        case types.SHORT_IN_OUT:
            return {
                ...state,
                shortstatus: '登录',
                shortisSuccess: false,
                shortuser: null,
                shorterro:""
            }
            break;
        case types.SMSCODE_SUCCESS:
            return {
                ...state,
                smsCode:true,
            }
            break;
        case types.SMSCODE_FAIL:
            return {
                ...state,
                smsCode:false,
                shorterro:"获取验证码失败"
            }
            break;
        case types.SMSCODEFORGETUSERNAME_FAIL:
            return {
                ...state,
                shorterro:"请输入11位手机号码"
            }
            break;
        case types.SMSCODEUSERNAME_SUCCESS:
            return {
                ...state,
                shorterro:""
            }
            break;
        default:
            return state;
    }
}