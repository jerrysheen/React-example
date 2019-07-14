import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import {connect} from 'react-redux' 
import {login} from '../../actions/login.js'
import {Redirect} from 'react-router-dom'
import './index.less'


const mapStateToProps=(store)=>{
  return{
    store:store,
    isLogin:store.user.isLogin
  }
}

@connect(mapStateToProps,{login})
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.login(values)
        console.log("state",this.props.store.getState)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log("isLogin",this.props.isLogin)
    return (
      this.props.isLogin ?
      <Redirect to="/admin/"></Redirect>
      :
      <div className="login-div">
       
      <Form onSubmit={this.handleSubmit} className="login-form">
      <h1 className="login-hr">Login   </h1>
      <hr/>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm
