"use client";

import { Col, Row } from "antd";
import React from "react";
import MBC from "./MBC";

const MAndB = () => {
  return (
    <Row className="">
      <Col xs={6}></Col>
      <Col xs={12}>
        <MBC />
      </Col>
      <Col xs={6}></Col>
    </Row>
  );
};

export default MAndB;
