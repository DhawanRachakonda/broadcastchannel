/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
let __flights = [];
const isomorphicFetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(__flights) }),
);
isomorphicFetch.setFlights = flights => (__flights = flights);

export default isomorphicFetch;
