import React from 'react';

import styles from './header.module.css';

interface InjectedProps {
  handleSelectAll: () => void;
  deleteSelected: () => void;
  selectAllCheckbox: boolean;
}

class Header extends React.Component<InjectedProps> {
  render() {
    return (
      <div className={styles['messages-block-header']}>
        <label
          id={styles['check-all-label']}
          htmlFor={styles['check-all']}
        >
          <input
            role="checkbox"
            aria-checked={this.props.selectAllCheckbox}
            aria-label={'Выделить все сообщения'}
            type="checkbox"
            className={styles.checkbox}
            id={styles['check-all']}
            checked={this.props.selectAllCheckbox}
            onChange={() => {
              this.props.handleSelectAll();
            }}
          />
        </label>
        <button type="button" className={styles['messages-block-header__action'] + " " + styles['button-to-div']} disabled={true}>
          Переслать
        </button>
        <button
          type="button"
          className={styles['messages-block-header__action'] + " " + styles['button-to-div']}
          id="delete-messages"
          onClick={() => {
            this.props.deleteSelected();
          }}
        >
          Удалить
        </button>
        <button type="button" className={styles['messages-block-header__action'] + " " + styles['button-to-div']} disabled={true}>
          Это спам!
        </button>
        <button type="button" className={styles['messages-block-header__action'] + " " + styles['button-to-div']} disabled={true}>
          Прочитано
        </button>
      </div>
    );
  }
}

export default Header;
