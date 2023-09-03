import React from 'react'
import styles from './recentrequest.module.scss' 
import {Col,Container,Row,Button} from 'reactstrap'

import img4 from '../../Assets/asset/Rectangle 143.png'

import left from '../../Assets/asset/left-arrow.png'
import right from '../../Assets/left-arrow.png'
import car from '../../Assets/asset/car.png'
import Router from "next/router";
// import line from '../../Assets/asset/Line 16.png'

const Requestsection = () => {
  const goUp = () => {
    window.scrollTo(0, 0);
  };
    return (
        <div className={styles.main}>
            <center>
            <p className={styles.heading}>Some of our most recent request of City To City Transfer</p>
            <br/>
           <Container>
               <Row>
                   <Col>
                   <img src="../../Assets/asset/left-arrow.png"  alt="image"/>
                   <img src="../../Assets/asset/car.png" className={styles.car} alt="image"/> 
                   <img src="../../Assets/left-arrow.png"  alt="image"/>
                   </Col>
               </Row>
               <br/>
               <br/>
            <Row>
                <Col   sm={12} md={3}>
                            <div className={styles.image}>
                            <img src="../../Assets/asset/Rectangle 143.png" className={styles.imageset} alt="image"/>
                                <div className={styles.text_block}>
                                <p className={styles.city}>Houston</p>
                            </div>
                            </div>
                </Col>
                <Col sm={12} md={3}>
                <div className={styles.image}>
                            <img alt="y1" src="../../Assets/asset/Rectangle 143.png"/>
                                <div className={styles.text_block}>
                                <p className={styles.city}>Austin</p>
                            </div>
                            </div>
                </Col>
                <Col sm={12} md={3}>
                <div className={styles.image}>
                            <img alt="y2" src="../../Assets/asset/Rectangle 143.png" className={styles.imageset} alt="image"/>
                                <div className={styles.text_block}>
                                <p className={styles.city}>Dallas</p>
                            </div>
                            </div>
                </Col>
                <Col sm={12} md={3}>
                    
                <div className={styles.container_right}>
                            <div className={styles.overly}>
                            <img src="../../Assets/asset/Rectangle 143.png" className={styles.imageset} alt="image"/>
                                <div className={styles.text_block}>
                                <p className={styles.city}>San Antonio</p>
                            </div>
                            </div>
                            </div>
                </Col>
            </Row>
            
            </Container>
            <Row>
                <Col>
                <Button className={styles.button} onClick={goUp}>Book Online</Button>
                </Col>
            </Row>
            
            </center>
        </div>
    )
}

export default Requestsection;


