import React, { Component } from 'react';
import './Temperature.css';
import { Button,Form} from 'react-bootstrap';
import Select from 'react-select';
var tuc = require('temp-units-conv');

const temmps = {
  TEMP_ONE : 459.67,
  TEMP_TWO :273.15,
  TEMP_THREE : 32,
  CONST_ONE : 1.8
}

class Temperature extends Component {

    constructor(props) {
        super(props);

        this.state = {
            TargetUnits: '',
            StudentResponse: '',
            selectedOption: null,
            isDisabled:true,
            options : [
              {value: '1', label: 'kelvin To Celsius'},
              {value: '2', label: 'Kelvin To Fahrenheit'},
              {value: '3', label: 'Kelvin To Rankine'},
              {value: '4', label: 'Celsius To Kelvin'},
              {value: '5', label: 'Celsius To Fahrenheit'},
              {value: '6', label: 'Celsius To Rankine'},
              {value: '7', label: 'Fahrenheit To Kelvin'},
              {value: '8', label: 'Fahrenheit To Rankine'},
              {value: '9', label: 'Fahrenheit To Celsius'},
              {value: '10', label: 'Rankine To Kelvin'},
              {value: '11', label: 'Rankine To Fahrenheit'},
              {value: '12', label: 'Rankine To Celsius'},
            ]
            
         };

        this.handleChangeTargetUnits = this.handleChangeTargetUnits.bind(this);
        this.handleChangeStudentResponse = this.handleChangeStudentResponse.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      /**
       * Handle user target input
       * @param {*} event 
       */
      handleChangeTargetUnits(event) {
        this.setState({TargetUnits: event.target.value });
    }
    /**
     * Handle user responce input 
     * @param {*} event 
     */

      handleChangeStudentResponse(event) {
        this.setState({StudentResponse: event.target.value});
      }

      /**
       * Handle user selection options
       */
      handleChangeSelection = (selectedOption) => {
        this.setState({ selectedOption });
        this.setState({ isDisabled: false });
      }

      /**
       * Process final result 
       * @param {*} calcTemp 
       */

      handleDisplay(calcTemp) {
        alert( (Math.abs(calcTemp - this.state.StudentResponse) <= 0.6) ? "Correct!" : "Incorrect!");
      }
      
      /**
       * Convert kelvin to rankine
       * @param {*} kelvin 
       */

      k2r(kelvin) {
        return  Math.round( ((parseFloat(kelvin) * temmps.CONST_ONE)) * 100.0) /100.0;
        
       }

       /**
        * COnvert celsius to rankine
        * @param {*} celsius 
        */
       c2r(celsius) {
        return  Math.round( ((parseFloat(celsius) * temmps.CONST_ONE ) +  491.67) * 100.0) /100.0;
       }

       /**
        * Convert fahrenheit rankine
        * @param {*} fahrenheit 
        */
       f2r(fahrenheit) {
          return Math.round((parseFloat(fahrenheit) + temmps.TEMP_ONE) * 100.0) /100.0;
      }
      /**
       * Convert rankine fahrenheit
       * @param {*} rankine 
       */
  
      r2f(rankine) {
        return Math.round((parseFloat(rankine)  - temmps.TEMP_ONE) * 100.0) /100.0;	
      }
      
      /**
       * Convert rankine celsius
       * @param {*} rankine 
       */
      r2c(rankine) {	
          return Math.round(((parseFloat(rankine))  - 491.67) * 5/9 * 100.0) /100.0;			
        }
      /**
       * Convert rankine kelvin
       * @param {*} rankine 
       */
      r2k(rankine) {
          return  Math.round(((parseFloat(rankine)) *  5/9) * 100.0) /100.0;
        }

        
      handleSubmit(event) {
        switch(this.state.selectedOption.value) {
            case '1':
               this.handleDisplay(tuc.k2c(this.state.TargetUnits));
               break;
            case '2':
                this.handleDisplay(tuc.k2f(this.state.TargetUnits));
                break;
            case '3':
                this.handleDisplay(this.k2r(this.state.TargetUnits)); 
                break;
            case '4':
                this.handleDisplay(tuc.c2k(this.state.TargetUnits));
                break;
            case '5':
                this.handleDisplay(tuc.c2f(this.state.TargetUnits));
                break;
            case '6':
               this.handleDisplay(this.c2r(this.state.TargetUnits));
               break;
            case '7':
                this.handleDisplay(tuc.f2k(this.state.TargetUnits));
               break;
            case'8':
                this.handleDisplay(this.f2r(this.state.TargetUnits)); // fail
                break;
            case '9':
               this.handleDisplay(tuc.f2c(this.state.TargetUnits));
               break;
            case '10':
                this.handleDisplay(this.r2k(this.state.TargetUnits));//pass
                break;
            case '11':
                this.handleDisplay(this.r2f(this.state.TargetUnits)); // pass
                break;
            case '12':
                 this.handleDisplay(this.r2c(this.state.TargetUnits));//fail
                 break;
             default:
                alert("Invalid");
        }
      }

  render() {
    return (
      <div id="container"  className="Temperature">
    <Form onSubmit={this.handleSubmit} >
    <h4>Temperature Conversion Options </h4>
       <Select   
        value={this.state.selectedOption}
        onChange={this.handleChangeSelection}
        options={this.state.options}
         /> 
       <hr></hr>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="number"  step="0.01" value={this.state.value} onChange={this.handleChangeTargetUnits} placeholder="Target Units" required />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Control type="number" step="0.01" value={this.state.value} onChange={this.handleChangeStudentResponse}  name="student_response" placeholder="Student Response" required/>
        </Form.Group>
        <hr></hr>
        <Button  disabled={this.state.isDisabled} variant="success" type="submit"> Submit</Button>
        </Form>;
      </div>
    );
  }
}

export default Temperature;

