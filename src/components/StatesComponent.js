import React, { Component } from 'react';
import States from '../states/States.json';
import StatesDataComponent from './StatesDataComponent';

class StatesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showStateDataComponent: false,
            singleState: null
        };
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(singleStateName) {
        this.setState({
            showStateDataComponent: true,
            singleState: singleStateName.split(' ').join('_')
        });
    }

    render() {
        function showState(x) {
            alert(x);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="dropdown">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            Select State
                        </button>
                        <div className="dropdown-menu">
                            {States.map((singleState) => (
                                <a className="dropdown-item" onClick={() => this.showComponent(singleState.name)} key={singleState.key}> {singleState.name} </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.state.showStateDataComponent ?
                        <StatesDataComponent key={this.state.singleState} value={this.state.singleState} /> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default StatesComponent;