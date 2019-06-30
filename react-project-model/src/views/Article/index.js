import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                文章列表
            </div>
        )
    }
}
