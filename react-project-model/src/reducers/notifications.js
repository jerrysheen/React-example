import actionTypes from '../actions/actionTypes'

const initState = {
    isLoading: false,
    list: [
        {
            id:1,
            title: 'Ant Design Title 1',
            description: 'Racing car sprays burning fuel into crowd.',
            hasRead: true
        },
        {   
            id:2,
            title: 'Ant Design Title 2',
            description: 'Japanese princess to wed commoner.',
            hasRead: false
        },
        {
            id:3,
            title: 'Ant Design Title 3',
            description: 'Australian walks 100km after outback crash.',
            hasRead: true
        },
        {
            id:4,
            title: 'Ant Design Title 4',
            description: 'Man charged over missing wedding girl.',
            hasRead: false
        },
    ]

}

export default (state=initState,action)=>{
    console.log("kaishi",action)
    console.log("kaishi",state)
    switch(action.type){
        case actionTypes.REMOVE_NOTIFICATION:
            //state[action.payload.id].hasRead = true
           // console.log(state[action.payload.id].hasRead)
            const newState = state
            newState.list[action.payload.id-1].hasRead = true
            //注意id和list
            return newState
        case actionTypes.REMOVE_ALL:
                console.log("Remove All")   
            return state
        default:
            console.log("123")
            return state
    }
}