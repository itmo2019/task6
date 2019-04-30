import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import MessageSender from '../../utils/messageSender';
import styles from './mail-box.module.css';
import TopMenu from '../top-menu/index';
import FullMessage, { FullMessageI } from '../full-message/index';
import Message, { MessageI, MessageData } from '../message/index';
import Footer from '../footer/index';

const b = bemify('mail-box', styles);

interface State {
  messages: Array<MessageI>,
  fullFlag: boolean,
  fullMessage: FullMessageI,
  checkAll: boolean
}

class MailBox extends Component<{}, State> {
  private globalCount: number = 0;

  constructor(props: {}) {
    super(props);

    this.setMessage = this.setMessage.bind(this);
    this.openMsg = this.openMsg.bind(this);
    this.closeMsg = this.closeMsg.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.animateChecked = this.animateChecked.bind(this);
    this.updCheckMsg = this.updCheckMsg.bind(this);
    this.createMessage = this.createMessage.bind(this);
    this.deleteMsg = this.deleteMsg.bind(this);

    this.state = {
      messages: [
        this.createMessage(
          /* avatar */ '',
          'Яндекс.Паспорт',
          'Доступ к аккаунту восстановлен',
          '6 авг',
          /* sent */ true
        ),
        this.createMessage(
          /* avatar */ '',
          'Команда Яндекс.Почты',
          'Как читать почту с мобильного',
          '6 июл',
          /* sent */ true
        ),
        this.createMessage(
          /* avatar */ '',
          'Команда Яндекс.Почты',
          'Как читать почту с мобильного',
          '6 июл',
          /* sent */ true,
          /* isRead */ true
        ),
        this.createMessage(
          /* avatar */ '',
          'Яндекс',
          'Соберите всю почту в этот ящик, отсортируйте письма по категории',
          '6 авг',
          /* sent */ true,
          /* isRead */ true
        )
      ],
      fullFlag: false,
      fullMessage: {
        avatarSrc: '',
        name: 'Яндекс',
        text: 'Новое сообщение',
        date: '6 авг'
      },
      checkAll: false
    };

    const sender = new MessageSender(this.setMessage);
    sender.run().catch(console.log);
  }

  setMessage(message: MessageData) {
    const newMessages: Array<MessageI> = [...this.state.messages];
    newMessages.unshift(
      this.createMessage(
        message.avatarSrc,
        message.name,
        message.text,
        message.date
      )
    );
    this.setState({
      messages: newMessages
    });
  }

  openMsg(newData: FullMessageI) {
    this.setState({
      fullMessage: newData,
      fullFlag: true
    });
  }

  closeMsg() {
    const state = { ...this.state };
    state.fullFlag = false;
    this.setState(state);
  }

  createMessage(avatarSrc: string, name: string, text: string, date: string, sent = false,
                isRead = false, checked = false, deleteAnim = false) {
    const self = this;
    const data: MessageData = {
      avatarSrc,
      name,
      text,
      date,
    };
    const message: MessageI = {
      sent,
      isRead,
      data,
      checked,
      deleteAnim,
      key: self.globalCount++,
      updateSent: () => {
        MailBox.updateSent(message);
      },
      updateChecked: () => {
        this.updCheckMsg(message);
      },
      deleteMessage: () => {
        this.deleteMsg(message);
      },
      readMessage: () => {
        MailBox.readMsg(message);
      }
    };

    return message;
  }

  static updateSent(message: MessageI) {
    message.sent = true;
  }

  updCheckMsg(message: MessageI) {
    message.checked = !message.checked;
    if (this.state.checkAll === true && message.checked === false) {
      this.setState({
        checkAll: false
      });
    }
    this.forceUpdate();
  }

  static readMsg(message: MessageI) {
    message.isRead = true;
  }

  checkAll() {
    const newMessages: Array<MessageI> = [...this.state.messages].map((msg: MessageI) => {
      msg.checked = !this.state.checkAll;
      return msg;
    });

    this.setState({
      messages: newMessages,
      checkAll: !this.state.checkAll
    });
  }

  animateChecked() {
    const newMessages: Array<MessageI> = [...this.state.messages].map((msg: MessageI) => {
      if (msg.checked) {
        msg.deleteAnim = true;
      }
      return msg;
    });

    this.setState({
      messages: newMessages
    });
  }

  deleteMsg(message: MessageI) {
    this.setState({
      messages: [...this.state.messages].filter(msg => !(msg === message)),
      checkAll: false
    });
  }

  render(): React.ReactNode {
    const { messages, fullFlag, checkAll } = this.state;

    return (
      <main className={b()}>
        <TopMenu
          checked={checkAll}
          checkAll={this.checkAll}
          animateChecked={this.animateChecked}
          disableCheckbox={fullFlag}
        />
        <div className={b('full-message', { closed: !fullFlag })}>
          <FullMessage data={this.state.fullMessage} closeMsg={this.closeMsg} />
        </div>
        <div className={b('message-list-scroll-container')}>
          <div className={b('message-list-container')}>
            <ul id="message-list" className={b('message-list')}>
              {messages.map((message, index) => {
                return (
                  <Message
                    data={message.data}
                    sent={message.sent}
                    isRead={message.isRead}
                    checked={message.checked}
                    deleteAnim={message.deleteAnim}
                    key={message.key}
                    first={index === 0 && !message.sent}
                    updateChecked={message.updateChecked}
                    deleteMessage={message.deleteMessage}
                    updateSent={message.updateSent}
                    readMessage={message.readMessage}
                    openMsg={this.openMsg}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className={b('footer')}>
          <Footer />
        </div>
      </main>
    );
  }
}

export default MailBox;
