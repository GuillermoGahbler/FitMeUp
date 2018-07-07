import React, { Component } from "react";
import { Input, Button } from "./components";
import DatePicker from 'react-datepicker';
import API from "../../../../../utils/API";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      Protein : 0,
      Carbohydrates : 0,
      Fats: 0,
      Calories : 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange = event => {
    console.log("handleInputChange");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  submitForm(event) {
    event.preventDefault();
    console.log("submit form pressed");
    if(this.state.calories){
      console.log("calling API.createDayData");
      API.createDayData( {
        Calories : this.state.Calories
      }).then(res => console.log(res));
    }
    else if (this.state.Carbohydrates && this.state.Protein && this.state.Fats) {
      console.log("calling API.calculateCalories");
      API.calculateCalories({
        carbs : this.state.Carbohydrates,
        protein : this.state.Protein,
        fats : this.state.Fats
      }).then(res => console.log(res));
    }
    
//    API.getAccounts().then( res => console.log(res));
  }

  handleCalorieChange= ()=>{
    console.log("this.handleCalorieChange");
    API.getAccounts().then( res => console.log(res));
    this.setState(prevState=>{
      return{ ...prevState,calories:123}
    })
  }

  render() {
    return (
      <form>
        <DatePicker name="Date"
          selected={moment(this.state.startDate)}
          onChange={this.handleChange}
        />
        <p>Date</p>
        <p>-----Enter-----</p>
        <div>
          <Input
            onChange={this.handleCalorieChange}
            name="Calories"
            placeholder="Calories (required)"
          />
          <p>Calories</p>
        </div>

        <p>-----Or-----</p>

        <Input
          onChange={this.handleInputChange}
          name="Protein"
          placeholder="Protein (g)"
        />

        <Input
          onChange={this.handleInputChange}
          name="Carbohydrates"
          placeholder="Carbohydrates (g)"
        />

        <Input
          onChange={this.handleInputChange}
          name="Fats"
          placeholder="Fats (g)"
        />

        <Button type='submit' onClick={this.submitForm} btncolor={'btn-success'}> Submit</Button>
        
        <Button type='submit' btncolor={'btn-danger'}>Clear All Data</Button>


      </form>
    );
  }
}


export default UserForm;