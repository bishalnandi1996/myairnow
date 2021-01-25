import React, { Component } from 'react';
import StatesComponent from './StatesComponent';
import StatesDataComponent from './StatesDataComponent';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showStateDataComponent: false
        };
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent() {
        this.setState({
            showStateDataComponent: true
        });
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <StatesComponent />
                </div>
                <div class="row">
                    <button type="button" className="btn btn-primary" onClick={this.showComponent}>Click</button>
                </div>
                <div className="row">
                    {this.state.showStateDataComponent ?
                        <StatesDataComponent /> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default MainComponent;