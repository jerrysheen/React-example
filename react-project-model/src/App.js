// src/App.js
import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

const testHoc = (WarppedComponent)=>{
    return class HOCComponent extends Component{
        render(){
            return(
                <>
                    <WarppedComponent />
                    <div>This is HOC component</div>
                </>
            )
        }
    }
}

@testHoc
class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default App