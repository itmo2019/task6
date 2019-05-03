import React from 'react';

import './checkbox.css';

export function Checkbox(props) {
  return (
    <label className="checkbox" htmlFor={props.id}>
      <input className="checkbox__input" type="checkbox" checked={props.checked} readOnly />
      <div
        className="checkbox__area"
        onClick={() => {
          if (props.main) {
            props.fooForMain();
          } else {
            props.fooForSimple(props.id);
          }
        }}
        onKeyPress={null}
        role="button"
        aria-hidden
      >
        <div className="checkbox__area-border" />
      </div>
    </label>
  );
}
