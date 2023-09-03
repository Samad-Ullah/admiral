import React from 'react'
import styles from './limo.module.scss'
import logo from '../../Assets/Group 943.png'
import {Container,Col,Row} from 'reactstrap'

const Limo = (props) => {
    return(
            <Container>
                <Row>
                    <Col sm={12}>
                        <center>
                    <img src="/Assets/Group 943.png" className={styles.servicesection}   alt="image" />
                    <h2 className={styles.service}>AAdmirals Travel & Transportation Houston Limo Service</h2>
                    </center>
                    </Col>
                </Row>

                <Row>

                    <Col sm={12}>
                    <center>
                    <p className={styles.services}>24 Hours Service - Car Services - Airport Transfers</p>
                    <img src={props.bannerImage} width="100%" height="100%" alt={props?.title} />
                    </center>
                    </Col>
                </Row>
            </Container>
);
}
export default Limo;