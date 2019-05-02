import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import MainBlock from '../main-block';

export interface MessageInterface {
  id: number,
  senderName: String,
  senderLogo: String,
  subject: String,
  date: String,
  hiddenText: String,
  selected: boolean,
  shrink: boolean,
  unshrink: boolean
}

interface State {
  messagesList: MessageInterface[],
  selectAllCheckbox: boolean,
  messageIsOpen: boolean
}

export class App extends Component {
  private messagesPerPage: number;
  private overflowMessages: MessageInterface[];
  private timeoutUpper: number;
  private timeoutLower: number;

  private senders: String[];
  private subjects: String[];
  private texts: String[];
  private months: String[];

  public state: State;

  constructor(props: Readonly<{}>) {
    super(props);
    this.newMail = this.newMail.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.deleteSelectedMessages = this.deleteSelectedMessages.bind(this);

    this.createAndRandom = this.createAndRandom.bind(this);
    this.newRandomMessage = this.newRandomMessage.bind(this);
    this.selectCheckbox = this.selectCheckbox.bind(this);
    this.buildNewMessage = this.buildNewMessage.bind(this);

    this.messagesPerPage = 30;
    this.overflowMessages = [];

    this.senders = ['Петя', 'Вася', 'Маша'];
    this.subjects = ['Привет из России', 'Hello from England', 'Bonjour de France'];
    this.texts = ['Привет!', 'Hello!', 'Bonjour!'];
    this.months = [
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентябрь',
      'октябрь',
      'ноябрь',
      'декабрь'
    ];
    this.timeoutUpper = 10 * 60 * 1000;
    this.timeoutLower = 5 * 60 * 1000;

    this.state = {
      messagesList: [],
      selectAllCheckbox: false,
      messageIsOpen: false
    };
  }

  componentDidMount() {
    const thisHolder = this;
    thisHolder.createAndRandom();
  }

  createAndRandom() {
    this.newMail();
    this.newRandomMessage();
  }

  newRandomMessage() {
    setTimeout(
      this.createAndRandom,
      Math.random() * (this.timeoutUpper - this.timeoutLower) + this.timeoutLower
    );
  }

  newMail() {
    this.setState((prevState: State) => {
      const newMessagesList = prevState.messagesList;
      const newOverflowMessages = this.overflowMessages;

      let newMessagesListActualSize = 0;
      for (let index = 0; index < newMessagesList.length; index++) {
        if (!newMessagesList[index].shrink) {
          newMessagesListActualSize++;
        }
      }

      while (newMessagesListActualSize >= this.messagesPerPage) {
        for (let index = newMessagesList.length - 1; index >= 0; index--) {
          const message = newMessagesList[index];
          if (!message.shrink) {
            message.shrink = true;
            message.unshrink = false;
            message.selected = false;
            newMessagesListActualSize--;
            newOverflowMessages.push(message);
            setTimeout(() => {
              const removeIndex = newMessagesList.indexOf(message);
              if (removeIndex > -1 && newMessagesList[removeIndex].shrink) {
                newMessagesList.splice(removeIndex, 1);
                message.shrink = false;
              }
            }, 1500);
            break;
          }
        }
      }
      const newMessage = this.buildNewMessage();

      newMessagesList.unshift(newMessage);

      setTimeout(() => {
        newMessage.unshrink = true;
        this.setState({
          messagesList: newMessagesList
        });
      }, 50);

      this.overflowMessages = newOverflowMessages;
      return {
        messagesList: newMessagesList
      };
    });
  }

  handleSelectAll() {
    this.setState((prevState: State) => {
      const newMessagesList = prevState.messagesList;
      for (let i = 0; i < newMessagesList.length; i++) {
        if (!newMessagesList[i].shrink) {
          newMessagesList[i].selected = !prevState.selectAllCheckbox;
        }
      }

      return {
        selectAllCheckbox: !prevState.selectAllCheckbox,
        messagesList: newMessagesList
      };
    });
  }

  selectCheckbox(messageIndex: number) {
    this.setState((prevState: State) => {
      const newMessagesList = prevState.messagesList;
      newMessagesList[messageIndex].selected = !newMessagesList[messageIndex].selected;
      return {
        messagesList: newMessagesList
      };
    });
  }

  deleteSelectedMessages() {
    this.setState((prevState: State) => {
      const newMessagesList = prevState.messagesList;
      const newOverflowMessages = this.overflowMessages;

      for (let index = 0; index < newMessagesList.length; index++) {
        const message = newMessagesList[index];
        if (message.selected) {
          if (!message.shrink) {
            message.shrink = true;
            message.unshrink = false;
            if (newOverflowMessages.length > 0) {
              const newMessage = newOverflowMessages.pop();
              if (newMessage === undefined) {
                console.log('app.tsx.186')
                continue;
              }
              let needToPush = true;
              for (let i = 0; i < newMessagesList.length; i++) {
                if (newMessagesList[i].id === newMessage.id) {
                  needToPush = false;
                  break;
                }
              }
              newMessage.shrink = false;
              if (!needToPush) {
                newMessage.unshrink = true;
              } else {
                newMessage.unshrink = false;
                setTimeout(() => {
                  newMessage.unshrink = true;
                  this.setState({
                    messagesList: newMessagesList
                  });
                }, 50);
                newMessagesList.push(newMessage);
              }
            }
          }
        }
      }

      this.overflowMessages = newOverflowMessages;
      return {
        selectAllCheckbox: false,
        messagesList: newMessagesList
      };
    });

    setTimeout(() => {
      this.setState((prevState: State) => {
        return {
          messagesList: prevState.messagesList.filter(message => !message.shrink)
        };
      });
    }, 1500);
  }

  buildNewMessage(): MessageInterface {
    const currentDate = new Date();

    const id = currentDate.getTime();
    const langInd = Math.floor(Math.random() * this.senders.length);
    const hiddenText = this.texts[langInd];

    const monthInd = currentDate.getMonth();
    const month = this.months[monthInd];
    const day = currentDate.getDate();

    const senderName = this.senders[Math.floor(Math.random() * this.senders.length)];
    return {
      id,
      senderName,
      senderLogo: senderName[0],
      subject: this.subjects[langInd],
      date: `${day} ${month.substr(0, 3)}`,
      hiddenText,
      selected: false,
      shrink: false,
      unshrink: false
    };
  }

  render() {
    return (
      <div className="app">
        <Header newMailFunction={this.newMail}/>
        <MainBlock
          handleSelectAll={this.handleSelectAll}
          selectCheckbox={this.selectCheckbox}
          deleteSelected={this.deleteSelectedMessages}
          messagesList={this.state.messagesList}
          selectAllCheckbox={this.state.selectAllCheckbox}
        />
      </div>
    );
  }
}

export default App;
