import React from 'react'
import styles from './instantupdates.module.scss';
import {Col,Container,Row} from 'reactstrap'

const InstantUpdates = () => {
    return (
        <div className={styles.main}>
            
<Container> 
                <Row>
                    
                    <Col sm={8}>
                        <div>
                            <p className={styles.headlist}>Why AAdmirals Travel& Transportation is the best transportation service Houston to
                            College Station, TX.</p>
                    <ul className={styles.ul}>
                        <li> The safest ground transportation from Houston to Austin</li>
                        <li> Affordable rates for luxury private rides.</li>
                        <li> Free Wi-Fi onboard</li>
                        <li> Cold Water onboard</li>
                        <li> Pick up time is based on your own schedule </li>
                        <li> We pick you up from where you want and drop you off at where you want.. </li>
                        <li> Power outlets in vehicles. </li>
                        <li> Music and media based on your preferences. </li>
                        <li> Stop based on your request to use the restroom or to get coffee, drinks.</li>
                    </ul>
                    </div>
                    </Col>
                    <Col sm={4}>
                        <img src="../../Assets/Rectangle 217.png"
                        width="100%" height="100%"
                        alt="College Station to Houston Shuttle"
                        />
                    </Col>
                    
                </Row>
                
                </Container>
        </div>
    )
}

export default InstantUpdates;