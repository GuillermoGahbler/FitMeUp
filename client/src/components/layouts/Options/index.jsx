import React from 'react';

import {
  Col, Container, Row, WeeklyCharts, UserForm,Error,MainGraph, LoseWeight
} from './components';

class Options extends React.Component {
  state = {
    loseWeight: false,
    maintainWeight: false,
    gainWeight:false
  }

closeModal =()=>{
  this.setState(prevState =>{
    return {...prevState,loseWeight:!prevState.loseWeight}
  })
}


  render  () {
  return (
    <div className='optionsPage'>
      <Container>

        <Row>
          <button 
          className="d-flex justify-content-center"
          onClick={this.closeModal}
          >Lose Weight
          </button>
          
          
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
  {this.state.loseWeight && <LoseWeight
  closeModal = {this.closeModal}
  url={this.props.location.pathname}
/>}
    </div>);
  }
}

export default Options;