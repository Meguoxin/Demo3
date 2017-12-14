import * as types from './forgetpwTypes';

const user = {
    name: 'zhangsan',
    age: 24
};

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login() {
    console.log('登录方法');
    return dispatch => {
        dispatch(isLogining());
        // 模拟用户登录
        const result = fetch('https://www.baidu.com/')
            .then(res => {
                dispatch(loginSuccess(true, user));
            })
            .catch(e => {
                dispatch(loginError(false));
    });
    };
}
export function recite() {
    console.log('获取验证码方法');
    return dispatch => {
        console.log('doing');
        return fetch('https://wxapi-v2.langlib.com/Api/WordBook/ListP1Word', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'WxApiToken': '99a0e025-6a80-4c36-8973-34fed23e8ac7'
            },
            body: JSON.stringify({
                UserID: 'N10194985',
                WordBookID: '233908',
                UnitIdx: '15'
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                dispatch({
                    type: types.FORGET_IN_DONE,
                    user: json.Data.WordInfo
                });
                return json;
            });
    };
}
export function loginOut() {
    return {
        type: types.FORGET_IN_OUT
    };
}
function isLogining() {
    return {
        type: types.FORGET_IN_DOING
    };
}

function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: types.FORGET_IN_DONE,
        user
    };
}

function loginError(isSuccess) {
    console.log('error');
    return {
        type: types.FORGET_IN_ERROR
    };
}
