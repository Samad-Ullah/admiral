/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import React, { useEffect } from "react";
import styles from "./blogsdetails.module.scss";
import { Col, Container, Row } from "reactstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Image from "next/image";
import Avatar from "react-avatar";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Loader from "../../Components/Loader/Loader";
import { getBlogIdPage } from "../../redux/BlogId/action";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import Head from "next/head";
import axios from "axios";
import { URL } from "../../config/serverUrl";
import { useRouter } from "next/router";
import AliceCarousel from "react-alice-carousel";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { NextSeo } from "next-seo";

const Blogsdetails = (props) => {
  const { asPath } = useRouter();
  const paths = asPath.split("/").slice(1);
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.blogId);
  const { blog_id_page } = cms;

  // const data = blog_id_page && blog_id_page
  const data = props.data1 && props.data1;
  useEffect(() => {
    dispatch(getBlogIdPage(props.query.id));
  }, []);

  return (
    <>
      <NextSeo
        title={data?.metaTitle}
        description={data?.metaDescription}
        canonical={`https://aadmirals.com${asPath}`}
      />
      <Head>
        <meta charSet="utf-8" />
        <title>{data?.metaTitle} </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data?.metaTitle} />
        <meta property="og:description" content={data?.metaDescription} />
        <meta name="description" content={data?.metaDescription} />
        <meta property="og:image" content={data?.blogImage} />
        {/* <link rel="canonical" href={`https://aadmirals.com${asPath}`} /> */}
      </Head>
      {
        // cms.loading || cms.error
        !data ? (
          <Loader />
        ) : (
          <>
            <SideNav />
            <Floatingbutton />
            <Header />
            {cms.error ? (
              <Alert className="m-0" color="danger">
                {cms.error}
              </Alert>
            ) : null}
            <br />
            <Breadcrumbs paths={paths} />
            <Container>
              <Row className={styles.reverse}>
                <Col xs={12} md={3} lg={3}>
                  <div className={styles.avatarside}>
                    <Avatar
                      size={180}
                      round={true}
                      src={data.bloggerImage}
                      style={{ objectFit: "cover" }}
                    />
                    <br />
                    <p>{data.blogTitle}</p>
                    <a href="#" style={{ fontWeight: 800 }}>
                      Admin
                    </a>
                    / Date: 12/05/2023
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={9}
                  lg={9}
                  style={{ marginBottom: "60px" }}
                  className={styles.column}>
                  <img
                    src={data.blogImage}
                    width="100%"
                    height="20%"
                    alt="image"
                    objectFit="cover"
                  />

                  <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{
                      __html: data.blogDescription,
                    }}></div>
                  {data && data.otherImages.length > 0 ? (
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                      {data &&
                        data.otherImages.map((index, key) => (
                          <div style={{ width: "100%", height: "500px" }}>
                            <Image
                              priority={true}
                              src={index?.url}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        ))}
                    </AliceCarousel>
                  ) : null}
                </Col>
              </Row>
            </Container>
            <div className={styles.final}></div>
            <Footer />
          </>
        )
      }
    </>
  );
};
export async function getServerSideProps({ query }) {
  let { slug } = query;
  const data = await axios.get(`${URL}/website-content/get-blog/${slug}`);
  let data1 = data.data;
  return { props: { data1, query } };
}

export default Blogsdetails;
