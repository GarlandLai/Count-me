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
		<div class="containerWrapper">
			<div class="container">
				<h1>
					<span class="first-word">Tool</span>
					<span class="last-word">Belt</span>
				</h1>
			</div>
		</div>
	);
};

export default Header;
