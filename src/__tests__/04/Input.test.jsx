import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../03/Input';

describe('<Input>', () => {
  it('renders widthout crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input name="carrot" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
