import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(){
    super()
 //  this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
    this.state={
      title:"To Do list",
      description:"This is a todoList created by Jerry",
      todos:[
        {
          userId: 1,
          id: 1,
          title: "go to the lab",
          completed:false
        },
        {
          userId: 1,
          id: 2,
          title: "go to eat the hot pot",
          completed:true
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        }

      ]
    }
  }
//click to change the check state
  handleCheckBoxChange=(event)=>{
    const id = event.target.id-1
    const newItems = [...this.state.todos]
    //console.log(id)
    newItems[id].completed = !newItems[id].completed 
    this.setState({
        todos: newItems
    })

  }

/* 
  Here we received a new inputValue， and we will add this to our state.
  but remember here we need to use "concat", instead of push. 
  just remember you need to add an re-freshed Items, but array.push will
  return true.or false
*/
  handleInputChange=(inputValue)=>{
    this.setState({
      todos: this.state.todos.concat({
        userId : Math.floor(Math.random()*20),
        id :this.state.todos.length+1,
        title:inputValue,
        completed:false
      })
    }//call back function like this:  ,()=>{console.log(this.state.todos)})
    )
  }

  
  render(){
    //console.log(this.state.todos)
    return (
      <div className="todoHolder">
        <TodoHeader />
        <TodoInput handleInputChange={(inputValue)=>this.handleInputChange(inputValue)}/>
        <TodoList todos={this.state.todos} handleCheckBoxChange={(event)=>this.handleCheckBoxChange(event)}/>
      </div>
    )
    }
}

export default App;
