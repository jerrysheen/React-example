import React, { Component } from 'react'
import { Card, Button, List, Typography , Avatar, Badge } from 'antd'
import {connect} from 'react-redux'
import {removeNotification,removeAllNotifications} from '../../actions/notifications'


class Notifications extends Component {

    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    getData=()=>{
        this.setState({
            data:this.props.data.notifications.list
        })
    }

    componentDidMount(){
        this.getData()
    }
    render() {
        //console.log(this.props)
        return (
            <div>
                <Card title="通知中心"
                    bordered={false}
                    style=  {{ width: "100%" }}
                    extra=  {<Button disabled={this.state.data.every(item=> item.hasRead === true)}
                            onClick={this.props.removeAllNotifications}
                            >全部已读</Button>}
                >
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.data}
                            renderItem={item => (
                                item.hasRead === false?
                                <List.Item
                                    extra={<Button onClick={()=>this.props.removeNotification(item.id)}>标为已读</Button>}>
                                        <List.Item.Meta
                                            avatar={<Badge dot><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description={item.description}
                                        />
                                </List.Item>
                                 :
                                 <></>
                            )}
                            
                        />
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.data}
                            renderItem={item => (
                                item.hasRead === true?
                                <List.Item
                                    extra={<Button onClick={()=>this.props.removeNotification(item.id)}>标为已读</Button>}>
                                        <List.Item.Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description={item.description}
                                        />
                                </List.Item>
                                :
                                <></>
                            )}
                            
                        />
                    </div>
                </Card>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   // console.log("state",state)
    return{
        data:state
    }
}
export default connect(mapStateToProps,{removeNotification,removeAllNotifications})(Notifications)

