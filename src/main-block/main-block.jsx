import React from 'react';

import './main-block.css';
import LeftMenu from './left-menu/left-menu';
import MessagesBlock from './messages-block/messages-block';

class MainBlock extends React.Component {
  render() {
    return (
      <div className="mail-page__main-block">
        <LeftMenu />
        <MessagesBlock
          handleSelectAll={this.props.handleSelectAll}
          selectCheckbox={this.props.selectCheckbox}
          deleteSelected={this.props.deleteSelected}
          messagesList={this.props.messagesList}
          selectAllCheckbox={this.props.selectAllCheckbox}
        />
      </div>
    );
  }
}

export default MainBlock;
