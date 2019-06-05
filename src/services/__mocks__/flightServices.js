const flights = {
  success: 'true',
  message: 'Flight details retrieved successfully',
  data: [
    { name: 'ATR123', fleetCount: 50 },
    { name: 'ATR1234', fleetCount: 35 },
  ],
};
class FlightServices {
  /**
   * @returns {Promise}
   */
  static getFlights() {
    console.log('Hitting mock API!');
    return Promise.resolve(flights);
  }
  /**
   * @param {*} data
   * @returns {Promise}
   */
  static addFlight(data) {
    return Promise.resolve({
      ...flights,
      data: [...flights.data, { ...data }],
    });
  }
}

export default FlightServices;
