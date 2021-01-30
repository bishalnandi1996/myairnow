import React from 'react';
import StatesComponent from './components/StatesComponent';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends React.Component {  
  render() {
    return(
      <StatesComponent />
      //<FontAwesomeIcon icon={faHome} />
    );
  }
}

export default App;