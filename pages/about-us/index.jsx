import React, { useState, useEffect, useRef } from "react";
import styles from "./about.module.scss";
import {Container, Row } from "reactstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Aboutcrew from '../../Components/Aboutcrew/Aboutcrew'
import Loader from '../../Components/Loader/Loader';
import { getAboutPage } from '../../redux/About_us/action'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'reactstrap';
import Image from 'next/image'
import axios from "axios"
import { useRouter } from 'next/router'
import {NextSeo} from 'next-seo'
import { URL } from "../../config/serverUrl";

const About = (props) => {
  const [active, setActive] = useState(false);
  const router = useRouter()

  const handleClick = () => {
    setActive(!active);
  };

  const dispatch = useDispatch()

  const cms = useSelector(state => state.about)
  const { about_us_page } = cms
  
  // const data = about_us_page && about_us_page.aboutUs[0]
  // const crew = cms.about_us_page && cms.about_us_page.crew
  const crew=props.data1 && props.data1.crew
  let data= props.data1.aboutUs.length>0 &&  props.data1.aboutUs[0]
   useEffect(() => {
    dispatch(getAboutPage())
    }, [])
    // 
  return (
    <>
    <NextSeo
            title={data?.metaTitle}
            description={data?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
    {/* <Head>
        <meta charSet="utf-8" />
        <title>{data?.metaTitle}</title>
        <meta
          name="description"
          content={data?.metaDescription}
        />
    <link rel="canonical" href={`https://aadmirals.com${router?.pathname}`} />
      </Head> */}
    {!crew ? <Loader /> : (
       <>
      {active ? <SideNav active={active} setActive={setActive} /> : null}
      <SideNav />
      <Floatingbutton />
      <Header />
        {
            cms.error ?
            <Alert className="m-0" color="danger">
            {cms.error}
          </Alert>:null
        }
<div>
              <div className={styles.mainContainer}>
                 <Image priority={true}
                  alt={'WORLD NO 1 AIRPORT TRANSPORT SERVICE'}
                  src={data.bannerImage}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  
                />
              </div>
        
            <div className={styles.headingsContainer}>
              <h4>WORLD NO 1 AIRPORT TRANSPORT SERVICE</h4>
              <h1>About AAdmirals</h1>
              <h4>
                {data.bannerDescription}
              </h4>
            </div>
       
        </div>
      
          <Container>
            <div className={styles.abouttext}>
              <p>{data.introduction}</p>
            </div>
          </Container>

          <Container>
            <Row>
              <Aboutcrew crew={crew} />
            </Row>
          </Container>

      <br />
      <Footer />
    </>
    )}
    </>
  );
};
export async function getStaticProps ({query}) {
  let data= await axios.get(`${URL}/website-content/about-us-page`);  
  let data1=data.data.data
  return { props: {data1} }
}
export default About;
