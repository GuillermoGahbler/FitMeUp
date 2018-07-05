import React, { Component } from "react";
import { Input, Button } from "./components";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  submitForm() {
    console.log("submit form pressed")
  }

  handleCalorieChange= ()=>{
    this.setState(prevState=>{
      return{ ...prevState,calories:123}
    })
  }

  render() {
    return (
      <form>
        <DatePicker name="Date"
          selected={this.state.startDate}
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
          // onChange={this.handleChange}
          name="Protein"
          placeholder="Protein (g)"
        />

        <Input
          // onChange={this.handleChange}
          name="Carbohydrates"
          placeholder="Carbohydrates (g)"
        />

        <Input
          // onChange={this.handleChange}
          name="Fats"
          placeholder="Fats (g)"
        />

        <Button type='submit' btnColor = {'btn-success'}> Submit</Button>
        
        <Button type='submit' btnColor = {'btn-danger'}>Clear All Data</Button>


      </form>
    );
  }
}


export default UserForm;