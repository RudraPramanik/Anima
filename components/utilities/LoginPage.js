import React, { useState } from "react";
import {Modal, Container, Row, Col, } from 'react-bootstrap'
import styles from '../Modals.module.css'
import Anima from '../../images/Anima.svg'
import LoginForm from './LoginForm'
import LoginCard from './LoginCard'

const LoginPage = () => {
  return (
    <div className={styles.modal}>
    <Modal.Body className="show-grid">
    <Container>
      <Row>
        <Col xs={2} md={3}>
        </Col>
        <Col xs={8} md={6}>
          <Row>
            <Col xs={0} md={5}>
                <div className={styles.center}>
                  <img src={Anima} alt="anima"/>
                </div>
            </Col>
            <Col xs={7} md={7}>
                <div className={styles.anima}>Anima</div>
            </Col>
          </Row>
        </Col>
        <Col xs={2} md={3}>
        </Col>
      </Row>
       <div className={styles.p}>
         <p>already have an account? login</p>
       </div>
      {/* modal head end*/}

      <Row>
          <Col xs={12} md={6}>
            <LoginCard/>
          </Col>

          <Col xs={0} md={1}>
            <div>
                <div className={styles.verticle}></div>
                 <p>or</p>
                 <div className={styles.verticle}></div>
            </div>    
          </Col>

          <Col xs={12} md={5}>
            <div className="d-inline p-2 ">
            <LoginForm/>
            </div>
          </Col>

      </Row>
    </Container>
  </Modal.Body>
  </div>  
  );
};

export default LoginPage;
