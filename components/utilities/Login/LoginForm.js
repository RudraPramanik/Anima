import {Form, Button} from 'react-bootstrap'
import styles from '../../Modals.module.css'

const LoginForm = () => {
    return (
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>
  <Button type="button" className="btn btn-default w-100 my-3">Login</Button>
</Form>
    )
}

export default LoginForm
