import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Display from "./Components/Display/Display";
import styled from "styled-components";

const AppContainer = styled.section`
  display: flex;
`;

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppContainer>
        <Navigation />
        <Display />
      </AppContainer>
    </div>
  );
}

export default App;
