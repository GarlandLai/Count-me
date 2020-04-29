import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Characters from "./Components/Characters/Characters";
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
        <Characters />
      </AppContainer>
    </div>
  );
}

export default App;
