import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
	width: 60%;
	height: 200px;
`;

const Random = () => {
	return (
		<div>
			<TextArea />
			<br />
			<button onClick={() => console.log('choosing')}>Choose Random</button>
		</div>
	);
};
export default Random;
