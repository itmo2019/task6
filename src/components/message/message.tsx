import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './message.module.css';
import logo from './yandex-logo.png';
import Check from '../check/index';
import {ThemeContext} from "../../theme/theme-context";

const b = bemify('message', styles);

export interface MessageData {
  avatarSrc: string,
  name: string,
  text: string,
  date: string
}

export interface IMessage {
  data: MessageData,
  sent: boolean,
  isRead: boolean,
  checked: boolean,
  deleteAnim: boolean,
  key: number,
  updateChecked: () => void,
  deleteMessage: () => void
  updateSent: () => void,
  readMessage: () => void
}

interface Props extends IMessage {
  // data: MessageData,
  key: number,
  first: boolean,
  openMsg: (newData: MessageData) => void
}

class Message extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.openMessage = this.openMessage.bind(this);
  }

  openMessage() {
    const data = this.props.data;
    this.props.readMessage();
    this.props.openMsg({avatarSrc: data.avatarSrc, name: data.name, text: data.text, date: data.date});
  }

  componentDidMount() {
    this.props.updateSent();
  }

  onAnimationEnd({animationName}: {animationName: string}) {
    if (animationName === styles['delete-message']) {
      this.props.deleteMessage();
    }
  }

  render(): React.ReactNode {
    const { data, first, isRead, deleteAnim, checked, updateChecked } = this.props;
    const { avatarSrc, text, name, date } = data;
    const avatar: string = avatarSrc === '' ? logo : avatarSrc;
    const theme = this.context;

    return (
      <li
        onAnimationEnd={evt => this.onAnimationEnd(evt)}
        className={b({ new: first, deleted: deleteAnim, theme: theme })}
      >
        <div className={b('check')}>
          <Check callback={updateChecked} checked={checked} />
        </div>
        <label
          onClick={this.openMessage}
          htmlFor="open-message"
          id="open-message-label"
          className="open-message-label"
        >
          <span className={b('content', {theme: theme})}>
            <span className={b('sender')}>
              <img className={b('sender-picture')} alt="" src={avatar} width="30" height="30" />
              <span className={b('sender-name', { notread: !isRead }, {theme: theme})}>{name}</span>
            </span>
            <span className={b('read-mark', { read: isRead.toString() })} />
            <span className={b('text')}>
              <span className={b('text-inner', { notread: !isRead }, {theme: theme})}>{text}</span>
            </span>
            <span className={b('date', {theme: theme})}>
              <time dateTime="08-06">{date}</time>
            </span>
          </span>
        </label>
      </li>
    );
  }
}

Message.contextType = ThemeContext;

export default Message;
