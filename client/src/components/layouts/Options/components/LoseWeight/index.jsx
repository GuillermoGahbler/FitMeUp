import React from 'react';
import axios from 'axios';
import './loseWeight.css';


 
class LoseWeight extends React.Component {
formSubmit = event =>{
  event.preventDefault();
  const data = this.serializeForm(this.refs);
  console.log(data)
  axios.put(`http://localhost:3001${this.props.url}`, data)
  .then(res=>this.props.closeModal())
  .catch(err=>console.log(err))
}

serializeForm = refs =>{
  return Object.keys(refs).reduce((acc, cv)=>{
    return {...acc, [cv]:refs[cv].value}
  },{})
}

  render() {
     return (
    <div id="overlay" method = "POST">
      <form id="modal">
          <fieldset>
          <legend>Height</legend>
          <label>Feet</label>
          <input ref="height" type="number" min="3" max="9" />
          <label>Inches</label>
          <input ref="Inches" type="number" min="0" max="11" />

        </fieldset>

        <fieldset>  <legend>Weight</legend>
          <label>Weight (lbs)</label>
          <input ref="weight" type="number" min="70" max="700" />
        </fieldset>

        <fieldset>  <legend>Gender</legend>
          <label>Male</label>
          <input  ref="gender" type='radio' name="gender" value="male" />
          <label>Female</label>
          <input  type='radio' name="gender" value="female" />
        </fieldset>

        <fieldset>  <legend>Body Measurments</legend>
          <label>Body Fat %</label>
          <input type="number" min="1" max="100" />
          <h3>OR</h3>
          <label>Neck (inches)</label>
          <input type="number" min="0" max="100" />
          <label>Waste (inches)</label>
          <input type="number" min="0" max="100" />
          <label>Hips (Women Only) (inches)</label>
          <input type="number" min="0" max="100" />
        </fieldset>

        <button
          type="submit"
          className="btn btn-success"
          onClick={this.formSubmit}>
          submit
</button>

        <button className="btn btn-primary"
          onClick={this.props.closeModal}>
          cancel
</button>
      </form>
    </div>
  )
  }
}


export default LoseWeight;





