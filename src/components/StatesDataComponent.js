import React from 'react';
import StatesCityComponent from './StatesCityComponent';

class StatesDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            records: [],
            stateName: this.props.value
        };
    }

    componentDidMount() {
        fetch("https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd0000010ccfac0459084d696ac6bee8b8d1cd1b&format=json&offset=0&limit=all&filters[state]=" + this.state.stateName)
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
        } else  {
            return (
                <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <StatesCityComponent key={this.state.stateName} value={this.state.stateName} />
                        </div>
                    </div>
                    <div className="row">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>CITY</th>
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
                                        <td>{record.city}</td>
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
                    
                </div>
            );
        }
    }
}

export default StatesDataComponent;