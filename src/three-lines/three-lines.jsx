import React, { Component } from 'react';

import './three-lines.css';

export default class ThreeLines extends Component {
  render() {
    return (
      <section id="three-hlines">
        <div id="hline-1" className="hline" />

        <div id="hline-2" className="hline" />

        <div id="hline-3" className="hline" />
      </section>
    );
  }
}
