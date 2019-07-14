import actionTypes from './actionTypes'
import {loginRequest} from '../requests'


const startLogin = ()=>{
    return{
        type:actionTypes.START_LOGIN
    }
}

const loginSuccess =(userInfo)=>{
    return{
        type: actionTypes.LOGIN_SUCCESS,
        payLoad:{
            userInfo
        }
    }
}

export const loginFailed = ()=>{
    console.log("actionType loginFailed")
    return{
        type: actionTypes.LOGIN_FAILED
    }
}

export const login=(userInfo)=>{
    return dispatch =>{
        dispatch(startLogin())
        loginRequest(userInfo)
            .then(resp=>{
                console.log("resp",resp)
                if(resp.status === 200){
                    dispatch(loginSuccess({
                        ...resp.data.data,
                        remember:userInfo.remember
                    }))
                }
                else{
                    dispatch(loginFailed())
                }
            })

    }
}