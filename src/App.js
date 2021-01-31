import React from 'react';
import StatesComponent from './components/StatesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

class App extends React.Component {  
  render() {
    return(
      <div>
      <HeaderComponent />
      <StatesComponent />
      <FooterComponent />
      </div>
    );
  }
}

export default App;