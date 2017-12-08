import * as types from './shortMessageTypes';

let user = {
    name: 'zhangsan',
    age: 24,
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function shortlogin(Phone,UserPwd) {
    console.log('短信登录方法');
    return (dispatch) => {
        dispatch({'type': types.SHORT_IN_DOING});
        console.log('doing');
        setTimeout(() => {
            let inner_get = fetch('https://wxapi-v2.langlib.com/Api/Account/LoginByMobile', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    Phone: Phone,
                    SmsCode: UserPwd
                })
            }).then((res)=>
                res.json()
            ).then(
                (json) => {
                    console.log('in');
                    if(json.State===1 ){
                        dispatch({'type': types.SHORT_IN_DONE, user: json.Data});
                    }else{
                        dispatch({'type': types.SHORT_IN_USERPWDERROR});
                    }

                }
            ).catch((e)=>{
                dispatch({'type': types.SHORT_IN_ERROR, error: e});
            });
        });
    }
}
export function SmsCodelogin(Phone) {
    console.log('获取短信验证码');
    return (dispatch) => {
        console.log('doing');
            return fetch('https://wxapi-v2.langlib.com/Api/Account/CheckPhoneAndSendSmsCode', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    Phone: Phone,
                    IsLogin: true
                })
            }).then((res)=>
                res.json()
            ).then(
                (json) => {
                    console.log('in');
                    if(json.State===1){
                        dispatch({'type': types.SMSCODE_SUCCESS, user: json.Data});
                    }else{
                        dispatch({'type': types.SMSCODE_FAIL});
                    }
                    return json;
                }
            )
    }
}
export function forgetusername() {
    return{
        type:types.SMSCODEFORGETUSERNAME_FAIL,
    }
}
export function nameSuccess() {
    return{
        type:types.SMSCODEUSERNAME_SUCCESS,
    }
}
export function loginOut() {
    return{
        type:types.SHORT_IN_OUT,
    }
}
function isLogining() {
    return {
        type: types.SHORT_IN_DOING
    }
}

function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: types.SHORT_IN_DONE,
        user: user,
    }
}

function loginError(isSuccess) {
    console.log('error');
    return {
        type: types.SHORT_IN_ERROR,
    }
}