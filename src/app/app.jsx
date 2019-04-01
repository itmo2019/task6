import React, { Component } from 'react';

import './app.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p>
            Edit <code>src/app/app.jsx</code> and save to reload.
          </p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
