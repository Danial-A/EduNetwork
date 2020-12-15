import React from 'react'
import './signup.css'
import NavigationBar from '../../components/navigation-bar/navbar'
import Footer from '../../components/footer-section/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Form, Button, InputGroup} from 'react-bootstrap'
function SignUp() {
    return (
        <div className = "main-body">
            <NavigationBar/>
                <Container className = "signin-container">
                    <Row className = "signin-row">
                    <Col sm = {6}>
                    <div className ="signup-form-section signup">
                        <Form>
                        <h3 className = "text-light text-center">Sign Up For Your Account!</h3>
                            <Row className = "section-divider">
                                <Col md= {2} className = "form-fields">
                                    <Form.Label className = "text-light form-label">First Name:</Form.Label>
                                </Col>
                                <Col md= {4} className = "form-fields">
                                    <Form.Control type = "text" placeholder = "First name...."/>
                                </Col>
                                <Col md= {2} className = "form-fields">
                                    <Form.Label className = "text-light form-label">Last Name:</Form.Label>
                                </Col>
                                <Col md= {4} className = "form-fields">
                                    <Form.Control type = "text" placeholder = "Last name...."/>
                                </Col>
                            </Row>
                            <Row className = "section-divider">
                                <Col md= {2} className = "form-fields">
                                    <Form.Label className = "text-light form-label">Email ID:</Form.Label>
                                </Col>
                                <Col md= {4} className = "form-fields">
                                    <Form.Control type = "email" placeholder = "yourname@example.com" style = {{fontSize :'14px'}}/>
                                </Col>
                                <Col md= {2} className = "form-fields">
                                    <Form.Label className = "text-light form-label">Username:</Form.Label>
                                </Col>
                                <Col md= {4} className = "form-fields">
                                    <Form.Control type = "text"/>
                                </Col>
                            </Row>
                      
                          <Row className = "section-divider">
                                <Col md= {3} className = "form-fields">
                                    <Form.Label className = "text-light form-label">Enter Password:</Form.Label>
                                </Col>
                                <Col md= {3} className = "form-fields">
                                    <Form.Control type = "password"/>
                                </Col>
                                <Col md= {3} className = "form-fields">
                                    <Form.Label className = "text-light form-label">Confirm Password:</Form.Label>
                                </Col>
                                <Col md= {3} className = "form-fields">
                                    <Form.Control type = "password"/>
                                </Col>
                            
                         </Row>
                        <Row className = "section-divider">
                            <Col md = {4}>
                                <Form.Label className = "text-light form-label">Select Date</Form.Label>
                            </Col>
                            <Col md = {6}>
                                <Form.Control type = "date" name = "dob"  placeholder ="Date Of Birth.."/>
                            </Col>
                           
                        </Row>
                          <Row className = "login-btn">
                            <Button variant = "primary">Sign Up</Button>
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

export default SignUp
