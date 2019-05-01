  import React from 'react';
import ReactDOM from 'react-dom';

import { BurgerMenu } from './burger-menu';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BurgerMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
