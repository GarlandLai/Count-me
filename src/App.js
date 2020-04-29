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
      input: ""
    }
    this.handleClear = this.handleClear.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClear = () => {
    this.setState({
      input: ""
    })
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
  return (
    <div className="App">
      <Header />
      <AppContainer>
        <Navigation />
        <Display userInput={this.state.input} change={this.handleChange} clicked={this.handleClear}/>
      </AppContainer>
    </div>
  );
  }
}

export default App;
