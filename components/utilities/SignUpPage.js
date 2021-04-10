import React, { useState } from "react";
import {Modal, Container, Row, Col, Button } from 'react-bootstrap'
import styles from '../Modals.module.css'
import Anima from '../../images/Anima.svg'
import SignupForm from './SignupForm'
import LoginCard from './LoginCard'

const SignUpPage = ({login}) => {
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
         <p>already have an account? <Button onClick={login} variant="link">Login</Button></p>
       </div>
      {/* modal head end*/}

      <Row>
          <Col xs={12} md={6}>
            <LoginCard/>
          </Col>

{/* virticle line */}

          <Col xs={1} md={1}>        
                <div className={styles.verticle}></div>
                 <p>or</p>
                 <div className={styles.verticle}></div>             
          </Col>
{/* signup form */}

          <Col xs={12} md={5}>
            <div className="d-inline p-2 ">
            <SignupForm/>
            </div>
          </Col>

      </Row>
    </Container>
  </Modal.Body>
  </div>  
  );
};

export default SignUpPage;
