import React, { Component } from 'react'
import { Card, Button, List, Typography , Avatar, Badge } from 'antd'

export default class Settings extends Component {

    data = [
        {
            title: 'Ant Design Title 1',
            description: 'Racing car sprays burning fuel into crowd.'
        },
        {
            title: 'Ant Design Title 2',
            description: 'Japanese princess to wed commoner.'
        },
        {
            title: 'Ant Design Title 3',
            description: 'Australian walks 100km after outback crash.'
        },
        {
            title: 'Ant Design Title 4',
            description: 'Man charged over missing wedding girl.'
        },
    ];


    render() {
        return (
            <div>
                <Card title="通知中心"
                    bordered={false}
                    style={{ width: "100%" }}
                    extra={<Button>全部已读</Button>}
                >
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.data}
                            renderItem={item => (
                                <List.Item
                                    extra={<Button>标为已读</Button>}>
                                        <List.Item.Meta
                                            avatar={<Badge dot><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description={item.description}
                                        />
                                </List.Item>
                                
                            )}
                        />
                    </div>
                </Card>
            </div>
        )
    }
}


