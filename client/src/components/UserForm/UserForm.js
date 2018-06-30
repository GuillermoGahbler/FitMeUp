import React, { Component } from "react";
import { Input, FormBtn } from "../form";
import { Col, Row, Container } from "../../components/Grid";

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class UserForm extends Component {
    constructor (props) {
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

      submitForm(){
        console.log("submit form pressed")
      }
     
      render() {
        return (
          <Container>
             <Row> 
              <Col size="md-3">
                <form>
                  <DatePicker name="Date"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                  <p>Date</p>
                  <p>-----Enter-----</p>
                  <div>
                    <Input
                      onChange={this.handleChange}
                      name="Calories"
                      placeholder="Calories (required)"
                    />
                    <p>Calories</p>
                  </div>
                  
                  <p>-----Or-----</p>

                  <Input
                    onChange={this.handleChange}
                    name="Protein"
                    placeholder="Protein (g)"
                  />

                  <Input
                    onChange={this.handleChange}
                    name="Carbohydrates"
                    placeholder="Carbohydrates (g)"
                  />

                  <Input
                    onChange={this.handleChange}
                    name="Fats"
                    placeholder="Fats (g)"
                  />
                  
                  <FormBtn className="submit">Submit</FormBtn>

                  
                </form>
              </Col>              
             </Row>
             <Row>
              <Col size="md-3">
                <FormBtn className="btn btn-danger">Clear All Data</FormBtn>
              </Col>
             </Row>
          </Container> 
        );
      }   
}

/*
                  
                  
*/
export default UserForm;