import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './MailFrame.module.css';
import { MailBox } from '../mail-box';
import { Footer } from '../footer';

interface IMailFrame {
  className?: string;
}

interface IMailFrameState {
  addNewMessage?: () => void;
  removeMessages?: () => void;
  addManyMessages?: () => void;
}

interface IActionsItem {
  type?: string;
  text?: string;
  onClick?: () => void;
}

function ActionsItem(props: IActionsItem) {
  function buildItem() {
    const type = props.type === undefined ? 'text' : props.type;

    if (type === 'text') {
      const text = props.text === undefined ? 'Элемент меню' : props.text;
      return <span className={styles.MailFrame__Text}>{text}</span>;
    }

    if (type === 'checkbox') {
      return <input className={styles.MailFrame__Checkbox} type="checkbox" />;
    }

    return <div />;
  }

  return (
    <li className={styles.MailFrame__ActionsItem}>
      <button className={styles.MailFrame__Button} type="button" onClick={props.onClick}>
        {buildItem()}
      </button>
    </li>
  );
}

export class MailFrame extends Component<IMailFrame, IMailFrameState> {
  public constructor(props: IMailFrame) {
    super(props);
    this.state = {
      addNewMessage: undefined,
      removeMessages: undefined,
      addManyMessages: undefined
    };
  }

  private setAddNewMessage = (f: () => void) => {
    this.setState({ addNewMessage: f });
  };

  private setRemoveMessage = (f: () => void) => {
    this.setState({ removeMessages: f });
  };

  private setAddManyMessages = (f: () => void) => {
    this.setState({addManyMessages: f});
  }

  public render() {
    return (
      <div className={classNames(this.props.className)}>
        <ul className={styles.MailFrame__Actions}>
          <ActionsItem type="checkbox" />
          <ActionsItem text="Получить письмо" onClick={this.state.addNewMessage} />
          <ActionsItem text="Переслать" />
          <ActionsItem text="Удалить" onClick={this.state.removeMessages} />
          <ActionsItem text="Это спам!" />
          <ActionsItem text="Прочитано" />
          <ActionsItem text="Получить 1000 писем" onClick={this.state.addManyMessages} />
        </ul>

        <MailBox addNewMessage={this.setAddNewMessage} removeMessages={this.setRemoveMessage} addManyMessages={this.setAddManyMessages}/>
        <Footer />
      </div>
    );
  }
}
