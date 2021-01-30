import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";

class CityDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            records: [],
            stateName: this.props.StateName,
            cityName: this.props.CityName
        };
    }

    componentDidMount() {
        this.props.hideStateData();
        fetch("https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd0000010ccfac0459084d696ac6bee8b8d1cd1b&format=json&offset=0&limit=all&filters[state]=" + this.state.stateName + "&filters[city]=" + this.state.cityName)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    records: result.records
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, records } = this.state;
        if(error) {
            return <div>Error: {error.message}</div>
        } else if(!isLoaded) {
            return <div className="row">
                    <div className="col-sm-12 text-success" style={{ fontWeight: "bold" }}>Loading......</div>
                </div>;
        } else if(!this.state.records.length){
            return (
                <div className="row">
                    <div className="h2 col-sm-5" style={{textTransform: "uppercase", fontWeight: "bold", textShadow: "-4px 2px 3px #a2a6a4"}}> <FontAwesomeIcon icon={faSearchLocation} /> {this.state.stateName.split('_').join(' ')} </div>
                    <div className="h2 col-sm-5" style={{textTransform: "uppercase", fontWeight: "bold", textShadow: "-4px 2px 3px #a2a6a4"}}> <FontAwesomeIcon icon={faStreetView} /> {this.state.cityName.split('_').join(' ')} </div>
                    <div className="col-sm-12 h4 text-danger">Sorry!! No data available at this moment</div>
                </div>
            );
        } else  {
            return (
                <div>
                    <div className="row">
                        <div className="h2 col-sm-5" style={{textTransform: "uppercase", fontWeight: "bold", textShadow: "-4px 2px 3px #a2a6a4"}}> <FontAwesomeIcon icon={faSearchLocation} /> {this.state.stateName.split('_').join(' ')} </div>
                        <div className="h2 col-sm-5" style={{textTransform: "uppercase", fontWeight: "bold", textShadow: "-4px 2px 3px #a2a6a4"}}> <FontAwesomeIcon icon={faStreetView} /> {this.state.cityName.split('_').join(' ')} </div>
                    </div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>STATION</th>
                                <th>LAST UPDATED</th>
                                <th>POLLUTANT</th>
                                <th>MAX VALUE</th>
                                <th>MIN VALUE</th>
                                <th>AVG VALUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map(record => (
                                <tr key={record.id}>
                                    <td>{record.station}</td>
                                    <td>{record.last_update}</td>
                                    <td>{record.pollutant_id}</td>
                                    <td>{record.pollutant_min}</td>
                                    <td>{record.pollutant_max}</td>
                                    <td>{record.pollutant_avg}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default CityDataComponent;