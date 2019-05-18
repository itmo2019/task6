import React, {Component} from 'react';

import styles from './app.module.css';
import {Header} from './components/header/Header';
import {MainBlock} from './components/main-block/MainBlock';
import {Menu} from './components/menu/Menu';
import * as utils from './message-templates';
import {ThemeProvider, themes} from "../theme/theme-context";
import {Moment} from "moment";

const maxMessageInterval = 10 * 60 * 1000;
const timeMessageInterval = 5 * 60 * 1000;
const maxMessagePerPage = 30;

export interface IMessage {
    id: string
    theme: string
    text: string
    firstLetterSender: string
    sender: string
    date: Date
    isChecked: boolean
    toCreate: boolean
    toDelete: boolean
    display: boolean
}

interface IState {
    wasNormalInterval: boolean
    messages: IMessage[]
    theme: themes
    startDate: Moment | null,
    endDate: Moment | null,
    focusedInput: any
}

export class App extends Component<{}, IState> {
  static createMessageValues(
    id: string,
    theme: string,
    text: string,
    firstLetterSender: string,
    sender: string,
    date: Date,
    isChecked: boolean,
    toCreate: boolean,
    toDelete: boolean,
    display: boolean
  ) {
    return {
      id,
      theme,
      text,
      firstLetterSender,
      sender,
      date,
      isChecked,
      toCreate,
      toDelete,
      display
    };
  }

  static getGeneratedDate() {
    return new Date();
  }

