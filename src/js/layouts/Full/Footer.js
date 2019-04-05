import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Container, Row, Col
} from 'reactstrap';

export const FooterIntro = () => (
  <div className="site-footer site-footer-intro">
    <Container>
      <Row className="align-items-end">
        <Col xs="12" md="6">
          <Link className="brand" to="/">Logo</Link>
        </Col>
        <Col xs="12" md="6" className="text-md-right mt-4 mt-md-0">
          <span className="credit">
            © 2018
          </span>
        </Col>
      </Row>
    </Container>
  </div>
);

export const FooterMain = () => (
  <div className="site-footer site-footer-main">
    <Container />
  </div>
);

export default FooterIntro;
