import React from 'react';
import styles from './HorizontalNavPanel.module.css';

export class HorizontalNavPanel extends React.Component {
  createNavigationPanelItem = (name, onClickFunction) => {
    return (
      <li className={styles.item}>
        <button
          type="button"
          className={`${styles.button} ${styles.link}`}
          onClick={onClickFunction}
        >
          {name}
        </button>
      </li>
    );
  };

  render() {
    const navigationPanelValues = [
      { name: 'Переслать', function: undefined },
      { name: 'Удалить', function: this.props.deleteMessages },
      { name: 'Это спам!', function: undefined },
      { name: 'Прочитано', function: undefined }
    ];
    return (
      <ul className={styles['horizontal-nav-panel']}>
        {navigationPanelValues.map(element =>
          this.createNavigationPanelItem(element.name, element.function)
        )}
      </ul>
    );
  }
}
