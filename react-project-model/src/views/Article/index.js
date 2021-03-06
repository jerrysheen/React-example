import React, { Component } from 'react'
import { Card, Table, Tag, Button, Modal,message } from 'antd'

import { getArticles,deleteArticle } from '../../requests'
import {withRouter} from 'react-router-dom'
import moment from 'moment'

//实现excel下载功能
import XLSX from 'xlsx'
//利用map的方式来更改title
const titleDisplayMap = {
    id: 'id',
    title: '标题',
    author: '作者',
    createAt: '创建时间',
    amount: '阅读量'
}

//window.moment = moment
class Article extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            columns: [],
            total: 0,
            isLoading: false,
            limited: 10,
            offset: 0
            //这边还可以设置每页产生多少内容
        }
        this.deleteArticle = this.deleteArticle.bind(this)
    }
    //建立行标签，其中dataIndex标签可以用render方式来渲染一个组件，这里另外加上删除和编辑两个组建
    getColums = (columnKeys) => {
        const columns = (columnKeys.map(name => {
            if (name === 'amount') {
                return {
                    title: titleDisplayMap[name],
                    key: name,
                    render: (record) => {
                        return (record.amount >= 200 ?
                            <Tag color="magenta">{record.amount}</Tag> :
                            <Tag color="blue">{record.amount}</Tag>
                        )
                    }

                }
            }
            return {
                title: titleDisplayMap[name],
                dataIndex: name,
                key: name
            }
        }))
        //添加最后一行操作按钮 
        columns.push({
            title: "操作",
            key: "operation",
            render: (record) => {
                return (
                    <div>
                        <Button size="small" type="primary"onClick={()=>this.toEdit(record)}>编辑</Button>
                        <Button size="small" type="danger" onClick={()=>this.deleteArticle(record)}>删除</Button>
                    </div>
                )
            }
        })
        return columns
    }
    //为删除Button添加事件处理
    deleteArticle(record){
    //console.log(record)
    //model方法貌似没有办法绑定this。如果要绑定那种就写component
        Modal.confirm({
            title: 'Do you Want to delete these article?',
            content: record.title,
            onOk() {
              deleteArticle()
              .then(resp=>{
                  console.log(resp)
              })
              .finally(
                message.success('This article is successfully deleted')
            )
            },
            onCancel() {
            },
          })
    }

    //为编辑button添加事件处理,push可以传递参数过去，这里最好只要传一个id过去，再去
    //后端里面去拿
    toEdit(record){
        this.props.history.push({
            pathname:`/admin/article/edit/:${record.id}`,
            state:{record}})

    }

    //利用moment组建，建立时间戳
    getTime = (dataList) => {
        return (dataList.map(data => {
            data.createAt = moment(data.createAt).format("YYYY/MM/DD/HH:mm")
        }))
    }

    //利用axios服务取得post类的data，并且加入状态中，在读取的过程中，state中的loading状态会改变
    getData = () => {
        this.setState({
            isLoading: true
        })
        //this.offset和this.limited两个东西会在header里面发送过去
        getArticles(this.limited, this.offset)
            .then(resp => {
                const columnKeys = Object.keys(resp.data.list[0])
                const columns = this.getColums(columnKeys)
                //console.log(resp.data.list)
                this.getTime(resp.data.list)
                this.setState({
                    columns: columns,
                    dataSource: resp.data.list,
                    total: resp.data.total,
                })
            })
            .catch(err => {
                //error msg
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }

    //用来改变每一页的内容，发送offset过去
    handlePaginationChange = (page) => {
        //console.log(page)
        this.setState({
            offset: page
        }, () => {
            this.getData()
        })
        //console.log("new Page", this.state.offset)

    }
    //导出excel文件：,aoa_to_sheet接收每一行的data{[],[],[]}，这种资料需要push进去
    toExcel = () => {
        /* convert state to workbook */
        const data = [['id', '标题', '作者', '阅读量', '创建时间']]
        this.state.dataSource.map((list) => { data.push(Object.values(list)) })
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        /* generate XLSX file and send to client */
        XLSX.writeFile(wb, "sheetjs.xlsx")

    }

    componentDidMount() {
        this.getData()
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <Card title="Default size card" extra={<Button onClick={this.toExcel}>
                    导出excel</Button>} style={{ width: "100%" }}>

                    <Table
                        loading={this.state.isLoading}
                        rowKey={record => record.id}
                        dataSource={this.state.dataSource}
                        columns={this.state.columns}
                        pagination={{
                            onChange: this.handlePaginationChange,
                            total: this.state.total
                        }}
                    />;
                </Card>

            </div>
        )
    }
}
export default withRouter(Article)