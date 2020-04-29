import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
`;

const StyledHeader = styled.div`
  color: white;
  background-color: grey;
  font-size: 24px;
  height: 100px;
  width: 100vw;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader>All Things Counting!</StyledHeader>
    </HeaderContainer>
  )
}

export default Header;