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
    window.localStorage.removeItem("authToken")
    window.localStorage.removeItem("name")
    window.sessionStorage.removeItem("authToken")
    window.sessionStorage.removeItem("name")
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
                console.log("userInfo",userInfo)
                if(resp.status === 200){
                    //if remember me is true, use localStorage
                    if(userInfo.remember === true){
                        window.localStorage.setItem("authToken",resp.data.data.authToken) 
                        window.localStorage.setItem("name",resp.data.data.displayName)                   
                    }else{
                        window.sessionStorage.setItem("authToken",resp.data.data.authToken)
                        window.sessionStorage.setItem("name",resp.data.data.displayName)      
                    }

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