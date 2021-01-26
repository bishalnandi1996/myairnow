import React from 'react';
import CityDataComponent from './CityDataComponent';
import Cities from '../states/StatesCity.json';

class StatesCityComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCityDataComponent: false,
            singleState: null,
            singleCity: null
        };
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(city, SingleState) {
        this.setState({
            showCityDataComponent: true,
            singleState: SingleState,
            singleCity: city.split(' ').join('_')
        });
    }

    render() {
        return(
            <div className="row">
                <div className="row">
                <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" id="StateListButton" data-toggle="dropdown">
                        Select City
                    </button>
                    <div className="dropdown-menu">
                        {Cities[this.props.value].map((City) => (
                            <a className="dropdown-item" onClick={() => this.showComponent(City, this.props.value)} key={City}> {City} </a>
                        ))}
                    </div>
                </div>
                </div>
                <div className="row">
                    {this.state.showCityDataComponent ?
                        <CityDataComponent key={this.state.singleCity} StateName={this.state.singleState} CityName={this.state.singleCity} /> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default StatesCityComponent;