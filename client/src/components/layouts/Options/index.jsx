import React from 'react';

import {
  Col, Container, Row, WeeklyCharts, UserForm,Error,MainGraph
} from './components';

const Options = () => {
  return (
    <div className='optionsPage'>
      <Container>

        <Row>
          <button className="d-flex justify-content-center">Lose Weight</button>
          <button className="d-flex justify-content-center">Maintain Weight</button>
          <button className="d-flex justify-content-center">Gain Weight</button>
        </Row>

        <Row className="justify-content-center">
          <Error message = {"This is an error"}/>
        </Row>

        <Row>

          <Col size="md-3" height="300px">
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