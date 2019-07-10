import actionTypes from './actionTypes'

export const removeNotification=(id)=>{
    //console.log(id)
    return{
        type:actionTypes.REMOVE_NOTIFICATION,
        payload:{
            id
        }
    }
}

export const removeAllNotifications=()=>{
    //console.log("remove All")
    return{
        type:actionTypes.REMOVE_ALL,
        payload:{
        }
    }
}