import React from 'react'
import './signin.css'
import NavigationBar from '../../components/navigation-bar/navbar'
import Footer from '../../components/footer-section/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Form, Button} from 'react-bootstrap'
function SignIn() {
    return (
        <div className = "main-body">
            <NavigationBar/>
                <Container className = "signin-container">
                    <Row className = "signin-row">
                    <Col sm = {6}>
                    <div className ="signin-form-section signin">
                        <Form>
                        <h3 className = "text-light text-center">Log into your account!</h3>
                            <Row>
                                <Col md= {6} className = "form-fields">
                                    <Form.Label className = "text-light form-label">Enter your username:</Form.Label>
                                </Col>
                                <Col md= {6} className = "form-fields">
                                    <Form.Control type = "text"/>
                                </Col>
                            </Row>
                            <Row className = "section-divider">
                                <Col md= {6} className = "form-fields">
                                    <Form.Label className = "text-light form-label">Enter your password:</Form.Label>
                                </Col>
                                <Col md= {6} className = "form-fields">
                                    <Form.Control type = "text"/>
                                </Col>
                            </Row>
                          <Row>
                            <Col md = {6} >
                            <Form.Group controlId="formBasicCheckbox" >
                                <Form.Check type="checkbox"  label="Remember Me."  className = "text-light"/>
                            </Form.Group>
                            </Col>
                            <Col md= {6}>
                                <a href style = {{color:'white'}}>Forgot Password?</a>
                        
                            </Col>
                
                          </Row>
                          <Row className = "login-btn">
                            <Button variant = "primary">Log In</Button>
                          </Row>
                        </Form>
                    </div>
                </Col>
                        <Col sm = {6}  className = "signin">
                            <img src="/images/signin.svg" alt=""/>
                        </Col>
                        
                    </Row>
                </Container>
            <Footer/>
        </div>
    )
}

export default SignIn
