import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Form, Input } from "antd";
import "../style/Login.css";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  const onFinish = (values) => {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    console.log(registeredUsers);
    if (!registeredUsers) {
      return toast.error("PLEASE REGISTER");
    }
    if (registeredUsers) {
      if (registeredUsers.email !== values.email) {
        return toast.error("INCORRECT E-MAIL");
      }
      if (registeredUsers.password !== values.password) {
        return toast.error("INCORRECT PASSWORD");
      }
    }
    setUser(registeredUsers);
    toast.success("YOU ARE LOG IN");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="Login">
      <div className="LoginForm">
        <h2>LOG IN</h2>
        <Toaster
          toastOptions={{
            success: {
              style: {
                border: "1px solid",
                color: "black",
                padding: "15px",
              },
            },
            error: {
              style: {
                border: "1px solid",
                color: "black",
                padding: "15px",
              },
            },
          }}
        />
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
            label="EMAIL"
            rules={[
              {
                required: true,
                message: "Please input your e-mail",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="PASSWORD"
            rules={[
              {
                required: true,
                message: "Please input your password",
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
            <button className="login-btn log" htmlType="submit"> 
              LOG IN</button>
            
          </Form.Item>
        </Form>
      </div>
      <div className="LoginCreateAccount">
        <h2>REGISTER</h2>
        <p>
          IF YOU STILL DON'T HAVE AN ACCOUNT, USE THIS OPTION TO ACCESS THE
          REGISTRATION FORM.
        </p>
        <p>
          BY GIVING US YOUR DETAILS, PURCHASING WILL BE FASTER AND AN ENJOYABLE
          EXPERIENCE.
        </p>
        <button className="login-btn create" onClick={() => navigate("/register")}>
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
}
