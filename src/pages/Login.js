import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Button, Form, Input } from "antd";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  // if (user) {
  //   return <Navigate to="/profile" />;
  // }

  const onFinish = (values) => {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    console.log(registeredUsers);
    if (!registeredUsers) {
      return toast.error("PLEASE REGISTER");
    }
    if (registeredUsers) {
      if (registeredUsers.email !== values.email) {
        console.log("incorect email");
        return toast.error("INCORRECT E-MAIL");
      }
      if (registeredUsers.password !== values.password) {
        console.log("incorect password");
        return toast.error("INCORRECT PASSWORD");
      }
    }
    setUser(registeredUsers);

    console.log("Success:", values);
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
        <h1>LOG IN</h1>
        <Toaster
          toastOptions={{
            success: {
              style: {
                border: "1px solid", color: 'black',
              },
            },
            error: {
              style: {
                border: "1px solid", color: 'black',
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
            label="E-mail"
            name="email"
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
            label="Password"
            name="password"
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
            <Button type="primary" htmlType="submit">
              LOG IN
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="LoginCreateAccount">
        <h1>REGISTER</h1>
        <p>
          IF YOU STILL DON'T HAVE AN ACCOUNT, USE THIS OPTION TO ACCESS
          THE REGISTRATION FORM.
        </p>
        <p>
          BY GIVING US YOUR DETAILS, PURCHASING WILL BE FASTER AND
         AN ENJOYABLE EXPERIENCE.
        </p>
        <button onClick={() => navigate("/register")}>Create Account</button>
      </div>
    </div>
  );
}
