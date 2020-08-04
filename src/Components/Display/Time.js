import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
	text-align: center;
`;

const Select = styled.select`
	padding: 5px;
	margin: 5px;
`;

const Button = styled.button`
	padding: 3px;
	margin: 5px;
`;

const Time = (props) => {
	const { onTimeSubmission } = props;
	const [dayInput, setDay] = useState(0);
	const [hourInput, setHour] = useState(0);
	const [minInput, setMinute] = useState(0);
	const [selected, setSelect] = useState('');

	const handleChange = (e) => {
		e.persist();
		if (e.target.id === 'day') setDay(e.target.value);
		if (e.target.id === 'hour') setHour(e.target.value);
		if (e.target.id === 'minute') setMinute(e.target.value);
	};

	const handleSelect = (e) => {
		setSelect(e.target.value);
	};

	const countTimeInput = () => {
		const day = dayInput * 86400;
		const hour = hourInput * 3600;
		const minute = minInput * 60;
		return day + hour + minute;
	};

	// Final count in seconds
	const finalCount = countTimeInput();

	return (
		<div>
			<Input
				placeholder="Days"
				id="day"
				type="number"
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<Input
				placeholder="Hours"
				id="hour"
				type="number"
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<Input
				placeholder="Minutes"
				id="minute"
				type="number"
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<Select id="selectBox" onChange={handleSelect} value={selected}>
				<option value="">Select</option>
				<option value="Days">Days</option>
				<option value="Hours">Hours</option>
				<option value="Minutes">Minutes</option>
				<option value="Seconds">Seconds</option>
			</Select>
			<Button onClick={() => onTimeSubmission(finalCount)}>Submit</Button>
			<p>{selected}</p>
		</div>
	);
};

export default Time;
