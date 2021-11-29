import {Button, Card, CloseButton, Col, Row} from "react-bootstrap";

function Memo(props) {
    return <Card style={{width: '18rem'}}>
        <Card.Body>
            <Card.Title>{props.memo.dateCreated.toString()}</Card.Title>
            <Card.Text>{props.memo.memoText}</Card.Text>
            <Row>
                <Col>
                    <Button variant="primary">Edit</Button>
                </Col>
                <Col xs='auto'>
                    <CloseButton onClick={
                        function pleaseDelete() {
                            props.delete(props.memo.id)
                        }
                    }/>
                </Col>
            </Row>
        </Card.Body>
    </Card>
}

export default Memo