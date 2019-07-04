import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';

export default class Dashboard
    extends Component {
    render() {
        return (
            <div>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
                    <div>
                        <Row>
                            <Col span={12}>col-12</Col>
                            <Col span={12}>col-12</Col>
                        </Row>
                        <Row>
                            <Col span={8}>col-8</Col>
                            <Col span={8}>col-8</Col>
                            <Col span={8}>col-8</Col>
                        </Row>
                        <Row>
                            <Col span={6}>col-6</Col>
                            <Col span={6}>col-6</Col>
                            <Col span={6}>col-6</Col>
                            <Col span={6}>col-6</Col>
                        </Row>
                    </div>
                </Card>
            </div>
        )
    }
}
