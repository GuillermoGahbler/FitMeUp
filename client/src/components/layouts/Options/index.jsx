import React from 'react';

import {
  Col, Container, Row, WeeklyCharts, UserForm,Error,MainGraph
} from './components';

const Options = () => {
  return (
    <div className='optionsPage'>
      <Container>

        <Row>
          <button className="d-flex justify-content-center">text 1</button>
          <button className="d-flex justify-content-center">text2</button>
          <button className="d-flex justify-content-center">text3</button>
        </Row>

        <Row className="justify-content-center">
          <Error message = {"This is an error"}/>
        </Row>

        <Row>

          <Col size="md-3">
            <UserForm/>
          </Col>

          <Col size="md-6">
            <MainGraph/>
          </Col>

          <Col size="md-3">
            <WeeklyCharts />
          </Col>

        </Row>

      </Container>

    </div>);
}

export default Options;