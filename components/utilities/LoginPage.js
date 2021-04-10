import React, { useState } from "react";
import {Modal, Container, Row, Col, Button } from 'react-bootstrap'
import styles from '../Modals.module.css'
import Anima from '../../images/Anima.svg'
import LoginForm from './LoginForm'
import LoginCard from './LoginCard'

const LoginPage = ({signup}) => {
  return (
    <div className={styles.modal}>
    <Modal.Body className="show-grid">
    <Container>
    <div className="d-flex justify-content-center">
      <div className={styles.center}>
                  <img src={Anima} alt="anima"/>
          </div>
          <div className={styles.anima}>Anima</div>

      </div>

       <div className={styles.p}>
         <p>Don't have an account? <Button onClick={signup} variant="link">SignUp</Button></p>
       </div>
      {/* modal head end*/}

      <Row>
          <Col xs={12} md={6}>
            <LoginCard/>
          </Col>

          <Col xs={0} md={1}>
            <div>
            <span className="vertical-line"></span>
            <p>or</p>
            <span class="vertical-line"></span>
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
