import React,{ Component } from 'react'


//模拟react loadable的行为
const loadable =({
    loader,
    loading: Loading
})=>{
    return class LoadableComponent extends Component{
        state={
            LoadableComponent:null
        }
        //es的import操作自带promise
        componentDidMount(){
            loader()
                .then(resp=>{
                    this.setState({
                        LoadableComponent:resp.default
                    })
                })
        }
        render(){
            return(
                LoadableComponent? <LoadableComponent />:<Loading />
            )
        }
    }
}
export default function loadable() {
    return (
        <div>
            
        </div>
    )
}
