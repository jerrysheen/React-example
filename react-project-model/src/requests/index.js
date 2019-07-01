import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'

const service = axios.create({
    baseURL:isDev ?'http://rap2api.taobao.org/app/mock/223249/':''
})
   
//config里面可以把authToken发过去
service.interceptors.request.use((config)=>{
    config.data = Object.assign({},config.data,{
        //authToken:window.localStorage.getItem('authToken')
        authToken: 'jsjskld'
    })
    return config
})

service.interceptors.response.use((resp)=>{
    if(resp.data.code ===200){
        return resp.data
    }else{
        //全局处理错误
    }
})

//发送的post请求可以顺带发送过去一些参数，header的payload中都会保存下来
export const getArticles=(offset=0,limited=10)=>{
    return service.post('/api/v1/articlelist',{
        offset,
        limited
    })
}