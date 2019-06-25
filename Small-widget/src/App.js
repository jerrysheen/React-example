import React,{Component} from 'react';
import './App.css';
import getWeather from './service'
import WidgetDesktop from './components/WidgetDesktop'

function componentDidMount(){
  const api = getWeather()
  api.then(resp=>{
    //console.log(resp)
    this.setState({
      data:resp.data
    })
  })
  .then(()=>console.log(this.state.data))
}


function App(){
  return (
    <>
    {/* <div className="App">
        <TimerbyHook></TimerbyHook>
    </div> */}
    <WidgetDesktop></WidgetDesktop>
    
    
  
        
    
    </>
  )
}

export default App
