import React,{Component} from 'react'
import './index.css'

class TodoItem extends Component {
    constructor(props){
        super()
        this.state = {
            id:props.id,
            handleCheckBoxChange : props.handleCheckBoxChange,
            checked:props.completed,
            title:props.title
        }
    }
    
 /* 
    use this arrow function, we don't need to bind this in the constructor*/   
    handleCheckBoxChange=(event)=>{
        //console.log(`${event.target.id} ${event.target.checked}`)
        const id = event.target.id
        this.state.handleCheckBoxChange(event)
    }

/*
  use this function we can know will todo Item's state has changed, so that we only
  need to re-render these components.
*/
    shouldComponentUpdate(nextProps){
        //console.log(nextProps.completed)
        //console.log(this.props.completed)
         return nextProps.completed ===!this.props.completed
     }

    render(){
        //console.log(this.props.completed)
        console.log(`${this.props.id} re-render`)
        /*Here we use prop.completed to sepreate what is finished and what we 
        need to do, and use ternary to add different style here*/
        return(
        <div>
            <li className="list-style">
                <input 
                    className="checkbox-style"
                    id = {this.props.id}
                    name="checked"
                    type="checkbox"
                    onChange={this.handleCheckBoxChange}
                    checked={this.props.completed}
                    //onChange={this.handleChange}             
                /> 
                <span 
                    onClick={this.handleChange}
                    className={this.props.completed? "completed":"todo"}
                >{this.state.title}</span>
            </li>
        </div>
        )
    }
}

export default TodoItem
