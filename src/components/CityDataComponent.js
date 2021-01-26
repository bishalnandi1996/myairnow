import React from 'react';

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
            return <div>Loading......</div>;
        } else  {
            return (
                <div className="row">
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