import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
	width: 60%;
	height: 200px;
`;

const Random = (props) => {
	console.log(props);
	return (
		<div>
			<TextArea onChange={props.change} value={props.value} />
			<br />
			<button
				type="button"
				onClick={() => console.log('need logic to send to App input')}
			>
				Choose Random
			</button>
			<button type="button" onClick={props.clicked}>
				Clear
			</button>
		</div>
	);
};
export default Random;
