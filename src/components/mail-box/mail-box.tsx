import React, { Component } from 'react';
import bemify from '../../utils/bemify';
import MessageSender from '../../utils/messageSender';
import styles from './mail-box.module.css';
import TopMenu from '../top-menu/index';
import FullMessage, { FullMessageI } from '../full-message/index';
import Message, { MessageI, MessageData } from '../message/index';
import Footer from '../footer/index';
import {ThemeContext} from "../../theme/theme-context";
import { FixedSizeList as List } from 'react-window';
import {IMessage} from "../message/message";

const b = bemify('mail-box', styles);

interface State {
  messages: Array<MessageI>,
  fullFlag: boolean,
  fullMessage: FullMessageI,
  checkAll: boolean,
  deleteAll: boolean
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
    this.receiveMessages = this.receiveMessages.bind(this);

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
      checkAll: false,
      deleteAll: false
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
      messages: newMessages,
      checkAll: false
    });
  }

  receiveMessages() {
    let arr: Array<IMessage> = [];
    for (let i = 0; i < 1000; i++) {
      arr.push(this.createMessage(
        /* avatar */ '',
        'Яндекс',
        i.toString(),
        '6 авг',
        /* sent */ true,
        /* isRead */ true
      ));
    }

    this.setState({
      messages: [...this.state.messages].concat(arr)
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

  deleteMsg() {
    this.setState({
      deleteAll: true,
    });
  }

  shouldComponentUpdate(nextProps: any, nextState: any): any {
    if (nextState.deleteAll) {
      this.setState({
        messages: [...this.state.messages].filter(msg => msg.checked === false),
        checkAll: false,
        deleteAll: false,
      });
      return true;
    }
    return true;
  }

  render(): React.ReactNode {
    const { messages, fullFlag, checkAll } = this.state;
    const theme = this.context;

    return (
      <main className={b({theme: theme})}>
        <TopMenu
          checked={checkAll}
          checkAll={this.checkAll}
          animateChecked={this.animateChecked}
          disableCheckbox={fullFlag}
          receiveMessages={this.receiveMessages}
        />
        <div className={b('full-message', { closed: !fullFlag })}>
          <FullMessage data={this.state.fullMessage} closeMsg={this.closeMsg} />
        </div>
        <div className={b('message-list-scroll-container')}>
          <div className={b('message-list-container')}>
            <ul id="message-list" className={b('message-list')}>
              <List height={474}
                    itemCount={messages.length}
                    itemSize={41}
                    width={"100%"}
                    itemData={messages}>
                {({ index, style, data }) => (
                  <div style={style}>
                    <Message
                      data={data[index].data}
                      sent={data[index].sent}
                      isRead={data[index].isRead}
                      checked={data[index].checked}
                      deleteAnim={data[index].deleteAnim}
                      key={data[index].key}
                      first={index === 0 && !data[index].sent}
                      updateChecked={data[index].updateChecked}
                      updateSent={data[index].updateSent}
                      readMessage={data[index].readMessage}
                      openMsg={this.openMsg}
                      deleteMessage={this.deleteMsg}
                    />
                  </div>
                )}
              </List>
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

MailBox.contextType = ThemeContext;

export default MailBox;
