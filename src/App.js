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
      sortBy: "home"
    }
    this.handleClear = this.handleClear.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSortSelection = this.handleSortSelection.bind(this)
  }

  handleSortSelection = (selection) => {
    this.setState({
      input: "",
      sortBy: selection,
    })
  }

  handleClear = () => {
    this.setState({
      input: "",
      sortBy: this.state.sortBy
    })
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
      sortBy: this.state.sortBy
    })
  }

  render() {
  return (
    <div className="App">
      <Header />
      <AppContainer>
        <Navigation onSelect={this.handleSortSelection} sortBy={this.state.sortBy}/>
        <Display userInput={this.state.input} change={this.handleChange} clicked={this.handleClear} count={this.state.count} />
      </AppContainer>
    </div>
  );
  }
}

export default App;
