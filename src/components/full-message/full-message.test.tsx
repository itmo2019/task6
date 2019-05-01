import React from 'react';
import ReactDOM from 'react-dom';

import { FullMessage } from './full-message';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FullMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
