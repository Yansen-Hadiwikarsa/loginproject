import Login from "./components/Login";
import {useState} from "react";
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import Memos from "./components/Memos";
import NewMemo from "./components/NewMemo";
import {login} from "./services/User";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)

  const [memos, setMemos] = useState([
    {
      id: 0,
      dateCreated: new Date(),
      memoText: 'This is a very important memo.'
    },
    {
      id: 1,
      dateCreated: new Date(),
      memoText: 'This is also a very important memo.'
    }
  ])

  function loginSuccess() {
    setIsLoggedIn(true)
    console.log('isLoggedIn = ' + isLoggedIn)
  }

  function deleteMemo(id) {
    setMemos(memos.filter(memo => memo.id !== id))
  }

  function handleLogin(credentials) {
    login(credentials).then(
        () => setIsLoggedIn(true),
        () => console.log("login failed")
    )
  }

  return <Container fluid>
    <NewMemo showNewMemo={show} setShowNewMemo={setShow} setMemos={setMemos}/>
    <Row>
      <Col> {isLoggedIn ?
          <>
            <Row>
              <Col><Button onClick={handleShow}>New</Button></Col>
            </Row>
            <Memos memos={memos} deleteMemo={deleteMemo}/>
          </>
          : <Login login={handleLogin}/>}
      </Col>
    </Row>
  </Container>
}

export default App;