import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import authService from "../../services/auth.service";
import adminService from "../../services/admin.service";
const Header = () => {
  const history = useHistory();

  return (
    <Row>
      <Col xs={3} md={2} style={{ textAlign: "center", marginTop: "20px", marginBottom: "40px" }}>
        <Button onClick={() => history.push("/admin")} variant="">
          <ArrowBackIosIcon htmlColor="white" fontSize="large" />
        </Button>
      </Col>
      <Col xs={6} md={8} style={{ textAlign: "center", marginTop: "20px", marginBottom: "40px" }}>
        <h1 style={{ fontWeight: 600, color: "white" }}>Edit Request</h1>
      </Col>
      <Col xs={3} md={2}></Col>
    </Row>
  );
};

function DormEditButton(props: any) {
  const history = useHistory();
  const { dormName, dormLink } = props;
  return (
    <Button
      variant="light"
      size="lg"
      block
      style={{
        fontSize: "1.25rem",
        textAlign: "left",
        color: "#F55E61",
        backgroundColor: "white",
        fontWeight: 600,
      }}
      onClick={() => history.push(`/admin/editrequest/${dormLink}`)}
    >
      {dormName}
    </Button>
  );
}

export default function () {
  const [data, setData] = useState<any[]>([]);
  document.body.style.backgroundColor = "#F55E61";
  adminService.adminListGetDormData().then((res) => setData(res));

  return (
    <>
      <Header />
      <Container>
        <Row noGutters={true}>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={10}>
            {data?.map((item: any, index) => (
              <DormEditButton dormName={item.newdata.name} dormLink={item.id} />
            ))}
          </Col>
          <Col xs={0} md={1}></Col>
        </Row>
      </Container>
    </>
  );
}
