import {Button, Form, Modal} from "react-bootstrap";

function NewMemo({showNewMemo, setShowNewMemo, setMemos}) {
    function handleClose() {
        setShowNewMemo(false)
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleClose()
        const memoText = document.getElementById('memoText').value

        setMemos(previousMemos => [...previousMemos, {
            id: Math.random() * 999999 + 100,
            dateCreated: new Date(),
            memoText: memoText
        }])
    }

    return <Modal show={showNewMemo} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>New Memo Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Memo Text</Form.Label>
                    <Form.Control type="text" placeholder="Memo Text" id='memoText'/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
}

export default NewMemo