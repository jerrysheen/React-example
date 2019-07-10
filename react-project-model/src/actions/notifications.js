import actionTypes from './actionTypes'

export const removeNotification=(id)=>{
    //console.log(id)
    //模拟一个异步的操作
    return dispatch=>{
        setTimeout(()=>{
            dispatch({
                type:actionTypes.REMOVE_NOTIFICATION,
                payload:{
                    id
                }
            })
        },100)
        
    }
}

export const removeAllNotifications=()=>{
    //console.log("remove All")
    return dispatch=>{
        setTimeout(()=>{
            dispatch({
                type:actionTypes.REMOVE_ALL,
                payload:{
                }
            })
        },1000)
        
    }
}