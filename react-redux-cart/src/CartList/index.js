import React, { Component } from 'react'
import { add, remove } from '../actions/cart'

class CartList extends Component {
    constructor(props){
        super()
        this.state={
            cartList:props.store.getState()
        }
    }

    getState=()=>{
        this.setState({
            cartList:this.props.store.cartReducer
        })
    }

    componentWillMount(){
        this.getState()
        this.props.store.subscribe(this.getState)
    }

    render() {
        console.log(this.state.cartList)
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
                    this.props.store.getState().cartReducer.map(item=>{
                        return(
                            <tr key={item.key}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <span>{item.amount}</span>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.store.dispatch(add(item.id))}
                                    >+</button>
                                    <button onClick={()=>this.props.store.dispatch(remove(item.id))}>-</button>
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
export default CartList
