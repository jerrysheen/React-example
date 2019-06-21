import React, {Component} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component{
    constructor(props){
        super()
        this.state={
            // no! use this wont update !!!// todos:props.todos
            //handleCheckBoxChange: props.handleCheckBoxChang
        }
        

    }

    // componentDidUpdate(){
    //     console.log(this.props.todos)
    // }
    render(){
       // console.log(this.state.todos)
        return(
            this.props.todos.map(todo=>{
            return <TodoItem key={todo.id} 
            {...todo} 
            handleCheckBoxChange={(event)=>this.props.handleCheckBoxChange(event)}
            ></TodoItem>
        })

        )
    }
} 

export default TodoList