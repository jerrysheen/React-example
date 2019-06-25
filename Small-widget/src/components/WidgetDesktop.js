import React,{useState} from 'react'
import DraggableDiv from './DraggableDiv'

export default function WidgetDesktop() {
    const [state,setState] =  useState(0)
    
    const handleClick=(wedget)=>{
        setState(wedget)
    }
    return (
        <div>
            <button onClick={()=>handleClick("weather")}>Weather</button>
            <button onClick={()=>handleClick("timer")}>Timer</button>
            <DraggableDiv render={state}></DraggableDiv>
        </div>
    )
}
