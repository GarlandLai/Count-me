import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
	margin-top: 50px;
	margin-left: 50px;

	width: 200px;
	height: 400px;

	button:hover {
		background-color: #a9a9a9;
		margin: 5px;
	}
`;

const StyledTab = styled.button`
	font-size: 20px;
	font-weight: 700;
	width: 200px;
	height: 75px;
	margin: 5px 0;
	background-color: grey;
`;

const Navigation = (props) => {
	return (
		<NavContainer>
			<StyledTab id="home" onClick={() => props.onSelect('Home')}>
				Home
			</StyledTab>
			<StyledTab id="characters" onClick={() => props.onSelect('Characters')}>
				Characters
			</StyledTab>
			<StyledTab id="words" onClick={() => props.onSelect('Words')}>
				Words
			</StyledTab>
			<StyledTab id="dates" onClick={() => props.onSelect('Dates')}>
				Dates
			</StyledTab>
			<StyledTab id="time" onClick={() => props.onSelect('Time')}>
				Time
			</StyledTab>
			<StyledTab id="random" onClick={() => props.onSelect('Random')}>
				Random
			</StyledTab>
		</NavContainer>
	);
};

export default Navigation;
