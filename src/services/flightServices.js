import API from '../api/api';

const domainName = 'http://192.168.0.103:5000';
class FlightServices {
  /**
   * @returns {Promise}
   */
  static getFlights() {
    return API.getRequest(`${domainName + '/api/getFlights?db=ruby'}`);
  }
  /**
   * @param {*} data
   * @returns {Promise}
   */
  static addFlight(data) {
    return API.postRequest(`${domainName + '/api/flight?db=ruby'}`, data);
  }
}

export default FlightServices;
