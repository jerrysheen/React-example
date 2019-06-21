import React,{Component} from 'react'

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
    
    handleCheckBoxChange=(event)=>{
        //console.log(`${event.target.id} ${event.target.checked}`)
        const id = event.target.id
        this.state.handleCheckBoxChange(event)
    }

    componentDidUpdate(){
        //console.log(this.state.id)
    }
    
    render(){
        console.log(this.props.completed)
        return(
        <div>
            <li>
                <input 
                    id = {this.props.id}
                    name="checked"
                    type="checkbox"
                    onChange={this.handleCheckBoxChange}
                    checked={this.props.checked}
                    //onChange={this.handleChange}             
                /> 
                <span onClick={this.handleChange}>{this.state.title}</span>
            </li>
        </div>
        )
    }
}

export default TodoItem
