import React from 'react';
import renderer from 'react-test-renderer';

import ActionButton from '../action-button.jsx';

it('Display Actionbutton', () => {
  const tree = renderer.create(
    <ActionButton className="button" text="Add" onAction={jest.fn()} />,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
