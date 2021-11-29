import Memo from "./Memo";
import {Row} from "react-bootstrap";

function Memos({memos, deleteMemo}) {
    return <Row>{memos.map(memo => <Memo memo={memo} delete={deleteMemo}/>)}</Row>
}

export default Memos