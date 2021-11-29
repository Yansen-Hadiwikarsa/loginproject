import {Button, Form, Toast, ToastContainer} from "react-bootstrap";
import {useEffect, useState} from "react";
import ErrorToast from "./ErrorToast";

function Login(params) {
    const [showLoginError, setShowLoginError] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // if (username === 'Yansen' && password === 'password'){
    // console.log('Accepted')
    // }

    useEffect(() => {
        if (showLoginError)
            setShowLoginError(false)
    }, [showLoginError])

    function handleSubmit(event) {
        event.preventDefault()
        params.login({username, password})
    }

    return <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username"
                              onChange={event => setUsername(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                              onChange={event => setPassword(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <ErrorToast errorOccured={showLoginError}/>
    </>
}

export default Login