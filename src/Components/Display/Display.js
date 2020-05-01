import React, { useState } from "react";
import styled from "styled-components";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

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

const Display = props => {
  const [startDate, setStart] = useState(null);
  const [endDate, setEnd] = useState(null);
  const [focusedInput, setFocus] = useState(null);

  const inputCounter = () => {
    if (props.countBy === "Character") {
    return props.userInput.split("").length;
    }
    if (props.countBy === "Words") {
      const splitInput = props.userInput.split(" ");
      let newArray = [];
      splitInput.map(input => {
        if (input !== "") return newArray.push(input);
      })
      return newArray.length;
    }
  }

  return (
    <DislayContainer>
      {props.countBy === "home" ? (
      <div>
      <h1>Please choose selection</h1>
      </div>) :
        (
        <div>
        <label>{props.countBy} Count: </label>
        <br />
        {props.countBy === "Dates" ?
        <DateRangePicker
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      /> :
      <TextArea onChange={props.change} value={props.userInput} />}
        <br />
        <input type="button" value="Clear" onClick={props.clicked}/>
        <p>Count = {inputCounter()}</p>
        </div>
        )}
      
    </DislayContainer>
  )
}

export default Display;