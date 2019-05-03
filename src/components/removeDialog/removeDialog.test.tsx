import React from 'react';
import ReactDOM from 'react-dom';

import { RemoveDialog } from './removeDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<RemoveDialog confirmedAction={() => {}} isVisible={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
