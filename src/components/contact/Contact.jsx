import React from "react";
import "./contact.css";
import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);
const Contact = () => {
  return (
    <>
    <Navbar />  
      <div className="contact-container">
        <div className="contact-form">
          <div className="contact-header">
            <h1>Bizimle İletişime Geçin</h1>
            <Form>
              <Form.Group controlId="name">
                <Form.ControlLabel>İsim</Form.ControlLabel>
                <Form.Control name="name" />
                <Form.HelpText tooltip>İsim Alanı Zorunludur.</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.ControlLabel>E-Posta Adresi</Form.ControlLabel>
                <Form.Control name="email" type="email" />
                <Form.HelpText tooltip>E-Posta Adresi Alanı Zorunludur.</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="subject">
                <Form.ControlLabel>Konu</Form.ControlLabel>
                <Form.Control name="subject"/>
                <Form.HelpText tooltip>Konu Alanı Zorunludur.</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="textarea">
                <Form.ControlLabel>Mesaj</Form.ControlLabel>
                <Form.Control rows={5} name="textarea" accepter={Textarea} />
                <Form.HelpText tooltip>Mesaj Alanı Zorunludur.</Form.HelpText>
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  <Button appearance="primary">Gönder</Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="contact-info">
          <h1>İletişim Bilgileri</h1>
          <h2>Telefon Numarası</h2>
          <span>090-484-8080</span>
          <h2>E-posta Adresi</h2> 
          <span>info@company.com</span>
          <h2>Adres</h2> 
          <span>123 Aenean id posuere dui,Praesent laoreet 10660</span>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;
