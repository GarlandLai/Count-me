import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  background-color: grey;
  width: 200px;
  height: 400px;
`;

const Navigation = () => {
  return (
    <NavContainer>
      <p>TEXT</p>
    </NavContainer>
  )
}

export default Navigation;