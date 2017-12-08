import * as types from './registerTypes';

let user = {
    name: 'zhangsan',
    age: 24,
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login(Phone,shortMsg) {
    console.log('注册方法');
    return (dispatch) => {
        dispatch({'type': types.REGISTER_IN_DOING});
        console.log('doing');
        setTimeout(() => {
            let inner_get = fetch('https://wxapi-v2.langlib.com/Api/Account/SignUpByMobile', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    Phone: Phone,
                    SmsCode: shortMsg
                })
            }).then((res)=>
                res.json()
            ).then(
                (json) => {
                    console.log('in');
                    if(json.State === 1 ){
                        dispatch({'type': types.REGISTER_IN_DONE, user: json.Data});
                    }else{
                        dispatch({'type': types.REGISTER_IN_REGERROR});
                    }

                }
            ).catch((e)=>{
                dispatch({'type': types.REGISTER_IN_ERROR, error: e});
            });
        });
    }
}

export function sendCodelogin(Phone) {
    console.log('获取短信验证码');
    return (dispatch) => {
        console.log('doing');
        setTimeout(() => {
            let inner_get = fetch('https://wxapi-v2.langlib.com/Api/Account/CheckPhoneAndSendSmsCode', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    Phone: Phone,
                    IsLogin: false
                })
            }).then((res)=>
                res.json()
            ).then(
                (json) => {
                    console.log('in');
                    if(json.State===1 ){
                        dispatch({'type': types.REGSMSCODE_SUCCESS, user: json.Data});
                    }else{
                        dispatch({'type': types.REGSMSCODE_FAIL});
                    }

                }
            ).catch((e)=>{
                dispatch({'type': types.REGISTER_IN_ERROR, error: e});
            });
        });
    }
}
export function forgetusername() {
    return{
        type:types.REGSMSCODEFORGETUSERNAME_FAIL,
    }
}
export function nameSuccess(){
    return{
        type:types.REGSMSCODEUSERNAME_SUCCESS,
    }
}
export function loginOut() {
    return{
        type:types.REGISTER_IN_OUT,
    }
}
function isLogining() {
    return {
        type: types.REGISTER_IN_DOING
    }
}

function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: types.REGISTER_IN_DONE,
        user: user,
    }
}

function loginError(isSuccess) {
    console.log('error');
    return {
        type: types.REGISTER_IN_ERROR,
    }
}