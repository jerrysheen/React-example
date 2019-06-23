import React,{Component} from 'react'
import './index.css'


class TodoInput extends Component{
    constructor(props){
        super()
        this.state= {
            inputValue:"",
            checked: false,
            handleInputChange: props.handleInputChange
           
        }
        //this.handleChange = this.handleChange.bind(this)
    }
    handleChange=(event)=>{
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
       // console.log(Object.getOwnPropertyNames(event.target))
        // console.log(event.target)
        // console.log(event.target.testforvalue)
        //console.log(this.state.checked)
    }

/* This method is from App component, because now all the data is there.
after input has changed, here we will excute the handleInputChange method in
App component */
    handleInputChange=()=>{
        //console.log(inputValue)
        this.state.handleInputChange(this.state.inputValue)
    }

    render(){
        return(
          <div className="group"> 
            <input 
                className="input"
                name="inputValue"
                type="text"
                value={this.state.inputValue}
                onChange={this.handleChange}
            />
            <button 
                className="submit"
                onClick={this.handleInputChange}>Submit</button>
          </div>
        )
    }
}
export default TodoInput