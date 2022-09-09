import React from 'react';
import { Button, Form, Input } from 'antd';
import "../style/Footer.css";
import {IoLogoTwitter} from 'react-icons/io';
import {IoLogoFacebook} from 'react-icons/io';
import {IoLogoPinterest} from 'react-icons/io';
import {IoLogoInstagram} from 'react-icons/io';
import { HashLink as Link } from "react-router-hash-link";


export default function Footer() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
  <>
    
    <div className="footer">
    <div className="contactUsForm">
      <p style={{fontSize:"2rem"}}>Leave your email and we will contact you</p>
    <Form 
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
       
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="NAME"
        name="Name"
        rules={[
          {
           
            message: 'Please input your username!',
          },
        ]}
      >
        <Input className="secondInput common" placeholder="Name" />
      </Form.Item>

      <Form.Item
        label="E-MAIL"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            
            message: 'Please input your E-mail!',
          },
        ]}
        
      >   <Input className="secondInput common" placeholder="Email" />
        
      </Form.Item>

      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button htmlType="submit" style={{ background: "transparent",  cursor: "pointer", border:"1px solid black" }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    
        <div className='Cont_SocialMedia_foot'>
        
          
          <p>
              <h2 className='titles'>Contact Us</h2>
              <ul className='listing2'>
                  <li><b>Phone:</b> 123-456-7890</li>
                  <li><b>Email:</b>
                  <a href="mailto:email@example.com"> InteriorReachUs@example.com</a>
                  </li>
                  <li><b>Address: </b>1234 Main Street, Anytown, USA 12345</li>
          
          
              </ul>
          </p>

          <p>
              <Link to="#homeCorner">
                <h2 >Home</h2>
              </Link>
              <Link to="#aboutCorner">
                <h2 className='titles listing2'>About Us</h2>
              </Link>
              <h2 className='titles listing2'>Contact Us</h2>
              
          </p>
          <p className='logos-box'>
          
              <ul className='listing'>
              <li className='logos2'><IoLogoTwitter/></li>
              <li className='logos2'><IoLogoFacebook/></li>
              <li className='logos2'><IoLogoPinterest/></li>
              <li className='logos2'><IoLogoInstagram/></li>
          
              </ul>
          </p>
        </div>
        
        <p className='ReservedRights'>
          
          © 2022 Lulu & Georgia. All right reserved
          Privacy Policy | Terms and Conditions | Site Index | Do Not Sell My Information
        </p>


        
    </div>
    </>
  )
}
