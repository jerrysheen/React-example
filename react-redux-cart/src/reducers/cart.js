import actionType from '../actions/actionTypes'
const initState = 
[{
    id:1,
    title:"apple",
    price:30,
    amount:10
},
{   id:2,
    title:"pig",
    price:500,
    amount:3

},
{   id:3,
    title:"computer",
    price:20000,
    amount:2

}]


export default (state = initState,action)=>{
    console.log("开始",action)
    switch(action.type){
        case actionType.ADD_CART:
            return state.map(item=>{
                    if(item.id===action.payload.id){  
                        item.amount +=1
                        console.log(item.amount)
                    }
                    return item
                })
        case actionType.REMOVE_CART:
            return state.map(item=>{
                    if(item.id===action.payload.id){  
                        item.amount -=1
                        console.log(item.amount)
                    }
                    return item
                })
        
        default:
            return state
    }
} 