import React, { Component } from 'react'
import { EventEmitter } from 'events';
import Weather from '../Weather'
import TimerbyHook from '../TimerbyHook';

class DraggableDiv extends Component {
/* props.render will send info to render which component*/
    constructor(props){
        super()
        this.state={
            divX:parseInt(200*Math.random()),
            divY:parseInt(200*Math.random()),
            mouseOn:false,
            relX:0,
            relY:0
            }
    }
    
    handleMouseMove=(event)=>{
    
        console.log(this.state.mouseOn)
    
        let moveX = event.clientX+this.state.relX
        let moveY = event.clientY+this.state.relY
        console.log(this.state.relX,this.state.relY)
        console.log(moveX,moveY)
        console.log(moveX,moveY)
        if(this.state.mouseOn===true){
          this.setState({
            divX:moveX,
            divY:moveY
          })
        }
        
    }
    
    handleMouseDown=(event)=>{
      //relX -> related X,
        const relX = this.state.divX-event.clientX
        //console.log(event.clientX)
        const relY = this.state.divY-event.clientY
        this.setState(
        {
            relX:relX,
            relY:relY,
            mouseOn:true
        })
        // console.log(event)
         console.log("relX",this.state.relX,this.state.relY)
    }
    
    handleMouseUp=()=>{
        this.setState({
            mouseOn:false
        })
        console.log("mouseOff")
    }

    renderComponent(){
        if(this.props.render === "weather"){
            console.log("weather")
            return(
                <Weather></Weather>
            )
        }
        else if(this.props.render === "timer"){
            return(
                <TimerbyHook></TimerbyHook>
            )
        }
        else{
        }
    }
    
    
    render() {
        return (
            <div>
                
                <div
                style={
                    {
                    cursor:"pointer",
                    zIndex:-2,
                    position:"absolute",
                    height:400,
                    width:300,
                    top:this.state.divY,
                    left:this.state.divX,
                    backgroundColor:"lightblue"
                    
                }}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}
                >
                    <div
                        style={
                            { 
                            cursor:"pointer",
                            zIndex:-1,
                            height:50,
                            width:300,
                            // top:this.state.divY,
                            // left:this.state.divX,
                            backgroundColor:"black"
                           }
                    }>    
                    </div>
                    {this.renderComponent()}
                </div>
                
                
            </div>
        )
      }

}

export default DraggableDiv
