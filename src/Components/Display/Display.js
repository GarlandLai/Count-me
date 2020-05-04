import React, { Component } from "react";
import styled from "styled-components";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";

const DislayContainer = styled.div`
  margin: 50px;
  background-color: grey;
  width: 100vw;
  height: 400px;
`;

const TextArea = styled.textarea`
  width: 60%;
  height: 200px;
`;

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    }
    this.inputCounter = this.inputCounter.bind(this)
  }

  inputCounter = () => {
    if (this.props.countBy === "Character") {
    return this.props.userInput.split("").length;
    }
    if (this.props.countBy === "Words") {
      const splitInput = this.props.userInput.split(" ");
      let newArray = [];
      splitInput.map(input => {
        if (input !== "") return newArray.push(input);
      })
      return newArray.length;
    }
    if (this.props.countBy === "Dates") {
      const start = this.state.startDate;
      const end = this.state.endDate;
      const isValid = end && start !== null;
      console.log(isValid)
      if (isValid === true) return moment.duration(end.diff(start)).asDays();
      return "0";
    }
  }
  render () {
  return (
    <DislayContainer>
      {this.props.countBy === "home" ? (
      <div>
      <h1>Please choose selection</h1>
      </div>) :
        (
        <div>
        <label>{this.props.countBy} Count: </label>
        <br />
        {this.props.countBy === "Dates" ?
      <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        /> :
      <TextArea onChange={this.props.change} value={this.props.userInput} />}
        <br />
        <input type="button" value="Clear" onClick={this.props.clicked}/>
        <p>Count = {this.inputCounter()}</p>
        </div>
        )}
      
    </DislayContainer>
  )
}
}

export default Display;