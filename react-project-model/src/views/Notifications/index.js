import React, { Component } from 'react'
import { Card, Button, List, Typography , Avatar, Badge } from 'antd'
import {connect} from 'react-redux'
import {removeNotification,removeAllNotifications} from '../../actions/notifications'

const mapStateToProps=(state)=>{
    //console.log("state",state)
    return{
        list:state.notifications.list
    }
}
@connect(mapStateToProps,{removeNotification,removeAllNotifications})
class Notifications extends Component {

    constructor(){
        super()

    }

    render() {
        console.log("render!!!")
        return (
            <div>
                
                <Card title="通知中心"
                    bordered={false}
                    style=  {{ width: "100%" }}
                    extra=  {<Button disabled={this.props.list.every(item=> item.hasRead === true)}
                            onClick={this.props.removeAllNotifications}
                            >全部已读</Button>}
                >
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.props.list}
                            renderItem={item => (
                                item.hasRead === false? 
                                <List.Item
                                    extra={<Button 
                                        disabled={item.hasRead}
                                        onClick={this.props.removeNotification.bind(this,item.id)}>标为已读</Button>}>
                                        <List.Item.Meta
                                            avatar={<Badge 
                                                    dot={!item.hasRead}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>}
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
                            dataSource={this.props.list}
                            renderItem={item => (
                                item.hasRead === true? 
                                <List.Item
                                    extra={<Button 
                                        disabled={item.hasRead}
                                        onClick={this.props.removeNotification.bind(this,item.id)}>标为已读</Button>}>
                                        <List.Item.Meta
                                            avatar={<Badge 
                                                    dot={!item.hasRead}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>}
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

export default Notifications

