import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import styles from './full-message.module.css';
import logo from '../message/yandex-logo.png';
import {ThemeContext} from "../../theme/theme-context";

const b = bemify('full-message', styles);

export interface IFullMessage {
  avatarSrc: string,
  name: string,
  text: string,
  date: string
}

interface Props {
  data: IFullMessage,
  closeMsg: () => void
}

class FullMessage extends Component<Props> {
  render(): React.ReactNode {
    const { data, closeMsg } = this.props;
    const { avatarSrc } = data;
    const theme = this.context;

    return (
      <div className={b({theme: theme})}>
        <div className={b('content')}>
          <div className={b('close-container')} onClick={closeMsg}>
            <label htmlFor="open-message">
              <span className={b('close', {theme: theme})}>╳</span>
            </label>
          </div>
          <div className={b('header')}>
            <div className={b('sender')}>
              <img
                id="full-message-img"
                alt=""
                className={b('img')}
                src={avatarSrc === '' ? logo : avatarSrc}
                width="42"
                height="42"
              />
              <div className={b('sender-info')}>
                <div id="full-message-sender" className={b('author', {theme: theme})}>
                  {data.name}
                </div>
                <div className={b('email', {theme: theme})}>wikipedia@yandex.ru</div>
              </div>
            </div>
            <div id="full-message-date" className={b('date', {theme: theme})}>
              <time dateTime="08-06">6 авг</time>
            </div>
          </div>
          <p id="full-message-text" className={b('text', {theme: theme})}>
            {data.text}
          </p>
        </div>
      </div>
    );
  }
}

FullMessage.contextType = ThemeContext;

export default FullMessage;
