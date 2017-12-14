import * as types from './registerTypes';

const user = {
    name: 'zhangsan',
    age: 24
};

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login(Phone, shortMsg) {
    console.log('注册方法');
    return dispatch => {
        dispatch({ type: types.REGISTER_IN_DOING });
        console.log('doing');
        setTimeout(() => {
            const inner_get = fetch(
                'https://wxapi-v2.langlib.com/Api/Account/SignUpByMobile',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        Phone,
                        SmsCode: shortMsg
                    })
                }
            )
                .then(res => res.json())
                .then(json => {
                    console.log('in');
                    if (json.State === 1) {
                        dispatch({
                            type: types.REGISTER_IN_SMSCODE_SUCCESS,
                            user: json.Data
                        });
                    } else {
                        dispatch({ type: types.REGISTER_IN_SMSCODE_FAIL });
                    }
                })
                .catch(e => {
                    dispatch({ type: types.REGISTER_IN_ERROR, error: e });
                });
        });
    };
}
export function sendCode(Phone) {
    console.log('获取验证码方法');
    return dispatch => {
        console.log('doing');
        return fetch(
            'https://wxapi-v2.langlib.com/Api/Account/CheckPhoneAndSendSmsCode',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    Phone,
                    IsLogin: false
                })
            }
        )
            .then(res => res.json())
            .then(json => {
                console.log('in');
                if (json.State === 1) {
                    dispatch({
                        type: types.REGISTER_IN_SMSCODE_SUCCESS,
                        user: json.Data
                    });
                }
                return json;
            });
    };
}
export function Phonesetnull() {
    return {
        type: types.REGISTER_IN_PHONESETNULL
    };
}
export function nameSuccess() {
    return {
        type: types.REGISTER_IN_PHONESETFIX
    };
}
export function loginOut() {
    return {
        type: types.REGISTER_IN_OUT
    };
}
export function RegisterRepeat() {
    return {
        type: types.REGISTER_IN_REPEAT
    };
}
function isLogining() {
    return {
        type: types.REGISTER_IN_DOING
    };
}

function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: types.REGISTER_IN_DONE,
        user
    };
}

function loginError(isSuccess) {
    console.log('error');
    return {
        type: types.REGISTER_IN_ERROR
    };
}
