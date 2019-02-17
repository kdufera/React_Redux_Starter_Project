import React from 'react';
import ReactDOM from 'react-dom';
import Temperature from './Termperature';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Temperature />, div);
  ReactDOM.unmountComponentAtNode(div);
});
