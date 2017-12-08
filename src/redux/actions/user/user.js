import * as types from './loginTypes';

let user = {
    name: 'zhangsan',
    age: 24,
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login(Phone,UserPwd) {
    console.log('登录方法');
    return (dispatch) => {
        dispatch({'type': types.LOGIN_IN_DOING});
        console.log('doing');
        setTimeout(() => {
            let inner_get = fetch('https://wxapi-v2.langlib.com/Api/Account/LoginByAccount', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    Phone: Phone,
                    UserPwd: UserPwd
                })
            }).then((res)=>
                res.json()
            ).then(
                (json) => {
                    console.log('in');
                    if(json.State===1 ){
                        dispatch({'type': types.LOGIN_IN_DONE, user: json.Data});
                    }else{
                        dispatch({'type': types.LOGIN_IN_USERPWDERROR});
                    }

                }
            ).catch((e)=>{
                dispatch({'type': types.LOGIN_IN_ERROR, error: e});
            });
        });
    }
}
export function loginOut() {
    return{
        type:types.LOGIN_IN_OUT,
    }
}
function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: types.LOGIN_IN_DONE,
        user: user,
    }
}

function loginError(isSuccess) {
    console.log('error');
    return {
        type: types.LOGIN_IN_ERROR,
    }
}