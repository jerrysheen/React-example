import React, { Component, createRef } from 'react'
import { Card, Row, Col } from 'antd';
import echarts from "echarts"

import './index.less'
import { getAmount } from '../../requests'


export default class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      ref : createRef()
    }
    this.myChart = null

  }

  initEscharts = () =>{
    getAmount()
      .then((resp)=>{
        //console.log(resp.data.amount)
        const option = {
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: resp.data.amount.map(data=>data.month)
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'line',
              data: resp.data.amount.map(data=>data.value),
              smooth:true
          }]
        }
        this.myChart = echarts.init(this.state.ref.current)
        this.myChart.setOption(option)
      })
    //console.log(this.state.ref.current)

  }

  componentDidMount(){
    this.initEscharts()
  }
  
  render() {
    return (
      <div>
      <Card title="概览" bordered={false} style={{ width: "100%" }}>
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="dashboardGutter-box"></div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="dashboardGutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="dashboardGutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="dashboardGutter-box">col-6</div>
            </Col>
          </Row>
        </div>
      </Card>
      
      <Card title="最近浏览量"  bordered={false} style={{ width: "100%" }}>
        <div ref={this.state.ref} style={{height:"300px" ,width:"50%"}}>

        </div>
      </Card>
      </div>
    )
  }
}
