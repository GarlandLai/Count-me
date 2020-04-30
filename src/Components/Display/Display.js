import React from "react";
import styled from "styled-components";

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
  const inputCounter = () => {
    if (props.countBy === "Character") {
    return props.userInput.split("").length;
    }
    if (props.countBy === "Words") {
      return props.userInput.split(" ").length;
      }
    return props.userInput.split(" ").length;
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
        <TextArea onChange={props.change} value={props.userInput} />
        <br />
        <input type="button" value="Clear" onClick={props.clicked}/>
        <p>Count = {inputCounter()}</p>
        </div>
        )}
    </DislayContainer>
  )
}

export default Display;