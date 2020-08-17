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
		const splitByComma = removeWhiteSpaces.split(',');
		let cleanArray = [];
		splitByComma.forEach((item) => {
			if (item[0] !== undefined) return cleanArray.push(item);
		});
		return setShow(cleanArray[Math.floor(Math.random() * cleanArray.length)]);
	};

	const clearAll = () => {
		props.clicked();
		setShow('Press choose random');
	};

	return (
		<div>
			<TextArea onChange={change} value={value} />
			<br />
			<button type="button" id="random" onClick={() => pickRandom(value)}>
				Choose Random
			</button>
			<button type="button" onClick={() => clearAll()}>
				Clear
			</button>
			<p>Random Count: {isShowing}</p>
		</div>
	);
};
export default Random;
