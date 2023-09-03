import React, { useEffect } from "react";
import styles from "./blogs.module.scss";
import { Col, Container, Row } from "reactstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Blogcard from "../../Components/Blogscard/Blogscard";
import { getBlogPage } from "../../redux/Blog/action";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import { Helmet } from "react-helmet";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import * as api from "../../api";

const Blogs = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cms = useSelector((state) => state.blog);
  const { blog_page } = cms;

  // const blogDetails = blog_page && blog_page.blogDetails;
  const blogDetails = props.data1 && props.data1;

  useEffect(() => {
    dispatch(getBlogPage());
  }, []);
  return (
    <>
      <NextSeo
        title="Read Latest Blogs | AAdmirals Travel & Transportation Services"
        description="Read the latest blogs by AAdmirals travel & transportation services, Houston. We are the best limo service provider in Houston and greater areas."
        canonical={`https://aadmirals.com${router?.pathname}`}
      />
      <SideNav />
      <Floatingbutton />
      <Header />
      <Container className={styles.mainContainer} fluid>
        <div className={styles.headingsContainer}>
          <h4>WORLD NO 1 AIRPORT TRANSPORT SERVICE</h4>
          <h1>Read Latest Blog - AAdmirals</h1>
        </div>
      </Container>
      <br />
      <Container>
        {cms.error && (
          <Alert className="m-0" color="danger">
            {cms.error}
          </Alert>
        )}

        <Row>
          <Col>
            <Blogcard blogDetail={blogDetails} />
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </>
  );
};
export async function getServerSideProps({ query }) {
  const data = await api.fetchBlogPage();
  let data1 = data.data.blogDetails;
  return { props: { data1 } };
}

export default Blogs;
