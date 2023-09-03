import React from 'react'
import styles from './citytocity.module.scss';
import {Col,Container,Row} from 'reactstrap'
import img1 from '../../Assets/Rectangle 140.png'
import img2 from '../../Assets/Rectangle 141.png'
import img3 from '../../Assets/Rectangle 142.png'
import img4 from '../../Assets/Rectangle 143.png'

const Citytocity = () => {
    return (
        <div className={styles.main}>
            <center>
            <p className={styles.heading}>{'Admirals Travel & Transportation Houston City to City Transfer'} </p>
            <p className={styles.subheading}>Service you Trust, Sit back and Relax</p>
            </center>
            <Container>
                
            <Row>
                <Col sm={5} md={3}>
                    <img src={img1} width="100%" height="100%" alt="..image" />
                </Col><Col sm={5} md={3}>
                    <img src={img2}  width="100%" height="100%" alt="..image1" />
                </Col><Col sm={5} md={3}>
                    <img src={img3}  width="100%" height="100%" alt="..image3" />
                </Col><Col sm={5} md={3}>
                    <img src={img4}  width="100%" height="100%" alt="..image4" />
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Citytocity
