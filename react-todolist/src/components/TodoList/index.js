import React, {Component} from 'react'
import TodoItem from './FinishedItem'

class TodoList extends Component{
    constructor(props){
        super()
        this.state={
            // no! use this wont update !!!// todos:props.todos
            //handleCheckBoxChange: props.handleCheckBoxChang
        }
        

    }



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