import React, { Component } from 'react';

import styles from './app.module.css';

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
  messageIsOpen: boolean
}

export class App extends Component {
  private messagesPerPage: number;
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
    this.createAndRandom = this.createAndRandom.bind(this);
    this.newRandomMessage = this.newRandomMessage.bind(this);
    this.buildNewMessage = this.buildNewMessage.bind(this);
    this.updateList = this.updateList.bind(this);

    this.messagesPerPage = 1000;

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
      const newMessage = this.buildNewMessage();

      newMessagesList.unshift(newMessage);

      setTimeout(() => {
        newMessage.unshrink = true;
        this.setState({
          messagesList: newMessagesList
        });
      }, 50);

      return {
        messagesList: newMessagesList
      };
    });
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

  updateList(newList: MessageInterface[]) {
    this.setState(() => {
      return {
        messagesList: newList
      }
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <Header newMailFunction={this.newMail}/>
        <MainBlock
          messagesList={this.state.messagesList}
          messagesPerPage={this.messagesPerPage}
          updateList={this.updateList}
        />
      </div>
    );
  }
}

export default App;
