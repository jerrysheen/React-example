import React, {Component} from 'react'
import TodoItem from './FinishedItem'

class TodoList extends Component{
    constructor(props){
        super()
        this.state={
            /*if we put todos here, then in this.state we will only have
            the state when the constructor excute at the firsttime.
            setState at father component won't change this. instead it will
            send new props here*/
           }
        

    }

/* conditional rendering using ternary depends on the props.completed you got*/

    render(){
       // console.log(this.state.todos)
        return(
            <div>
                {this.props.todos.map(todo=>{
                    if(todo.completed === false){
                        return <TodoItem key={todo.id} 
                        {...todo} 
                        handleCheckBoxChange={(event)=>this.props.handleCheckBoxChange(event)}
                        ></TodoItem>
                    }
            
                })}
                <hr style={{height:"2px",backgroundColor:"gray"}}/>
                {this.props.todos.map(todo=>{
                    if(todo.completed === true){
                        return <TodoItem key={todo.id} 
                        {...todo} 
                        handleCheckBoxChange={(event)=>this.props.handleCheckBoxChange(event)}
                        ></TodoItem>
                    }
            
                })}
                
            </div>  
        )
    }
} 

export default TodoList