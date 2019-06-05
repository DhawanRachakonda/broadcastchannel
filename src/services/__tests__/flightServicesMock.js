jest.mock('../../services/flightServices');
const FlightServicesMock = require('../../services/flightServices').default;

describe('Flight Services', () => {
  it('should have two flight details as default', async () => {
    const result = await FlightServicesMock.getFlights();
    expect(result.data.length).toEqual(2);
  });

  it('should have three flight details as default', async () => {
    const result = await FlightServicesMock.addFlight({
      name: 'AIRbus',
      fleetCount: 50,
    });
    expect(result.data.length).toEqual(3);
  });
});
