import React, {Component} from 'react';
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
      countBy: "home"
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
        <Navigation onSelect={this.handlecountSelection} countBy={this.state.countBy}/>
        <Display userInput={this.state.input} change={this.handleChange} clicked={this.handleClear} count={this.state.count} countBy={this.state.countBy}/>
      </AppContainer>
    </div>
  );
  }
}

export default App;
