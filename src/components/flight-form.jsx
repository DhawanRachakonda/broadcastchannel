import React from 'react';

import FlightServices from '../services/flightServices';

import FlightTable from './flight-table.jsx';
import InputElement from './input-element.jsx';
import ActionButton from './action-button.jsx';

class FlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetFlightName = this.setInputValue('flightName');
    this.handleSetFleetCount = this.setInputValue('fleetCount');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFlights = this.getFlights.bind(this);
  }
  state = {
    flightName: '',
    fleetCount: '',
    flights: [],
  };
  componentDidMount() {
    this.getFlights();
  }
  getFlights() {
    // call service for get flights.
    FlightServices.getFlights().then(response => {
      this.setState({
        flights: response.data,
      });
    });
  }
  setInputValue = name => value => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.flightName && this.state.fleetCount) {
      FlightServices.addFlight({
        name: this.state.flightName,
        fleetCount: this.state.fleetCount,
      }).then(response => {
        if (response.success === 'true') {
          this.setState({
            flightName: '',
            fleetCount: '',
          });
          // call get flight service
          this.getFlights();
        }
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <InputElement
            onChange={this.handleSetFlightName}
            value={this.state.flightName}
            placeholder="Flight Name"
            className="flight-name--input"
          />
          <InputElement
            onChange={this.handleSetFleetCount}
            value={this.state.fleetCount}
            placeholder="Fleet Count"
            className="fleet-count--input"
          />
          <ActionButton
            text="Add Flight!"
            onAction={this.handleSubmit}
            className="add-flight--btn"
          />
        </form>
        <FlightTable flights={this.state.flights} />
      </React.Fragment>
    );
  }
}

export default FlightForm;
