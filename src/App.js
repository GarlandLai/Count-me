import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './App.css';
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Display from "./Components/Display/Display";
import styled from "styled-components";

const AppContainer = styled.section`
  display: flex;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      countBy: "home",
      startDate: null,
      endDate: null,
    }
    this.handleClear = this.handleClear.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handlecountSelection = this.handlecountSelection.bind(this)
  }

  handlecountSelection = (selection) => {
    this.setState({
      input: "",
      countBy: selection,
    })
  }

  handleClear = () => {
    this.setState({
      input: "",
      countBy: this.state.countBy
    })
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
      countBy: this.state.countBy
    })
  }

  render() {
  return (
    <div className="App">
      <Header />
      <AppContainer>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <Navigation onSelect={this.handlecountSelection} countBy={this.state.countBy}/>
        <Display userInput={this.state.input} change={this.handleChange} clicked={this.handleClear} count={this.state.count} countBy={this.state.countBy}/>
      </AppContainer>
    </div>
  );
  }
}

export default App;
