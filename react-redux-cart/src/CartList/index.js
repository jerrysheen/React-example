import React, { Component } from 'react'
import { add, remove } from '../actions/cart'
import {connect} from 'react-redux'

class CartList extends Component {
//render常规操作，
//注意这里会有一个props传递进来，这个props与connect有关。包含了reduceCart这个list
//和add，remove这两个onclick方法。
    render() {
       console.log("props",this.props)
        return (
            <div>
                <thead>
                    <tr>
                        <th>名字</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.cartReducer.map(item=>{
                        return(
                            <tr key={item.key}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <span>{item.amount}</span>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.add(item.id)}
                                    >+</button>
                                    <button onClick={()=>this.props.remove(item.id)}>-</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </div>
        )
    }
}
//这个方法接收state，回传state里面的cartReducer,
const mapStateToProps=(state)=>{
    console.log('state',state)
    return{
        cartReducer:state.cartReducer
    }
}
//conect方法将state里的东西都变成方法传递下去，所以可以将list数据放在这里，
//同时第二个参数将action也引入进来，这里不需要写dispatch就可以直接用，这也是
//redux框架的好处，同时你也不需要写listener，原来的时候你需要一个listener，
//每当数据更新的时候刷新this.state，进而刷新页面，现在onClick直接使store中的
//数据产生改变，并且直接改变connect中接收到的数据
export default connect(mapStateToProps,{add, remove})(CartList)
