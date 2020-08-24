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
					<p className="first-word">Random</p>
					<p className="last-word">Tools</p>
				</h1>
			</div>
		</div>
	);
};

export default Header;
