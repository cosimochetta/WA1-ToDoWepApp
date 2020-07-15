import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import { Redirect, Link } from "react-router-dom"

function LoginModal(props) {
    return <Modal show={props.show}>
        <Modal.Header>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.show &&
                <LoginForm setTaskFormMode={props.setTaskFormMode} addOrEditTask={props.addOrEditTask} task={props.task} userLogin={props.userLogin}></LoginForm>}
        </Modal.Body>
    </Modal>
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", submitted: false, loginError: false };
    }

    doLogin = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            this.props.userLogin(this.state.username, this.state.password)
                .then((result) => {
                    if (result)
                        this.setState((state) => ({ submitted: true }));
                    else
                        this.setState((state) => ({ loginError: true }));
                })
        } else {
            this.form.reportValidity();
        }

    }

    updateField = (name, value) => {
        this.setState({ [name]: value });
    }


    render() {
        if (this.state.submitted)
            return <Redirect to="/" />
        return (
            <Form onSubmit={this.doLogin}>
                <Form.Group controlId="form_username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username"
                        required onChange={(ev) => this.updateField("username", ev.target.value)} />
                </Form.Group>
                <Form.Group controlId="form_password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter password"
                        required type="password" onChange={(ev) => this.updateField("password", ev.target.value)} />
                </Form.Group>
                {
                    this.state.loginError && (
                        <div className='alert alert-danger show' role='alert'>
                            <strong>Error:</strong> <span>login failed</span>
                        </div>
                    )
                }
                <div className="float-right">
                    <Link to="/"><Button variant="secondary" >Cancel</Button></Link>
                    <Button variant="primary" type="submit" className="mx-2" onSubmit>
                        Login
                    </Button>
                </div>
            </Form>
        )
    }
}

export { LoginModal };