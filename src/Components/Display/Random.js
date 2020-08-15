import React, { useState } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
	width: 60%;
	height: 200px;
`;

const Random = (props) => {
	const { value, change } = props;
	const [isShowing, setShow] = useState('Press choose random');

	const pickRandom = (value) => {
		const removeWhiteSpaces = value.replace(/ /g, '');
		console.log('NOSpaces', removeWhiteSpaces);
		const splitByComma = removeWhiteSpaces.split(',');
		console.log('split', splitByComma);
		const cleanArray = splitByComma.forEach((item) => {
			debugger;
			if (item[0] !== '') return item;
		});
		console.log('cleanArray', cleanArray);
		// need to remove spaces
		return setShow(
			splitByComma[Math.floor(Math.random() * splitByComma.length)]
		);
	};

	// console.log('isShowing', isShowing);
	// console.log('value', value);
	return (
		<div>
			<TextArea onChange={change} value={value} />
			<br />
			<button type="button" id="random" onClick={() => pickRandom(value)}>
				Choose Random
			</button>
			<button type="button" onClick={props.clicked}>
				Clear
			</button>
			<p>Random Count: {isShowing}</p>
		</div>
	);
};
export default Random;
