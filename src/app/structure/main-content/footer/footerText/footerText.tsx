import React, { Component } from 'react';

import styles from './footerText.module.css';

interface IProps {
  id :string;
  text : string;
}

export class FooterText extends Component<IProps> {
  constructor(props : IProps) {
    super(props);

  }
  render() {
    return (
      <a href={`#${this.props.id}`} className={styles.footer__ref}>
        {this.props.text}
      </a>
    );
  }
}
