import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Display from './Components/Display/Display';
import styled from 'styled-components';
import Numbers from '../src/images/Numbers.jpg';

const StyledDiv = styled.div`
	height: 100vh;
	background-image: url(${Numbers});
`;
const AppContainer = styled.section`
	display: flex;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			countBy: 'Time',
		};
		this.handleClear = this.handleClear.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handlecountSelection = this.handlecountSelection.bind(this);
	}

	handlecountSelection = (selection) => {
		this.setState({
			countBy: selection,
		});
	};

	handleClear = () => {
		console.log('App Clear');
		this.setState({
			input: '',
		});
	};

	handleChange = (event) => {
		this.setState({
			input: event.target.value,
		});
	};

	render() {
		console.log(this.state.input);
		return (
			<StyledDiv className="App">
				<Header />
				<AppContainer>
					<Navigation
						onSelect={this.handlecountSelection}
						countBy={this.state.countBy}
					/>
					<Display
						userInput={this.state.input}
						change={this.handleChange}
						clicked={this.handleClear}
						count={this.state.count}
						countBy={this.state.countBy}
					/>
				</AppContainer>
			</StyledDiv>
		);
	}
}

export default App;
