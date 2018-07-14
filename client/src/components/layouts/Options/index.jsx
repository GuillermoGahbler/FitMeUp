import React from 'react';
import axios from 'axios';
// axios helping from end speak to back end
import {Col, Container, Row, MacroPieChart, CalorieBarChart, UserForm, Error, MainGraph, LoseWeight} from './components';

class Options extends React.Component {
  state = {
    statsIsClicked: false,
    days:[]
  }

  //makes two different requests for user information as soon as the compornent mounts
  componentDidMount(){
    const userId = this.props.match.params.id;
    this.readAccount(userId);
    this.readDays(userId);
    
  }

  readAccount = (id)=>{
    axios.get(`/accts/${id}`)
    .then(res=>this.changeState('userStats',res.data))
  }

  readDays = (id) => {
    axios.get(`/days/${id}`)
    .then(res => this.changeState('days',res.data)) 
   }


//using deconstructor to get the info we want
  changeState = (propName, value)=>{
    this.setState(prevState =>{
      return{...prevState, [propName]:value}
    })
  }


  //resets boolean to prev state
  reverseBooleanValue = (propName) => {
    this.setState(prevState => {
      return { ...prevState, [propName]: !prevState[propName] }
    })
  }

  //uses reset bloolean to close the stat container 
  closeStats = () => this.reverseBooleanValue('statsIsClicked')

  
  serializeForm = refs =>{
    return Object.keys(refs).reduce((acc, cv)=>{
      return {...acc, [cv]:refs[cv].value}
    },{})
  }
  
  updateStats = (stats) =>{
    const account_id = this.props.match.params.id;
    const userStats = this.serializeForm(stats)
    axios.put(`/accts/${account_id}`, userStats)
    .then(res=>this.readAccount(res.data[0]))
 
  }


  addIntake = (intake) =>{
     const id = this.props.match.params.id;
     const newIntake = {...intake,account_id:id}
     axios.post('/days',newIntake)
     .then(res => this.readDays(id))
  }


  getLastDay =()=>{
    const [first,...allOtherDays]= this.state.days;
    return first;
  }

  getAvgCalories = () =>{
    const totalCal = this.state.days.reduce((acc,day)=> acc + day.calories,0)
    return Math.floor(totalCal / this.state.days.length);
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
                {/* <p>Daily calorie target: 2200</p> */}
                <p>Average daily calories:{this.getAvgCalories()}</p>
                {/* <p>Deviation: 1.45% OPTIMAL</p> */}
                <CalorieBarChart days={this.state.days} />
                <MacroPieChart currentDay={this.getLastDay}/>
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