import React,{ useState,useEffect } from 'react'


export default function TimerbyHook() { 
    // useState(initial state)
    const [minCount, setMinCount] = useState(0)
    const [hourCount,setHourCount] = useState(0)
    //const [start,setStart] = useState(false)
    function  startToCount(){
        let totalTime = minCount+hourCount*60
        const discount = setInterval(()=>{
            if(totalTime>0){
                totalTime -= 1
                setHourCount(parseInt(totalTime/60))
                setMinCount(totalTime%60)
            }
            else{
                clearInterval(discount)
                console.log("finished")
            }
        },1000)
    }
    /*when the page is rendering this will happen */
    /*should save min max */
    useEffect(()=>{
        if(minCount>60){
            setMinCount(Math.abs((60-minCount)%60))
            setHourCount(hourCount+1)
        }else if(minCount<0){
            setMinCount(60)
        }
        if(hourCount>60){
            setHourCount(Math.abs((60-hourCount)%60))
        }else if(hourCount<0){
            setHourCount(60)
        }
    })

/*
    沒有設置clear方法，目前還不知道怎麽製作。。。。
*/
    
    return (
        <div>
                <span>{hourCount}</span>
                <span>:</span>
                <span>{minCount}</span>
                <br/>
                <button onClick={()=>setHourCount(hourCount+1)}>+</button>
                <button onClick={()=>setHourCount(hourCount-1)}>-</button>
                <button onClick={()=>setMinCount(minCount+1)}>+</button>
                <button onClick={()=>setMinCount(minCount-1)}>-</button>
                <button onClick={()=>setHourCount(hourCount+15)}>15min</button>
                <button onClick={startToCount}>start</button>
        </div>
    )

}



