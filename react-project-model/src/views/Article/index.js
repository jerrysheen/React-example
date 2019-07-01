import React, { Component } from 'react'
import { Card, Table, Tag,Button } from 'antd'

import { getArticles } from '../../requests'
import moment from 'moment'
//利用map的方式来更改title
const titleDisplayMap={
    id:'id',
    title:'标题',
    author:'作者',
    createAt:'创建时间',
    amount:'阅读量'
}

//window.moment = moment
export default class Article extends Component {
    constructor() {
        super()
        this.state = {
            dataSource:[],
            columns : [],
            total:0,
            isLoading:false
        }
    }
//建立行标签，其中dataIndex标签可以用render方式来渲染一个组件，这里另外加上删除和编辑两个组建
    getColums=(columnKeys)=>{
        const columns = (columnKeys.map(name=>{
            if(name==='amount'){
                return{
                    title:titleDisplayMap[name],
                    key:name,
                    render:(record)=>{
                        return(record.amount >=200 ? 
                            <Tag color="magenta">{record.amount}</Tag>:
                            <Tag color="blue">{record.amount}</Tag>
                        )
                    }
                    
                }
            }
            return{    
                title:titleDisplayMap[name],
                dataIndex:name,
                key:name}}))
        columns.push({
            title:"操作",
            key:"operation",
            render:(record)=>{
                return(
                    <div>
                         <Button size="small" type="primary">编辑</Button>
                         <Button size="small" type="danger">删除</Button>
                    </div>
                )
            }
        })
        return columns
    }
//利用moment组建，建立时间戳
    getTime =(dataList)=>{
        return(dataList.map(data=>{
            data.createAt= moment(data.createAt).format("YYYY/MM/DD/HH:mm")
        }))
    }

//利用axios服务取得post类的data，并且加入状态中，在读取的过程中，state中的loading状态会改变
    getData =()=>{
        this.setState({
            isLoading:true
        })
        getArticles()
        .then(resp => {
            const columnKeys=Object.keys(resp.data.list[0])
            const columns = this.getColums(columnKeys)
            //console.log(resp.data.list)
            this.getTime(resp.data.list)
            this.setState({
                columns:columns,
                dataSource:resp.data.list,
                total:resp.data.total,
            })
        })
        .catch(err =>{
            //error msg
        })
        .finally(()=>{
            this.setState({
                isLoading:false
            })
        })
    }

    componentDidMount(){
       this.getData()
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
                    <Table 
                        loading={this.state.isLoading}
                        rowKey = {record=>record.id}
                        dataSource={this.state.dataSource} 
                        columns={this.state.columns} 
                        pagination={{
                            total:this.state.total}}
                    />;
                </Card>

            </div>
        )
    }
}
