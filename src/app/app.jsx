import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import MainBlock from '../main-block/main-block';

export class App extends Component {
  constructor(props) {
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
    this.messagesListActualSize = 0;

    this.state = {
      senders: ['Петя', 'Вася', 'Маша'],
      subjects: ['Привет из России', 'Hello from England', 'Bonjour de France'],
      texts: ['Привет!', 'Hello!', 'Bonjour!'],
      months: [
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
      ],

      messagesList: [],
      selectAllCheckbox: false,

      timeoutUpper: 10 * 60 * 1000,
      timeoutLower: 5 * 60 * 1000,

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
      Math.random() * (this.state.timeoutUpper - this.state.timeoutLower) + this.state.timeoutLower
    );
  }

  newMail() {
    this.setState(prevState => {
      let newMessagesListActualSize = this.messagesListActualSize;
      const newMessagesList = prevState.messagesList;
      const newOverflowMessages = this.overflowMessages;

      while (newMessagesListActualSize >= this.messagesPerPage) {
        for (let index = newMessagesList.length - 1; index >= 0; index--) {
          const message = newMessagesList[index];
          if (!message.toDelete) {
            message.toDelete = true;
            newMessagesListActualSize--;
            newOverflowMessages.push(message);
            setTimeout(() => {
              if (message.toDelete) {
                newMessagesList.splice(newMessagesList.indexOf(index), 1);
                message.toDelete = false;
              }
            }, 1500);
            break;
          }
        }
      }
      const newMessage = this.buildNewMessage();

      newMessagesListActualSize++;
      newMessagesList.unshift(newMessage);

      setTimeout(() => {
        newMessage.toCreate = true;
        this.setState({
          messagesList: newMessagesList
        });
      }, 500);

      this.overflowMessages = newOverflowMessages;
      this.messagesListActualSize = newMessagesListActualSize;
      return {
        messagesList: newMessagesList
      };
    });
  }

  handleSelectAll() {
    this.setState(prevState => {
      const newMessagesList = prevState.messagesList;
      for (let i = 0; i < newMessagesList.length; i++) {
        newMessagesList[i].selected = !prevState.selectAllCheckbox;
      }

      return {
        selectAllCheckbox: !prevState.selectAllCheckbox,
        messagesList: newMessagesList
      };
    });
  }

  selectCheckbox(messageIndex) {
    this.setState(prevState => {
      const newMessagesList = prevState.messagesList;
      newMessagesList[messageIndex].selected = !newMessagesList[messageIndex].selected;
      return {
        messagesList: newMessagesList
      };
    });
  }

  deleteSelectedMessages() {
    this.setState(prevState => {
      let newMessagesListActualSize = this.messagesListActualSize;
      const newMessagesList = prevState.messagesList;
      const newOverflowMessages = this.overflowMessages;

      for (let i = 0; i < newMessagesList.length; i++) {
        const message = newMessagesList[i];
        if (message.selected) {
          if (!message.toDelete) {
            message.toDelete = true;
            message.toCreate = false;
            newMessagesListActualSize--;
            if (newOverflowMessages.length > 0) {
              const newMessage = newOverflowMessages.pop();
              newMessage.toCreate = false;
              setTimeout(() => {
                newMessage.toCreate = true;
                this.setState({
                  messagesList: newMessagesList
                });
              }, 500);
              if (newMessage.toDelete) {
                newMessage.toDelete = false;
              } else {
                newMessagesList.push(newMessage);
              }
              newMessagesListActualSize++;
            }
          }
        }
      }

      setTimeout(() => {
        this.setState({
          messagesList: prevState.messagesList.filter(message => !message.selected)
        });
      }, 1500);

      this.overflowMessages = newOverflowMessages;
      this.messagesListActualSize = newMessagesListActualSize;
      return {
        selectAllCheckbox: false,
        messagesList: newMessagesList
      };
    });
  }

  buildNewMessage() {
    const currentDate = new Date();

    const id = currentDate.getTime();
    const langInd = Math.floor(Math.random() * this.state.senders.length);
    const hiddenText = this.state.texts[langInd];

    const monthInd = currentDate.getMonth().toLocaleString('rus');
    const month = this.state.months[monthInd];
    const day = currentDate.getDate();

    const senderName = this.state.senders[Math.floor(Math.random() * this.state.senders.length)];
    return {
      id,
      senderName,
      senderLogo: senderName[0],
      subject: this.state.subjects[langInd],
      date: `${day} ${month.substr(0, 3)}`,
      hiddenText,
      selected: false,
      toDelete: false,
      toCreate: false
    };
  }

  render() {
    return (
      <div className="app">
        <Header newMailFunction={this.newMail} />
        <MainBlock
          handleSelectAll={this.handleSelectAll}
          selectCheckbox={this.selectCheckbox}
          deleteSelected={this.deleteSelectedMessages}
          messagesList={this.state.messagesList}
          messageIsOpen={this.state.messageIsOpen}
          selectAllCheckbox={this.state.selectAllCheckbox}
        />
      </div>
    );
  }
}
