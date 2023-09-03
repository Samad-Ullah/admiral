import React from "react";
import styles from "./news.module.scss";
import { Row, Col } from "reactstrap";
import useNews from "./useNews";
const News = () => {
  const { news } = useNews();
  return (
    <Row className={styles.main_container} noGutters>
      <Col lg={1} md={1}>
        <div className={styles.news}>
          <p>Note</p>
        </div>
      </Col>
      <Col lg={11} md={11}>
        <marquee
          className={styles.marquee}
          direction="left"
          height="100"
          width="200"
          bgcolor="white">
          <p className="m-0">
            {news ? news.map((item) => `${item.news}     ~|A|~     `) : null}
          </p>
        </marquee>
      </Col>
    </Row>
  );
};

export default News;
