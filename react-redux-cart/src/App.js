import React, { Component } from 'react'
import CartList from './CartList'


export default class App extends Component {
  constructor(){
    super()
  }
  render() {
   // console.log(this.props.store.getState())
    return (
      <div>
        <CartList ></CartList>
      </div>
    )
  }
}
