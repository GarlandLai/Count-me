import React from "react";
import styled from "styled-components";

const CharacterContainer = styled.div`
  margin: 50px;
  background-color: grey;
  width: 100vw;
  height: 400px;
`;

const Characters = () => {
  return (
    <CharacterContainer>
      <p>Characters</p>
    </CharacterContainer>
  )
}

export default Characters;