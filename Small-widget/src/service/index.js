import axios from 'axios'
import apis from './apis'

const ajax = axios.create({
    baseURL:apis.baseURL
})

const getWeather=()=>{
    return ajax.get(apis.url)
}

export default getWeather
