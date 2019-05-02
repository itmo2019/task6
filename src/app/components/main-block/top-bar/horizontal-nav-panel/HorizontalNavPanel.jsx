import React from 'react';
import './HorizontalNavPanel.css';

export class HorizontalNavPanel extends React.Component {
  createNavigationPanelItem = (name, onClickFunction) => {
    return (
      <li className="horizontal-nav-panel__item">
        <button
          type="button"
          className="horizontal-nav-panel__button menu-link"
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
      <ul className="horizontal-nav-panel">
        {navigationPanelValues.map(element =>
          this.createNavigationPanelItem(element.name, element.function)
        )}
      </ul>
    );
  }
}
