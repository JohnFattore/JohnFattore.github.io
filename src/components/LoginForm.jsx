import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="Username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          Don't have an account? Register for one in no time!
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;