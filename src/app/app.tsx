import * as React from 'react';

import { MailHeader } from './components/mailHeader/mail-header';
import { MailBody } from './components/mail-body';

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="app">
        <MailHeader />
        <MailBody />
      </div>
    );
  }
}
