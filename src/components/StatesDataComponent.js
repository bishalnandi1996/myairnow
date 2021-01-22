import { error } from 'jquery';
import React, { Component } from 'react';

class StatesDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            records: []
        };
    }

    componentDidMount() {
        fetch("https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd0000010ccfac0459084d696ac6bee8b8d1cd1b&format=json&offset=0&limit=all&filters[state]=West_Bengal")
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
                <ul>
                    {records.map(record => (
                        <li key={record.id}>
                            {record.station}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default StatesDataComponent;