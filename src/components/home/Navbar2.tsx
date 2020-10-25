import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import {useAuth , authContextType} from "../../contexts/auth.context"

function Navbar2() {
  const history = useHistory()
  const {authToken} : authContextType = useAuth()
  return (
    <Row noGutters={true}>
      {authToken && authToken.role === "owner" ? 
      <>
      <Col>
        <Button size="lg" variant="light" onClick={()=> {
          history.push("/dormowner")
        }} block>My Dorm</Button>
      </Col>
      </> 
      : 
      <>
      <Col>
        <Button onClick={() => history.push("/review") } size="lg" variant="light" block>Review</Button>
      </Col>
      <Col>
        <Button onClick={()=>{
          history.push("/lobby")
        }} size="lg" variant="light" block>Find Roommate</Button>
      </Col>
      </> 
      }

    </Row>
  );
}
export default Navbar2;
