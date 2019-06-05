import React from 'react';
import renderer from 'react-test-renderer';
import { delay } from 'redux-saga/effects';

import FlightForm from '../flight-form.jsx';

jest.mock('../../services/flightServices');

describe('Flight Form', () => {
  it('should display two records', async () => {
    const tree = renderer.create(<FlightForm />);
    await delay();

    const instance = tree.root;
    const components = instance.findAllByProps({ className: 'flight-record' });
    expect(components.length).toEqual(2);
  });
});
