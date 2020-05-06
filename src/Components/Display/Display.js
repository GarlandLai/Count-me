import React, { Component } from "react";
import styled from "styled-components";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";
import Time from "./Time";

const DislayContainer = styled.div`
  margin: 50px;
  background-color: grey;
  width: 100vw;
  height: 500px;
`;

const TextArea = styled.textarea`
  width: 60%;
  height: 200px;
`;

const tableOfContent = (
  <div>
  <h1>Please choose selection</h1>
  <p>Characters: Count by all characters</p>
  <p>Words: Count by words</p>
  <p>Dates: Find days between two specified dates</p>
  <p>Time: Based on time output selected</p>
  </div>
);

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      finalTime: 0
    }
    this.inputCounter = this.inputCounter.bind(this)
    this.handleCountBySeletion = this.handleCountBySeletion.bind(this)
    this.handleTimeSubmission = this.handleTimeSubmission.bind(this)
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
      if (isValid === true) return moment.duration(end.diff(start)).asDays();
      return "0";
    }
    return this.state.finalTime;
  }

  handleTimeSubmission = (finalCount) => {
    console.log(finalCount)
    this.setState({finalTime: finalCount})
  }

  handleCountBySeletion = () => {
    if (this.props.countBy === "home" ) return tableOfContent;
    if (this.props.countBy === "Dates") {
      return(
        <DateRangePicker
        startDate={this.state.startDate} 
        startDateId="start_date_id" 
        endDate={this.state.endDate} 
        endDateId="end_date_id"
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
        readOnly={true}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    )
  }
    if (this.props.countBy === "Character" || this.props.countBy === "Words") {
      return (
        <div>
          <TextArea onChange={this.props.change} value={this.props.userInput}/>
          <br />
          <input type="button" value="Clear" onClick={this.props.clicked}/>
        </div>
      )
    }
    if (this.props.countBy === "Time" ) return <Time onTimeSubmission={this.handleTimeSubmission} />;
  }

  render () {
    console.log(this.state.finalTime)
  return (
    <DislayContainer>
      {this.handleCountBySeletion()}
      {this.props.countBy === "home" ? null :
      <p>Count = {this.inputCounter()}</p>}
    </DislayContainer>
  )
}
}

export default Display;