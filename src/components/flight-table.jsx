import React from 'react';

import PropTypes from 'prop-types';

function FlightsDetails({ flights }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Flight Name</td>
          <td>Fleet Count</td>
        </tr>
      </thead>
      <tbody>
        {flights &&
          flights.map(record => (
            <tr key={record.name} className="flight-record">
              <td>{record.name}</td>
              <td>{record.fleetCount}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

FlightsDetails.propTypes = {
  flights: PropTypes.array,
};

export default FlightsDetails;
