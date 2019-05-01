import React from 'react';
import ReactDOM from 'react-dom';

import { ShortMessage } from './short-message';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ShortMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
