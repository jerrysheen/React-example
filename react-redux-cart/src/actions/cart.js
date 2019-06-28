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
//回传type的一系列参数
export const remove =(id)=>{
    return{
        type:actionType.REMOVE_CART,
        payload: {
            id
        }
    }
}