import React from 'react';
import styled from 'styled-components';
import '../header.css';

// const HeaderContainer = styled.div``;

// const StyledHeader = styled.div`
// 	color: black;
// 	font-size: 70px;
// 	font-weight: 700;
// 	padding: 50px 0;
// 	height: 200px;
// 	width: 100vw;
// 	background-color: grey;
// `;

const Header = () => {
	return (
		<div className="containerWrapper">
			<div className="container">
				<h1>
					<span className="first-word">Random</span>{' '}
					<span className="last-word">Tools</span>
				</h1>
			</div>
		</div>
	);
};

export default Header;
