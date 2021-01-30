import React from 'react';
import States from '../states/States.json';
import StatesDataComponent from './StatesDataComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

class StatesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showStatesDataComponent: false,
            singleState: null
        };
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(singleStateName) {
        this.setState({
            showStatesDataComponent: true,
            singleState: singleStateName.split(' ').join('_')
        });
        document.getElementById("StateListButton").innerHTML = singleStateName;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="dropdown">
                            <button type="button" className="btn btn-info dropdown-toggle" id="StateListButton" data-toggle="dropdown">
                            <FontAwesomeIcon icon={faSearchLocation} /> Select State
                            </button>
                            <div className="dropdown-menu" style={{maxHeight: "200px", overflowY: "auto"}}>
                                {States.map((singleState) => (
                                    <a className="dropdown-item" onClick={() => this.showComponent(singleState.name)} key={singleState.key}> {singleState.name} </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                    {this.state.showStatesDataComponent ?
                        <StatesDataComponent key={this.state.singleState} value={this.state.singleState} /> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default StatesComponent;