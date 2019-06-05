import API from '../api/api';

const domainName = 'http://192.168.0.103:5000';
class FlightServices {
  /**
   * @returns {Promise}
   */
  static getFlights() {
    console.warn('Hitting real service');
    return API.getRequest(`${domainName + '/api/getFlights?db=ruby'}`);
  }
  /**
   * @param {*} data
   * @returns {Promise}
   */
  static addFlight(data) {
    console.warn('Hitting real service');
    return API.postRequest(`${domainName + '/api/flight?db=ruby'}`, data);
  }
}

export default FlightServices;
