import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Form, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input/Input";

const Signin = () => {
  return (
    <div>
      <Container>
        <Row style={{marginTop:'50px'}}>
          <Col md={{span:6, offset:3}}>
            <Form>
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
                Signin
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
