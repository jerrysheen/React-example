import React, { Component } from 'react'
import getWeather from '../../service/index'
class Weather extends Component {
    constructor(){
        super()
        this.state={
            name:"Taipei",
            wind:"5.7",
            temp:29.8,
            weather:"rain"
        }
    }
    
    componentWillMount(){
        getWeather()
        .then((resp)=>{
            this.setState({
                name:resp.data.name,
                wind:resp.data.wind.speed,
                temp:parseInt(resp.data.main.temp)/10,
                weather:resp.data.weather[0].description
            })

        })
    }
    
    render() {
        return (
            <div>
                <li>{`City Name: ${this.state.name}`}</li>
                <li>{`Wind: ${this.state.wind}`}</li>
                <li>{`Temp: ${this.state.temp}`}</li>
                <li>{`Weather: ${this.state.weather}`}</li>
            </div>
        )
    }
}
 export default Weather