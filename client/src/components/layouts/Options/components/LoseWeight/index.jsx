import React from 'react';
import axios from 'axios';
import './loseWeight.css';



class LoseWeight extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gender : "",
      heightFt : 0,
      heightIn : 0,
      weight : 0,
      bodyFat : null,
      neck : 0,
      waist : 0,
      hip : 0,
    }
  }

  handleInputChange = event => {
    console.log("handleInputChange from LoseWeight");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  formSubmit = event => {
    event.preventDefault();
    const data = this.serializeForm(this.refs);
    data.height = parseInt(data.Feet) * 12 + parseInt(data.Inches);
    data.gender = this.state.gender;
    data.neck = this.state.neck;
    data.waist = this.state.waist;
    data.hip = this.state.hip;
    data.bodyFat = this.state.bodyFat;
    
    console.log(data);
    axios.put(`http://localhost:3001${this.props.url}`, data)
      .then(res => this.props.closeModal())
      .catch(err => console.log(err))
  }

  serializeForm = refs => {
    return Object.keys(refs).reduce((acc, cv) => {
      return { ...acc, [cv]: refs[cv].value }
    }, {})
  }

  render() {
    return (
      <div id="overlay" method="POST">
        <form id="modal">
          <fieldset>
            <legend>Height</legend>
            <label>Feet</label>
            <input ref="Feet" type="number" name="heightFt" min="3" max="9" onChange={this.handleInputChange}/>
            <label>Inches</label>
            <input ref="Inches" type="number" name="heightIn" min="0" max="11" onChange={this.handleInputChange}/>

          </fieldset>

          <fieldset>  <legend>Weight</legend>
            <label>Weight (lbs)</label>
            <input ref="weight" type="number" min="70" max="700" name="weight" onChange={this.handleInputChange} />
          </fieldset>

          <fieldset>  <legend>Gender</legend>
            <label>Male</label>
            <input ref="gender" type='radio' name="gender" value="male" onChange={this.handleInputChange}/>
            <label>Female</label>
            <input ref="gender" type='radio' name="gender" value="female" onChange={this.handleInputChange}/>
          </fieldset>

          <fieldset>  <legend>Body Measurements</legend>
            <label>Body Fat %</label>
            <input type="number" min="1" max="100" name="bodyFat" onChange={this.handleInputChange}/>
            <h3>OR</h3>
            <label>Neck (inches)</label>
            <input type="number" min="0" max="100" name="neck" onChange={this.handleInputChange}/>
            <label>Waist (inches)</label>
            <input type="number" min="0" max="100" name="waist" onChange={this.handleInputChange} />
            <label>Hips (Women Only) (inches)</label>
            <input type="number" min="0" max="100" name="hip" onChange={this.handleInputChange}/>
          </fieldset>

          <button
            type="submit"
            className="btn btn-success modalButton"
            onClick={this.formSubmit}>
            submit
</button>

          <button className="btn btn-primary modalButton"
            onClick={this.props.closeModal}>
            cancel
</button>
        </form>
      </div>
    )
  }
}


export default LoseWeight;





