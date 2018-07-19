import React from 'react';
import './loseWeight.css';



class LoseWeight extends React.Component {

  state = {
    weight:'',
    feet:'',
    inches:'',
    gender:'',
    bodyFat:'',
    neck:'',
    waist:'',
    hip:''

  }


  formSubmit = event => {
    event.preventDefault();
    this.props.updateUserStats(this.state)
    this.props.closeModal()

  }

  handleInputChange = (event) => {
    const name = event.currentTarget.getAttribute('name');
    const value = event.currentTarget.value;
    this.setState(prevState=>{
      return {...prevState,[name]:value}
    })
  }

  
  render() {
    
    const showFemale = () =>{
      return (
        <span>
           <label>Hips (Women Only) (inches)</label>
            <input name="hip" type="number" min="0" max="100" onChange = {this.handleInputChange} />
        </span>
      )
    }

    return (
      <div id="overlay">
        <form id="modal">
          <fieldset>
            <legend>Height</legend>
            <label>Feet</label>
            <input name="feet" type="number" min="3" max="9" onChange = {this.handleInputChange} />
            <label>Inches</label>
            <input name="inches" type="number" min="0" max="11" onChange = {this.handleInputChange} />

          </fieldset>

          <fieldset>  <legend>Weight</legend>
            <label>Weight (lbs)</label>
            <input name="weight" type="number" min="70" max="700" onChange = {this.handleInputChange}/>
          </fieldset>

          <fieldset>  <legend>Gender</legend>
            <label>Male</label>
            <input name="gender" type='radio' name="gender" value="male" onChange = {this.handleInputChange} />
            <label>Female</label>
            <input name="gender" type='radio' name="gender" value="female" onChange = {this.handleInputChange} />
          </fieldset>

          <fieldset>  <legend>Body Measurements</legend>
            <label>Body Fat %</label>
            <input name="bodyFat" type="number" min="1" max="100" onChange = {this.handleInputChange} />
            <h3>OR</h3>
            <label>Neck (inches)</label>
            <input name="neck" type="number" min="0" max="100" onChange = {this.handleInputChange} />
            <label>Waist (inches)</label>
            <input name="waist" type="number" min="0" max="100" onChange = {this.handleInputChange} />
           
            {this.state.gender === 'female' && showFemale()}
          </fieldset>

          <fieldset>
            <label> Lose weight</label>
            <input type='radio' name='goal' value='lose'
            onChange = {this.handleInputChange}
            />
            <label> Gain weight</label>
            <input type='radio' name='goal' value='gain'
            onChange = {this.handleInputChange}
            />
            <label>Maintain</label>
            <input type='radio' name='goal' value='maintain'
            onChange = {this.handleInputChange}
            />
          </fieldset>  

          <button
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





