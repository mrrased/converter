"use client";

import { Col, Row } from "antd";
import KaSqForm from "./KaSqForm";

const KaSq = () => {
  return (
    <Row className="">
      <Col xs={6}></Col>
      <Col xs={12}>
        <KaSqForm />
      </Col>
      <Col xs={6}></Col>
    </Row>
  );
};

export default KaSq;
