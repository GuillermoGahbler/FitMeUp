import React, { Component } from "react";
import { Input, Button } from "./components";
import DatePicker from 'react-datepicker';
import API from "../../../../../utils/API";
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
    console.log(this.props.children)
    this.props.enterIntake(this.state)

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
          <p>Calories</p>
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