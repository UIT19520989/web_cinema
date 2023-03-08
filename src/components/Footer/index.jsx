import { Col, Row } from "antd";
import styles from "./Footer.module.scss";
import NavFooter from "./NavFooter";
import Section from "./Section";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Row>
        <Col span={16} offset={4}>
          <NavFooter />
          <Section />
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
