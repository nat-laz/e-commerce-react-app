import React from "react";
import {Form, Input } from "antd";
import "../style/Footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export default function Footer() {
  const navigate = useNavigate();

  const scrolltoTop = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const onFinish = (values) => {
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="footer text-dark bg-medium ">
        
        <div className="contactUsForm container-box1 bg-light  split">
          <div className="contactus-message">
          <div className="weWillContact">
            Leave your email and we 
            will contact you
          </div>
          <div className="para"><p>we will be able to give you advise and chose furniture for your interior design</p></div>
          </div>
          <div>
            <Form
             style={{marginTop: "2em"}}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="NAME"
                name="Name"
                rules={[
                  {
                    message: "Please input your username!",
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
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                {" "}
                <Input className="secondInput common" placeholder="Email" />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <button
                  htmlType="submit"
                  style={{
                    background: "transparent",
                    cursor: "pointer",
                    border: "1px solid black",
                    padding: '5px 18px',
                    width: '14em'
                  }}
                >
                  SUBMIT
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <div className="Cont_SocialMedia_foot">
          <div>
            <h2 className="titles" style={{marginBottom:"1em"}}>Contact Us</h2>
            <ul className="listing2">
              <li>
                <b>Phone:</b> 123-456-7890
              </li>
              <li>
                <b>Email:</b>
                <a href="mailto:email@example.com">
                  {" "}
                  InteriorReachUs@example.com
                </a>
              </li>
              <li>
                <b>Address: </b>1234 Main Street, Anytown, USA 12345
              </li>
            </ul>
          </div>

          <div>
            <p
              onClick={() => scrolltoTop("/")}
              style={{ cursor: "pointer" }}
              className="titles listing2"
            >
              Home
            </p>
            <p
              onClick={() => scrolltoTop("/cataloge")}
              style={{ cursor: "pointer" }}
              className="titles listing2"
            >
              Catalogue
            </p>
            <p
              onClick={() => scrolltoTop("/cart")}
              style={{ cursor: "pointer" }}
              className="titles listing2"
            >
              Cart
            </p>
          </div>


          <div className="shopByCate" >
                <p className="titleCat" ><b>Shop by Category</b></p>
                <p onClick={()=>scrolltoTop("/chairs")} style={{cursor:"pointer"}} className='listing2'>Modern Chairs</p>
                <p onClick={()=>scrolltoTop("/tables")} style={{cursor:"pointer"}} className='listing2'>Fancy Dinning Tables</p>
                <p onClick={()=>scrolltoTop("/bookcase")} style={{cursor:"pointer"}} className='listing2'>Stylish Bookcases</p>
                <p onClick={()=>scrolltoTop("/lamps")} style={{cursor:"pointer"}} className='listing2'>Scultural Lamps</p>

          </div>
          <div className="logos-box">
            <ul className="listing">
              <li className="logos2">
                 <IoLogoTwitter/>
               
              </li>
              <li className="logos2">
                <IoLogoFacebook />
              </li>
              <li className="logos2">
                <IoLogoPinterest />
              </li>
              <li className="logos2">
                <IoLogoInstagram />
              </li>
            </ul>
          </div>
        </div>

        <p className="ReservedRights">
          © 2022 P & L. All right reserved Privacy Policy | Terms and
          Conditions | Site Index 
        </p>
      </div>
    </>
  );
}
