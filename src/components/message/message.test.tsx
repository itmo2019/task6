import React from 'react';
import ReactDOM from 'react-dom';
import { Message } from './message';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Message letterID={0} toggleMessages={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
