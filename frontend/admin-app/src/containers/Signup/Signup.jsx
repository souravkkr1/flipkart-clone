import React from 'react'
import Button from "react-bootstrap/Button";
import { Container, Form, Row, Col } from "react-bootstrap";
import Input from '../../components/UI/Input/Input';

const Signup = () => {
  return (
    <div>
      <Container>
        <Row style={{marginTop:'50px'}}>
          <Col md={{span:6, offset:3}}>
            <Form>

            <Row>
                <Col md={6}>
                    <Input
                        label="First Name"
                        placeholder="Enter first name"
                        value=""
                        type="text"
                        onChange={()=>{}}
                    />
                </Col>
                <Col md={6}>
                <Input
                        label="Last Name"
                        placeholder="Enter last name"
                        value=""
                        type="text"
                        onChange={()=>{}}
                    />
                </Col>
            </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Input
                        label="Email"
                        placeholder="Enter email"
                        value=""
                        type="email"
                        onChange={()=>{}}
                    />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Input
                        label="Password"
                        placeholder="Enter password"
                        value=""
                        type="password"
                        onChange={()=>{}}
                    />
              </Form.Group>
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup
