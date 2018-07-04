import React from 'react';

import {
  Col, Container, Row, WeeklyCharts, UserForm
} from './components';

const Options = () => {
  return (
    <div className='optionsPage'>
      <h1> Options Page </h1>
      <Container>
        <Row>
          <Col size="md-3">
            <UserForm/>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col size="md-3">
            <WeeklyCharts />
          </Col>
        </Row>
      </Container>
    </div>);
}

export default Options;