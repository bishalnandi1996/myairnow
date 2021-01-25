import React from 'react';
import Cities from '../states/StatesCity.json';

class StatesCityComponent extends React.Component {
    render() {
        return(
            <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" id="StateListButton" data-toggle="dropdown">
                    Select City
                </button>
                <div className="dropdown-menu">
                    {Cities[this.props.value].map((City) => (
                        <a className="dropdown-item" key={City}> {City} </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default StatesCityComponent;