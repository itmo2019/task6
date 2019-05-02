import React from 'react';
import './Hamburger.css';

export class Hamburger extends React.Component {
  render() {
    return (
      <div className="hamburger">
        <div className="hamburger__single-strip" />
        <div className="hamburger__single-strip" />
        <div className="hamburger__single-strip" />
      </div>
    );
  }
}
