import fetch from 'isomorphic-fetch';
import FlightServices from '../flightServices';

const flights = {
  success: 'true',
  message: 'Flight details retrieved successfully',
  data: [
    { name: 'ATR123', fleetCount: 50 },
    { name: 'ATR1234', fleetCount: 35 },
  ],
};
describe('Fetch Flights', () => {
  beforeAll(() => {
    fetch.setFlights(flights);
  });
  it('should fetch flights', async () => {
    const response = await FlightServices.getFlights();
    expect(response).toEqual(flights);
    expect(fetch).toHaveBeenCalledWith(
      'http://192.168.0.103:5000/api/getFlights?db=ruby',
    );
  });
});
