import actionType from './actionTypes'

export const add =(id)=> {
    console.log(id)
    return{
            type: actionType.ADD_CART,
            payload: {
                id
            }
    }
    
}

//这边需要一个id，来控制给哪个cartItem来删减，这个统一叫做payload
export const remove =(id)=>{
    return{
        type:actionType.REMOVE_CART,
        payload: {
            id
        }
    }
}