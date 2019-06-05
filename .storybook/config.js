import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/ActionButton.js');
}

configure(loadStories, module);