import React, { Component } from "react";
import { Input, Button } from "./components";
import DatePicker from 'react-datepicker';
//import API from "../../../../../utils/API"; No longer using because axios
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class UserForm extends Component {

  state = {
    date: moment(),
    calories:0, 
    protein:0, 
    carbs:0, 
    fat:0
  }

  submitForm = (event) => {
    event.preventDefault();
    const {fat,protein,carbs,calories,...idc} = this.state;
    const calcCalories = calories || fat * 9 + 4 * (protein + carbs);
    this.props.enterIntake({...this.state, calories: calcCalories})

  }

  changeState = (propName, value)=>{
    this.setState(prevState =>{
      return{...prevState, [propName]:value}
    })
  }
  
  handleIntegerInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.changeState( name,parseInt(value));
  }

  

  handleSelect = date =>this.changeState('date', date)

  render() {
    return (
      <form>
        <DatePicker
          name="date"
          selected={this.state.date}
          onSelect={this.handleSelect}

        />
        <p>Date</p>
        <p>-----Enter-----</p>
        <div>
          <Input

            name="calories"
            onChange={this.handleIntegerInputChange}
            placeholder="Calories (required)"
          />
        </div>

        <p>-----Or-----</p>

        <Input

          name="protein"
          onChange={this.handleIntegerInputChange}
          placeholder="Protein (g)"
        />

        <Input
          name="carbs"
          onChange={this.handleIntegerInputChange}
          placeholder="Carbohydrates (g)"
        />

        <Input

          name="fat"
          onChange={this.handleIntegerInputChange}
          placeholder="Fats (g)"
        />

        <Button
          onClick={this.submitForm}
          btncolor={'btn-success'}>
          Submit
        </Button>

        <Button
          btncolor={'btn-primary'}>
          Clear All Data
         </Button>


      </form>
    );
  }
}


export default UserForm;