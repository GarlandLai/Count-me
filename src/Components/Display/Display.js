import React, { Component } from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import Time from './Time';
import Random from './Random';

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
			selected: 'Seconds',
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
		if (this.props.countBy === 'Random') {
			return 'Random choice';
		}
	};

	updatedFinalCount = (seconds, selected) => {
		const minutes = seconds / 60;
		const hours = seconds / 3600;
		const days = seconds / 86400;
		if (selected === 'Seconds') return seconds;
		if (selected === 'Minutes') return minutes;
		if (selected === 'Hours') return hours.toFixed(2);
		if (selected === 'Days') return days.toFixed(2);
	};

	handleTimeSubmission = (finalCount, selected) => {
		const updatedCount = this.updatedFinalCount(finalCount, selected);
		this.setState({ finalTime: updatedCount });
		this.setState({ selected: selected });
	};

	handleCountBySeletion = () => {
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
		if (this.props.countBy === 'Random')
			return (
				<Random
					clicked={this.props.clicked}
					change={this.props.change}
					value={this.props.userInput}
				/>
			);
	};

	selectedCountType = () => {
		if (this.props.countBy === 'Time') return this.state.selected;
		if (this.props.countBy === 'Dates') return 'Days';
		if (this.props.countBy === 'Random') return '';
		else return this.props.countBy;
	};

	render() {
		return (
			<DislayContainer>
				{this.handleCountBySeletion()}
				{this.props.countBy === 'Home' ? null : (
					<p>Count = {this.inputCounter() + ' ' + this.selectedCountType()}</p>
				)}
			</DislayContainer>
		);
	}
}

export default Display;
