import {combineReducers} from 'redux'
import cartReducer from './cart'
//用一个combineReducers将所有的reducer包在一起传给store
export default combineReducers({
    cartReducer
})