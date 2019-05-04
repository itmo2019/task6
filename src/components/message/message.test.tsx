import React from 'react';
import ReactDOM from 'react-dom';
import { Message } from './message';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Message
      letterID={0}
      wasRead={false}
      readMessage={() => {}}
      isTicked={false}
      tickMessage={() => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
