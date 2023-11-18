import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="Username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="PasswordCheck">
        <Form.Label>Password Check</Form.Label>
        <Form.Control type="passwordCheck" placeholder="PasswordCheck" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegisterForm;