import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/InputStroy');
}

configure(loadStories, module);
