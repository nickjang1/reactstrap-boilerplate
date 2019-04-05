import React, {
  Component
} from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';

import Section from '../../sections/Section';


class Main extends Component {
  render() {
    return (
      <Section className="section-main bg-maze">
        <Container>
          <Row>
            <Col>Home</Col>
            <Col>Home</Col>
            <Col>Home</Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Main;
