import React from 'react';
import ReactDOM from 'react-dom';

import { MailFrame } from './mail-frame';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MailFrame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
