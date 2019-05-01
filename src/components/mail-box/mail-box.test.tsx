import React from 'react';
import ReactDOM from 'react-dom';

import { MailBox } from './mail-box';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MailBox addNewMessage={() => {}} removeMessages={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
