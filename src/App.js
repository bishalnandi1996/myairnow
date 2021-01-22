import React, { Component } from 'react';
import StatesComponent from './components/StatesComponent';
import StatesDataComponent from './components/StatesDataComponent';

class App extends React.Component {  
  render() {
    return(
      <StatesComponent />,
      <StatesDataComponent />
    );
  }
}

export default App;