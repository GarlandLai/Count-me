import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
	text-align: center;
	margin: 5px 0px;
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
	const [selected, setSelect] = useState('Seconds');

	const handleChange = (e) => {
		e.persist();
		if (e.target.id === 'day') setDay(e.target.value);
		if (e.target.id === 'hour') setHour(e.target.value);
		if (e.target.id === 'minute') setMinute(e.target.value);
	};

	const handleSelect = (e) => {
		setSelect(e.target.value);
	};

	const countTimeInputInSeconds = () => {
		const day = dayInput * 86400;
		const hour = hourInput * 3600;
		const minute = minInput * 60;
		return day + hour + minute;
	};

	// Final count in seconds
	const finalCount = countTimeInputInSeconds();

	const handleDayClear = (e) => {
		if (e.target.id === 'day') setDay(0);
		if (e.target.id === 'hour') setHour(0);
		if (e.target.id === 'minute') setMinute(0);
	};

	const handleClearAll = () => {
		debugger;
		setDay(0);
		setHour(0);
		setMinute(0);
		// only clears on second click?
		// onTimeSubmission(finalCount, selected);
	};

	return (
		<div>
			<Input
				id="day"
				type="number"
				value={dayInput}
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<label>Days</label>
			<Button id="day" onClick={(e) => handleDayClear(e)}>
				Clear
			</Button>
			<br />

			<Input
				id="hour"
				type="number"
				value={hourInput}
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<label>Hours</label>
			<Button id="hour" onClick={(e) => handleDayClear(e)}>
				Clear
			</Button>
			<br />
			<Input
				id="minute"
				value={minInput}
				type="number"
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<label>Minutes</label>
			<Button id="minute" onClick={(e) => handleDayClear(e)}>
				Clear
			</Button>
			<br />
			<br />
			<Select id="selectBox" onChange={handleSelect} value={selected}>
				<option value="Seconds">Seconds</option>
				<option value="Minutes">Minutes</option>
				<option value="Hours">Hours</option>
				<option value="Days">Days</option>
			</Select>
			<Button onClick={() => onTimeSubmission(finalCount, selected)}>
				Submit
			</Button>
			{/* <Button type="button" id="all" onClick={() => handleClearAll()}>
				Clear all
			</Button> */}
		</div>
	);
};

export default Time;
