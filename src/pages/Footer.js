import React from 'react';
import { Button, Form, Input } from 'antd';
import "../style/Footer.css";
import {IoLogoTwitter} from 'react-icons/io';
import {IoLogoFacebook} from 'react-icons/io';
import {IoLogoPinterest} from 'react-icons/io';
import {IoLogoInstagram} from 'react-icons/io';
import { useNavigate} from 'react-router-dom';



export default function Footer() {
  const navigate = useNavigate();


  const scrolltoTop = (path) => {
  
    window.scrollTo(0, 0);
    navigate (path);
  }

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
              
                <p onClick={()=>scrolltoTop("/")} style={{cursor:"pointer"}}  className='titles listing2'>Home</p>
                <p onClick={()=>scrolltoTop("/cataloge")} style={{cursor:"pointer"}} className='titles listing2'>Catalogue</p>
                <p onClick={()=>scrolltoTop("/cart")} style={{cursor:"pointer"}} className='titles listing2'>Cart</p>
                
                
          </p>

          <p className="shopByCate" >
                <p className="titleCat" ><b>Shop by Category</b></p>
                <p onClick={()=>scrolltoTop("/chairs")} style={{cursor:"pointer"}} className='titles listing2'>Modern Chairs</p>
                <p onClick={()=>scrolltoTop("/tables")} style={{cursor:"pointer"}} className='titles listing2'>Fancy Dinning Tables</p>
                <p onClick={()=>scrolltoTop("/bookcase")} style={{cursor:"pointer"}} className='titles listing2'>Stylish Bookcases</p>
                <p onClick={()=>scrolltoTop("/lamps")} style={{cursor:"pointer"}} className='titles listing2'>Scultural Lamps</p>
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
