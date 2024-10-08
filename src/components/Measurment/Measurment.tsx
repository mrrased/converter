"use client";

import { Col, Row } from "antd";
import React from "react";
import MField from "./MField";

const Measurment = () => {
  return (
    <Row className="">
      <Col xs={6}></Col>
      <Col xs={12}>
        <MField />
      </Col>
      <Col xs={6}></Col>
    </Row>
  );
};

export default Measurment;
