import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Button, Form, Input } from "antd";
import "./Login.css";

export default function Login() {

const navigate = useNavigate();
  const { user } = useContext(AppContext);
  if (user) {
    return <Navigate to="/profile" />;
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="Login">

      <div className="LoginForm">
      <h1>LOG IN</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="LoginCreateAccount">
        <h1>REGISTER</h1>
        <p>
          IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE THIS OPTION TO ACCESS
          THE REGISTRATION FORM.
        </p>
        <p>
          BY GIVING US YOUR DETAILS, PURCHASING IN ZARA.COM WILL BE FASTER AND
          AN ENJOYABLE EXPERIENCE.
        </p>
        <button onClick={()=>navigate('/register')}>Create Account</button>
      </div>
    </div>
  );
}
