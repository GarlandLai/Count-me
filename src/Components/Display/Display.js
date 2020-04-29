import React from "react";
import styled from "styled-components";

const DislayContainer = styled.div`
  margin: 50px;
  background-color: grey;
  width: 100vw;
  height: 400px;
`;

const Display = props => {
  console.log(props)
  return (
    <DislayContainer>
        <label>Letter Count:
          <textarea onChange={props.change} value={props.userInput} />
        </label>
        <input type="button" value="Clear" onClick={props.clicked}/>
        <p>Count = {props.userInput}</p>
    </DislayContainer>
  )
}

export default Display;