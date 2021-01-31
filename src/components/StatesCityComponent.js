import React from 'react';
import CityDataComponent from './CityDataComponent';
import Cities from '../states/StatesCity.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";

class StatesCityComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCityDataComponent: false,
            singleState: null,
            singleCity: null,
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
            <div>
                <div className="row" style={{ marginBottom: "10px" }}>
                    <div className="dropdown">
                        <button type="button" className="btn btn-warning dropdown-toggle" id="StateListButton" data-toggle="dropdown">
                            <FontAwesomeIcon icon={faStreetView} /> Select City
                        </button>
                        <div className="dropdown-menu" style={{maxHeight: "200px", overflowY: "auto"}}>
                            {Cities[this.props.value].map((City) => (
                                <a className="dropdown-item" onClick={() => this.showComponent(City, this.props.value)} key={City}> {City} </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.showCityDataComponent ?
                        <CityDataComponent key={this.state.singleCity} StateName={this.state.singleState} CityName={this.state.singleCity} hideStateData={this.props.hideStateData} /> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default StatesCityComponent;