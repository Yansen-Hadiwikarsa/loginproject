import {Toast, ToastContainer} from "react-bootstrap";
import {useEffect, useState} from "react";

function ErrorToast(props) {
    const [show, setShow] = useState(props.errorOccured);

    // Run the given function on first render
    // Run the given function when any dependency changes
    useEffect(
        // the function to run
        () => {
            if (props.errorOccured)
                setShow(true)
        },
        // list of dependencies
        [props.errorOccured]
    )

    return <ToastContainer position='bottom-end'>
        <Toast bg='danger' show={show} onClose={() => setShow(false)} autohide delay={3000}>
            <Toast.Body className='text-white'>Login Failed</Toast.Body>
        </Toast>
    </ToastContainer>
}

export default ErrorToast