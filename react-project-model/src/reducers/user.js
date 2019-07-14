//正在loading的时候不允许页面变更
import actionTypes from '../actions/actionTypes'
const initState={
    id:'',
    displayName:'',
    avatar:'',
    role:'',
    isLogin:false,
    isLoading:false 
}

export default (state=initState, action)=>{
    
    switch(action.type){
        case actionTypes.START_LOGIN:
            
            console.log("start Login")
            return {
                ...state,
                isLoading:true 
            }
        case actionTypes.LOGIN_SUCCESS:
            const {avatar,displayName,id,role} = action.payLoad.userInfo
            console.log("login sucessfully",avatar,displayName,id,role)
            return {
                id:id,
                displayName:displayName,
                avatar:avatar,
                role:role,
                isLogin:true,
                isLoading:false 
            }
        case actionTypes.LOGIN_FAILED:
            console.log("reducer loginFailed")
            return {
                ...state,
                isLogin:false,
                isLoading:false 
            }
        default:
            return state
    }
}