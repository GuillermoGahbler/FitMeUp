import React from 'react';
import axios from 'axios';

import {Col, Container, Row, MacroPieChart, CalorieBarChart, UserForm, Error, MainGraph, LoseWeight} from './components';

class Options extends React.Component {
  state = {
    statsIsClicked: false
  }

  componentDidMount(){
    const userId = this.props.match.params.id;
    axios.get(`http://localhost:3001/accts/${userId}`)
    .then(res=>this.changeState('userStats',res.data))
    axios.get(`http://localhost:3001/days/${userId}`)
    .then(res=>this.changeState('days',res.data))
  }


  changeState = (propName, value)=>{
    this.setState(prevState =>{
      return{...prevState, [propName]:value}
    })
  }

  reverseBooleanValue = (propName) => {
    this.setState(prevState => {
      return { ...prevState, [propName]: !prevState[propName] }
    })
  }

  closeStats = () => this.reverseBooleanValue('statsIsClicked')

  serializeForm = refs =>{
    return Object.keys(refs).reduce((acc, cv)=>{
      return {...acc, [cv]:refs[cv].value}
    },{})
  }
  
  updateStats = (stats) =>{
    const userStats = this.serializeForm(stats)
    console.log(userStats)
  }


  addIntake = (intake) =>{
     
    console.log(intake)
  }


  getLastDay =()=>{
    const {first,...allOtherDays}= this.state.days;
    return first;
  }


  render() {
    return (
      <div className='optionsPage'>
        <Container>

          <Row>
            <button
              className="d-flex justify-content-center"
              onClick={this.closeStats}
            >Enter current stats
          </button>

          </Row>

          <Row className="justify-content-center">
            <Error message={"This is an error"} />
          </Row>

          <Row>

            <Col size="md-3" height="300px">
              <UserForm enterIntake={this.addIntake}/>
            </Col>

            <Col size="md-6">

              <MainGraph data={this.state.days} />
            </Col>

            <Col size="md-3">
              <div>
                <h3>This week:</h3>
                <p>Daily calorie target: 2200</p>
                <p>Average daily calories: 2230</p>
                <p>Deviation: 1.45% OPTIMAL</p>
                <CalorieBarChart days={this.state.days} />
                <MacroPieChart currentDay={this.state.LastDay}/>
              </div>
            </Col>

          </Row>

        </Container>
        {this.state.statsIsClicked && <LoseWeight
          closeModal={this.closeStats}
          updateUserStats={this.updateStats}
                   />}
      </div>);
  }
}

export default Options;