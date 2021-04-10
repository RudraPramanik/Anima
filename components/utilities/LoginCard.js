import { Card,Row,Col } from 'react-bootstrap'
import Facebook from '../../images/Facebook.svg'
import Google from '../../images/Google.svg'
import styles from '../Modals.module.css'
import Dribble from '../../images/Dribble.svg'
import Behance from '../../images/Behance.svg'

 const LoginCard = () => {
  return (
    <>
    <Row>
    <Col xs={12} md={6}>
    <div className={styles.card_div}>
       <Card className={styles.card_google}>
        <Card.Body>
          <img src={Google} alt="google" className={styles.card_logo_svg}/>
          <Card.Text className={styles.card_typography_google}>
            continue with google
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

      </Col>
    <Col xs={12} md={6}>

    <div className={styles.card_div}>
       <Card className={styles.card_facebook}>
        <Card.Body>
          <img src={Facebook} alt="google" className={styles.card_logo_svg}/>
          <Card.Text className={styles.card_typography}>
            continue with Facebook
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    </Col>
</Row>
<Row>
  
    <Col xs={12} md={6}>
      <div className={styles.card_div}>
       <Card className={styles.card_dribble}>
        <Card.Body>
          <img src={Dribble} alt="google" className={styles.card_logo_svg}/>
          <Card.Text className={styles.card_typography}>
            continue with Dribble
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

    </Col>
   
    <Col xs={12} md={6}>
    <div className={styles.card_div}>
       <Card className={styles.card_behance}>
        <Card.Body>
          <img src={Behance} alt="google" className={styles.card_logo_svg}/>
          <Card.Text className={styles.card_typography}>
            continue with Behance
          </Card.Text>
        </Card.Body>
      </Card>
     </div>
    </Col>
</Row>
</>

  )
}

export default LoginCard


