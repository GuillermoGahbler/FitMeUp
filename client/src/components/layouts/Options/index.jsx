import React from 'react';
import axios from 'axios';
import {Col, Container, Row, MacroPieChart, CalorieBarChart, UserForm, Error, MainGraph, LoseWeight} from './components';
import "./index.css";

class Options extends React.Component {
  state = {
    statsIsClicked: false,
    days:[],
    weeks:[],
    userStats:{}
  }

  componentDidMount(){
    const userId = this.props.match.params.id;
    this.readAccount(userId);
    this.readDays(userId);
    //this.readWeeks(userId);

    
  }

  readWeeks = (id)=>{
    axios.get(`/weeks/${id}`)
    .then(res=>{
      this.changeState('weeks',res.data);
      this.setState({
        weeks : res.data
      });

      console.log("options state");
      console.log(this.state);
    })
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


  reverseBooleanValue = (propName) => {
    this.setState(prevState => {
      return { ...prevState, [propName]: !prevState[propName] }
    })
  }

  //uses reset bloolean to close the stat container 
  closeStats = () => this.reverseBooleanValue('statsIsClicked')


  updateStats = (stats) =>{
    const account_id = this.props.match.params.id;
    const userStats = {...stats,account_id:account_id}
    axios.post(`/weeks`, userStats)
    .then(res=>this.readAccount(res.data[0]))
    window.location.reload(true)

    
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
               className="d-flex justify-content-center btn btn-info statsButton"
              onClick={this.closeStats}
            >Enter current stats
          </button>

          </Row>


          <Row>

            <Col size="md-3" height="300px">
              <UserForm enterIntake={this.addIntake}/>
            </Col>

            <Col size="md-6">

              <MainGraph account_id={this.props.match.params.id}
              
              />
            </Col>

            <Col size="md-3">
              <div>
                <h3>This week:</h3>
                <p>Average daily calories:{this.getAvgCalories()}</p>
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