  static getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  static async generateMessage() {
    const id = new Date().getTime().toString();

    const senderName = utils.getRandomSender();
    const [theme, text] = await utils.getRandomThemeAndText();
    const date = App.getGeneratedDate();
    return App.createMessageValues(
      id,
      theme,
      text,
      senderName[0],
      senderName,
      date,
      false,
      false,
      false,
      true
    );
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      messages: [],
      wasNormalInterval: true,
        theme: themes.light,
        startDate: null,
        endDate: null,
        focusedInput: null
    };
    this.newMail = this.newMail.bind(this);
    this.deleteMessages = this.deleteMessages.bind(this);
    App.generateMessage = App.generateMessage.bind(this);
    this.getTimeForMessage = this.getTimeForMessage.bind(this);
    this.showHiddenMessages = this.showHiddenMessages.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.filterMessagesByDate = this.filterMessagesByDate.bind(this);
    setTimeout(() => {this.addDefaultMessagesForTestingCalendar()}, 100);
    setTimeout(() => {
      this.newMail();
    }, App.getRandomArbitrary(10, maxMessageInterval));
  }

  addDefaultMessagesForTestingCalendar() {
    const newMessages = this.state.messages;
    for (let i = 0; i < 10; i++) {
      const curMessage = App.createMessageValues(i.toString(), `theme${i}`, `text${i}`, `S`,
          `Sender${i}`, new Date(2019, 3, i + 25), false, false, false, true);
        newMessages.unshift(curMessage);
        setTimeout(() => {
            curMessage.toCreate = true;
            this.setState({
                messages: newMessages
            });
        }, 10);
    }
    this.setState({messages: newMessages});
  }

  toggleTheme = () => {
    this.setState((state: IState) => ({
        theme:
            state.theme === themes.dark
                ? themes.light
                : themes.dark,
        }));
    };

  filterMessagesByDate(startDate: Date, endDate: Date) {
    const messagesList = this.state.messages;
    for (let i = 0; i < messagesList.length; i++) {
      const curDate = messagesList[i].date.valueOf();
      messagesList[i].display = curDate >= startDate.valueOf() && curDate <= endDate.valueOf();
    }
    this.setState({messages: messagesList})
  }

  getTimeForMessage() {
    let randomTime = App.getRandomArbitrary(10, maxMessageInterval);
    if (this.state.wasNormalInterval) {
      if (randomTime < timeMessageInterval) {
        this.setState({ wasNormalInterval: false });
      }
    } else {
      randomTime = App.getRandomArbitrary(timeMessageInterval, maxMessageInterval);
      this.setState({ wasNormalInterval: true });
    }
    return randomTime;
  }

  checkboxHandler = (id: string) => {
    this.setState((prevState: IState) => {
      const msgIndex = prevState.messages.findIndex(curMessage => curMessage.id.toString() === id);
      const newMessages = prevState.messages;
      newMessages[msgIndex].isChecked = !newMessages[msgIndex].isChecked;
      return { messages: newMessages };
    });
  };

  topBarCheckboxHandler = (isChecked: boolean) => {
    this.setState((prevState: IState) => {
      const newMessages = prevState.messages;
      for (let i = 0; i < Math.min(prevState.messages.length, maxMessagePerPage); i++) {
        newMessages[i] = prevState.messages[i];
        newMessages[i].isChecked = isChecked;
      }
      return { messages: newMessages };
    });
  };

  showHiddenMessages = (messagesList: IMessage[]) => {
    let displayedNumber = 0;
    let i = 0;
    const showingMessagesList = messagesList;
    while (displayedNumber < maxMessagePerPage && i < showingMessagesList.length) {
      if (!showingMessagesList[i].toDelete) {
        displayedNumber++;
        showingMessagesList[i].display = true;
      }
      i++;
    }
    return showingMessagesList;
  };

  deleteMessages() {
    const messagesList = this.state.messages;
    for (let i = 0; i < messagesList.length; i++) {
      if (messagesList[i].isChecked) {
        messagesList[i].toDelete = true;
      }
    }
    this.setState({ messages: this.showHiddenMessages(messagesList) });
    setTimeout(() => {
      this.setState({
        messages: messagesList.filter(message => !message.isChecked)
      });
    }, 1000);
  }

  async newMail() {
    const timeForMessage = this.getTimeForMessage();
    const newMessage = await App.generateMessage();
    this.setState((prevState: IState) => {
      const newMessages = prevState.messages;
      if (newMessages.length >= maxMessagePerPage) {
        for (let i = maxMessagePerPage - 1; i < newMessages.length; i++) {
          newMessages[i].display = false;
        }
      }
      if (prevState.startDate != null && prevState.endDate != null) {
          const curDate = newMessage.date.valueOf();
          newMessage.display = curDate >= prevState.startDate.valueOf() && curDate <= prevState.endDate.valueOf();
      }
      newMessages.unshift(newMessage);
      setTimeout(() => {
        newMessage.toCreate = true;
        this.setState({
          messages: newMessages
        });
      }, 10);
      return { messages: newMessages };
    });
    setTimeout(() => {
      this.newMail();
    }, timeForMessage);
  }

    handleDatesChange = ({startDate, endDate}: { startDate: Moment | null, endDate: Moment | null }): void => {
        this.setState({startDate, endDate});
        console.log(startDate + " " + endDate);
        if (startDate === null || endDate === null) {
            this.filterMessagesByDate(new Date(1970, 0, 1), new Date(2100, 0, 1));
        } else {
            this.filterMessagesByDate(startDate.toDate(), endDate.toDate());
        }
    };

    updateFocus = (focusedInput: any) => {
        this.setState({focusedInput: focusedInput});
    };

  render() {
      const colorStyle = this.state.theme === themes.light ? styles.light : styles.dark;
    return (
        <ThemeProvider value={this.state.theme}>
            <div className={`${styles.app} ${colorStyle}`}>
                <Header changeTheme={this.toggleTheme} handleDatesChange = {this.handleDatesChange}
                        updateFocus = {this.updateFocus} startDate = {this.state.startDate}
                        endDate = {this.state.endDate} focusedInput={this.state.focusedInput}/>
                <Menu newMail={this.newMail} />
                <MainBlock
                    messages={this.state.messages}
                    deleteMessages={this.deleteMessages}
                    checkboxHandler={this.checkboxHandler}
                    topBarCheckboxHandler={this.topBarCheckboxHandler}
                />
            </div>
        </ThemeProvider>
    );
  }
}
