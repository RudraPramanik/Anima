import React, { useState } from "react";
import {Modal, Container, Row, Col, } from 'react-bootstrap'
import styles from '../Modals.module.css'

const LoginPage = () => {
  return (
    <Modal.Body className="show-grid">
    <Container>
      <Row>
        <Col xs={2} md={4}>
        </Col>
        <Col xs={8} md={4}>
          <div>anime</div>
        </Col>
        <Col xs={2} md={4}>
        </Col>
      </Row>
      <Row>
          <Col xs={12} md={6}>
              <Row>
                  <Col xs={12} md={6}>google</Col>
                  <Col xs={12} md={6}>facebook</Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>dribble</Col>
                  <Col xs={12} md={6}>behance</Col>
              </Row>

          </Col>
          <Col xs={12} md={6}>
              login
          </Col>

      </Row>
    </Container>
  </Modal.Body>  );
};

export default LoginPage;
