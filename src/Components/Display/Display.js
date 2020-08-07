import React, { Component } from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import Time from './Time';

const DislayContainer = styled.div`
	margin: 50px;
	background-color: grey;
	width: 100vw;
	height: 500px;
	padding-top: 100px;
`;

const TextArea = styled.textarea`
	width: 60%;
	height: 200px;
`;

const tableOfContent = (
	<div>
		<h1>Please make a selection! Count by:</h1>
		<h3>Characters: Count by all characters</h3>
		<h3>Words: Count by words</h3>
		<h3>Dates: Find days between two specified dates</h3>
		<h3>Time: Based on time output selected</h3>
	</div>
);

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: null,
			endDate: null,
			focusedInput: null,
			finalTime: 0,
		};
		this.inputCounter = this.inputCounter.bind(this);
		this.handleCountBySeletion = this.handleCountBySeletion.bind(this);
		this.handleTimeSubmission = this.handleTimeSubmission.bind(this);
	}

	inputCounter = () => {
		if (this.props.countBy === 'Character') {
			return this.props.userInput.split('').length;
		}
		if (this.props.countBy === 'Words') {
			const splitInput = this.props.userInput.split(' ');
			let newArray = [];
			splitInput.map((input) => {
				if (input !== '') return newArray.push(input);
			});
			return newArray.length;
		}
		if (this.props.countBy === 'Dates') {
			const start = this.state.startDate;
			const end = this.state.endDate;
			const isValid = end && start !== null;
			if (isValid === true) return moment.duration(end.diff(start)).asDays();
			return '0';
		}
		// return this.state.finalTime;
		if (this.props.countBy === 'Time') {
			return this.state.finalTime;
		}
	};

	updatedFinalCount = (seconds, selected) => {
		const minutes = seconds / 60;
		const hours = seconds / 3600;
		const days = seconds / 86400;
		if (selected === 'Seconds') return seconds;
		if (selected === 'Minutes') return minutes;
		if (selected === 'Hours') return hours;
		if (selected === 'Days') return days.toFixed(2);
	};

	handleTimeSubmission = (finalCount, selected) => {
		console.log('final', finalCount);
		console.log('selected', selected);
		const updatedCount = this.updatedFinalCount(finalCount, selected);
		console.log(updatedCount);
		this.setState({ finalTime: updatedCount });
	};

	handleCountBySeletion = () => {
		console.log(this.props.countBy);
		if (this.props.countBy === 'Home') return tableOfContent;
		if (this.props.countBy === 'Dates') {
			return (
				<DateRangePicker
					startDate={this.state.startDate}
					startDateId="start_date_id"
					endDate={this.state.endDate}
					endDateId="end_date_id"
					onDatesChange={({ startDate, endDate }) =>
						this.setState({ startDate, endDate })
					}
					focusedInput={this.state.focusedInput}
					onFocusChange={(focusedInput) => this.setState({ focusedInput })}
					readOnly={true}
					isOutsideRange={() => false}
					showClearDates={true}
				/>
			);
		}
		if (this.props.countBy === 'Character' || this.props.countBy === 'Words') {
			return (
				<div>
					<TextArea onChange={this.props.change} value={this.props.userInput} />
					<br />
					<button type="button" onClick={this.props.clicked}>
						Clear
					</button>
				</div>
			);
		}
		if (this.props.countBy === 'Time')
			return <Time onTimeSubmission={this.handleTimeSubmission} />;
	};

	render() {
		return (
			<DislayContainer>
				{this.handleCountBySeletion()}
				{this.props.countBy === 'Home' ? null : (
					<p>Count = {this.inputCounter()}</p>
				)}
			</DislayContainer>
		);
	}
}

export default Display;
