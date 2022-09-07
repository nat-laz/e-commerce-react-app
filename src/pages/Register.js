import { useContext } from "react";
import "antd/dist/antd.min.css";
import { Form, Input, Button, Radio, Select, DatePicker, Checkbox } from "antd";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  const formSubmittedData = (values) => {
    setUser(values);
    console.log(values);

    let registeredUsers = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    toast.success("YOU HAVE BEEN SUCCESSFULLY REGISTERED");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <h1 style={{ marginLeft: "3em" }}>Personal Details</h1>
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
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={formSubmittedData}
        onFinishFailed={() => console.log("Form failed")}
      >
        <Form.Item label="Title" name="title">
          <Radio.Group>
            <Radio value="Mr."> Mr. </Radio>
            <Radio value="Mrs."> Mrs. </Radio>
            <Radio value="Diverse"> Diverse </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="First name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "The name is required.",
            },
            {
              pattern: /^[a-zA-Z0-9]+$/,
              message: "Name can only include letters and numbers.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "The name is required.",
            },
            {
              pattern: /^[a-zA-Z0-9]+$/,
              message: "Name can only include letters and numbers.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="country">
          <Select>
            <Select.Option value="Germany">Germany</Select.Option>
            <Select.Option value="Spain">Spain</Select.Option>
            <Select.Option value="England">England</Select.Option>
            <Select.Option value="United States">United States</Select.Option>
            <Select.Option value="India">India</Select.Option>
            <Select.Option value="Japan">Japan</Select.Option>
            <Select.Option value="China">China</Select.Option>
            <Select.Option value="Netherlands">Netherlands</Select.Option>
            <Select.Option value="Canada">Canada</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[
            {
              pattern: /^[a-zA-Z0-9]+$/,
              message: "city can only include letters and numbers.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="phone" label="Phone Number">
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item label="Birthdate" name="birthdate">
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
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
          name="isAccepted"
          valuePropName="checked"
          style={{ marginLeft: "5em" }}
        >
          <Checkbox>yes, I want to subscribe to INTERIOR Newsletter</Checkbox>
        </Form.Item>

        <Form.Item style={{ marginLeft: "5em" }}>
          <Button type="primary" htmlType="submit">
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;
