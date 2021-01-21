import React, { Component } from 'react';
import States from '../states/States.json';

class StatesComponent extends React.Component {
    render() {
        function showState(x) {
            alert(x);
        }
        return (
            <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    Select State
                </button>
                <div className="dropdown-menu">
                    {States.map((singleState) => (
                        <a className="dropdown-item" onClick={() => showState(singleState.name)} key={singleState.key}> {singleState.name} </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default StatesComponent;