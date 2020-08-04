import React, { useState } from 'react';

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

	// Final count in seconds.
	const finalCount = countTimeInput();

	return (
		<div>
			<label> Days:</label>
			<input id="day" type="number" onChange={(e) => handleChange(e)} />
			<br />
			<label>Hours:</label>
			<input id="hour" type="number" onChange={(e) => handleChange(e)} />
			<br />
			<label>Minutes: </label>
			<input id="minute" type="number" onChange={(e) => handleChange(e)} />
			<br />
			<select id="selectBox" onChange={handleSelect} value={selected}>
				<option value="">Select</option>
				<option value="Days">Days</option>
				<option value="Hours">Hours</option>
				<option value="Minutes">Minutes</option>
				<option value="Seconds">Seconds</option>
			</select>
			<button onClick={() => onTimeSubmission(finalCount)}>Submit</button>
			<p>{selected}</p>
		</div>
	);
};

export default Time;
