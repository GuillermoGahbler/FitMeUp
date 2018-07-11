import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import 'react-dropdown/style.css'
import { Input, Button } from "./components";
import API from "../../../../../utils/API";
import moment from 'moment';

const feetOptions =[4,5,6,7,8];
const inchesOptions = [0,1,2,3,4,5,6,7,8,9,10,11];

class UpdateProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender : "",
      feet : 0,
      inches : 0,
      bodyFat : 0,
      neck : 0,
      waist : 0,
      hips : 0
    };

    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange = event => {
    //event.preventDefault();
    console.log("handleInputChange");
    console.log(event.target);
    /*const { name, value } = event.target;
    this.setState({
      [name]: value
    });*/
  };

  submitForm(event) {
    event.preventDefault();
    console.log("submit Form");
    const formattedDate = moment(this.state.startDate).format("MM-DD-YYYY");
    if(this.state.calories){
      console.log("calling API.createDayData");
      API.createDayData( {
        date: formattedDate,
        calories : this.state.calories
      }).then(res => console.log(res));
    }
    else if (this.state.Carbohydrates && this.state.Protein && this.state.Fats) {
      console.log("calling API.calculateCalories");
      API.calculateCalories({
        date: formattedDate,
        carbs : this.state.Carbohydrates,
        protein : this.state.Protein,
        fats : this.state.Fats
      }).then(res => console.log(res));
    }

  }

  render() {
    return (
      <form>
        <p> Height </p>
        Feet: <Dropdown
          options={feetOptions}
          onChange={this.handleInputChange}
          name="Feet" 
          placeholder="Select your height in Ft"
        />

        Inches: <Dropdown
          options={inchesOptions}
          onChange={this.handleInputChange}
          name="Inches" 
          placeholder="Select your height in Inches"
        />

        Gender: <RadioGroup onChange={this.handleInputChange} horizontal>
          <RadioButton value="male">
            Male
          </RadioButton>
          <RadioButton value="female">
            Female
          </RadioButton>
        </RadioGroup>        

        Body Fat: 
        <Input
          onChange={this.handleInputChange}
          name="bodyFat"
          placeholder="Body Fat %"
        />

        <p> ----- OR ------ </p>

        Neck (inches):
        <Input
          onChange={this.handleInputChange}
          name="neck"
          placeholder="Neck (inches) "
        />

        Waist (inches):
        <Input
          onChange={this.handleInputChange}
          name="waist"
          placeholder="Waist (inches)"
        />

        Hips (Inches - women only)
        <Input
          onChange={this.handleInputChange}
          name="hips"
          placeholder="Hips (inches)"
        />

        <Button type='submit' onClick={this.submitForm} btncolor={'btn-success'}> Submit</Button>
        

      </form>
    );
  }
}


export default UpdateProfile;