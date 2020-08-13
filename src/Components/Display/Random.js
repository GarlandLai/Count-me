import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
	width: 60%;
	height: 200px;
`;

const Random = (props) => {
	const { value, change, randomPick } = props;

	// const pickRandom = () => {
	// 	const splitByComma = value.split(',');
	// 	console.log(splitByComma);
	// 	return splitByComma[Math.floor(Math.random() * splitByComma.length)];
	// };

	return (
		<div>
			<TextArea onChange={change} value={value} />
			<br />
			<button type="button" id="random" onClick={() => randomPick()}>
				Choose Random
			</button>
			<button type="button" onClick={props.clicked}>
				Clear
			</button>
		</div>
	);
};
export default Random;
