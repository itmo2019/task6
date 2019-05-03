import React, { Component } from 'react';

import { MailHeader } from './components/mailHeader/mail-header';
import { MailBody } from './components/mail-body';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <MailHeader />
        <MailBody />
      </div>
    );
  }
}
