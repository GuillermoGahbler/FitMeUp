import React from 'react';
import axios from 'axios';

import {
  Col, Container, Row, WeeklyCharts, UserForm,Error,MainGraph, LoseWeight
} from './components';

class Options extends React.Component {
  state = {
    loseWeight: false,
    maintainWeight: false,
    gainWeight:false,
    lastUpdate : 0
  }

closeModal =()=>{
  this.setState(prevState =>{
    return {...prevState,loseWeight:!prevState.loseWeight}
  })
}

lastUpdate = () => {
  console.log("last update");
  axios.get(`http://localhost:3001${this.props.location.pathname}`)
      .then(res => {
        console.log("updatedAt");
        console.log(res.data.updatedAt);
        
        let dateDiff = Math.floor((Date.now() - Date.parse(res.data.updatedAt))/(1000*60*60*24));
        console.log("dateDiff : " + dateDiff);
        this.setState({
          lastUpdate : dateDiff
        });
      })
      .catch(err => console.log(err))
}

componentDidMount() {
  this.lastUpdate();
}


  render  () {
  return (
    <div className='optionsPage'>
      <Container>

        <Row>
          <button 
          className="d-flex justify-content-center btn btn-info"
          onClick={this.closeModal}
          >Enter Current Stats
          </button>
          
          
                   </Row>

        <Row className="justify-content-center">
          <Error message = {"This is an error"}/>
        </Row>

        <Row>

          <Col size="md-3" height="300px">
            <UserForm/>
          </Col>

          <Col size="md-6">
            
            <MainGraph url={this.props.location.pathname}/>
          </Col>

          <Col size="md-3">
            <WeeklyCharts url={this.props.location.pathname}/>
          </Col>

        </Row>

      </Container>
  {(this.state.loseWeight || this.state.lastUpdate > 7)&& <LoseWeight
  closeModal = {this.closeModal}
  url={this.props.location.pathname}
/>}
    </div>);
  }
}

export default Options;