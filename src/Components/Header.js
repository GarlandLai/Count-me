import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div``;

const StyledHeader = styled.div`
	color: black;
	font-size: 70px;
	font-weight: 700;
	padding: 50px 0;
	height: 200px;
	width: 100vw;
	background-color: grey;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<StyledHeader>All Things Counting</StyledHeader>
		</HeaderContainer>
	);
};

export default Header;
