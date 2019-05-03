import React, { Component, RefObject } from 'react';
import classNames from 'classnames';
import MultiRef from 'react-multi-ref';
import loremIpsum from 'lorem-ipsum';
import { Message } from '../message';
import styles from './MailBox.module.css';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { RemoveDialog } from '../removeDialog/removeDialog';

interface IMailBox {
  addNewMessage: (f: () => void) => void;
  removeMessages: (f: () => void) => void;
  className?: string;
}

interface IMailBoxState {
  shownMessagesRefs: MultiRef<number, Message>;
  shownMessages: MessageData[];
  hiddenMessages: MessageData[];
  askingForRemoving: boolean;
}

interface IMessageData {
  content?: string;
  avatar?: string;
  sender?: string;
  topic?: string;
  date?: string;
  id: number;
  wasRead?: boolean;
}

class MessageData {
  public constructor(props: IMessageData) {
    this.content = props.content;
    this.avatar = props.avatar;
    this.sender = props.sender;
    this.topic = props.topic;
    this.date = props.date;
    this.id = props.id;
    this.wasRead = props.wasRead === undefined ? false : props.wasRead;
  }

  private readonly content?: string;

  private readonly avatar?: string;

  private readonly sender?: string;

  private readonly topic?: string;

  private readonly date?: string;

  private readonly id: number;

  private wasRead: boolean;

  public getId() {
    return this.id;
  }

  public getContent() {
    return this.content;
  }

  public getAvatar() {
    return this.avatar;
  }

  public getSender() {
    return this.sender;
  }

  public getTopic() {
    return this.topic;
  }

  public getDate() {
    return this.date;
  }

  public getWasRead() {
    return this.wasRead;
  }

  public readMessage() {
    this.wasRead = true;
  }
}

class MyLoremIpsum {
  private words = [
    'ad',
    'adipisicing',
    'aliqua',
    'aliquip',
    'amet',
    'anim',
    'aute',
    'cillum',
    'commodo',
    'consectetur',
    'consequat',
    'culpa',
    'cupidatat',
    'deserunt',
    'do',
    'dolor',
    'dolore',
    'duis',
    'ea',
    'eiusmod',
    'elit',
    'enim',
    'esse',
    'est',
    'et',
    'eu',
    'ex',
    'excepteur',
    'exercitation',
    'fugiat',
    'id',
    'in',
    'incididunt',
    'ipsum',
    'irure',
    'labore',
    'laboris',
    'laborum',
    'Lorem',
    'magna',
    'minim',
    'mollit',
    'nisi',
    'non',
    'nostrud',
    'nulla',
    'occaecat',
    'officia',
    'pariatur',
    'proident',
    'qui',
    'quis',
    'reprehenderit',
    'sint',
    'sit',
    'sunt',
    'tempor',
    'ullamco',
    'ut',
    'velit',
    'veniam',
    'voluptate'
  ];

  public generateWords(numWords: number): string {
    return loremIpsum({
      count: numWords, // Number of "words", "sentences", or "paragraphs"
      format: 'plain', // "plain" or "html"
      units: 'words', // paragraph(s), "sentence(s)", or "word(s)"
      words: this.words
    });
  }

  public generateParagraph(numSentences: number): string {
    return loremIpsum({
      count: 1, // Number of "words", "sentences", or "paragraphs"
      format: 'plain', // "plain" or "html"
      paragraphLowerBound: numSentences,
      paragraphUpperBound: numSentences + 1,
      units: 'paragraphs', // paragraph(s), "sentence(s)", or "word(s)"
      words: this.words
    });
  }
}

export class MailBox extends Component<IMailBox, IMailBoxState> {
  private static random(x: number, y: number) {
    const rnd = Math.random() * 2 - 1 + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
    return Math.round(Math.abs(rnd) * x + y);
  }

  private lorem = new MyLoremIpsum();

  private letterID = 0;

  private MAX_LETTERS_NUMBER = 4;

  public constructor(props: IMailBox) {
    super(props);
    this.addNewMessage = this.addNewMessage.bind(this);
    this.removeMessages = this.removeMessages.bind(this);
    this.toggleMessages = this.toggleMessages.bind(this);
    this.addRandomly = this.addRandomly.bind(this);
    this.readMessage = this.readMessage.bind(this);
    this.askRemoving = this.askRemoving.bind(this);
    this.confirmedRemoving = this.confirmedRemoving.bind(this);


    props.addNewMessage(this.addNewMessage);
    props.removeMessages(this.removeMessages);

    this.state = {
      shownMessagesRefs: new MultiRef(),
      shownMessages: [],
      hiddenMessages: [],
      askingForRemoving: false
    };
    setTimeout(this.addRandomly, Math.floor(Math.random() * (10 * 60 * 1000 - 10 + 1) + 10));
  }

  private generateName() {
    return this.lorem.generateWords(MailBox.random(1, 3));
  }

  private generateTopic() {
    return this.lorem.generateWords(MailBox.random(1, 10));
  }

  private generateFullMessage() {
    const parNumbers = MailBox.random(4, 10);
    let i;
    const text = [];
    for (i = 0; i < parNumbers; i++) {
      text.push(this.lorem.generateParagraph(MailBox.random(5, 40)));
    }
    return text.join(' ');
  }

  private toggleMessages() {
    this.state.shownMessagesRefs.map.forEach(mes => {
      mes.toggleMessage();
    });
  }

  private generateMessage(): MessageData {
    return new MessageData({
      sender: this.generateName(),
      topic: this.generateTopic(),
      content: this.generateFullMessage(),
      id: this.letterID
    });
  }

  private addNewMessage() {
    this.setState(state => {
      const message = this.generateMessage();
      this.letterID++;
      state.shownMessages.unshift(message);
      if (state.shownMessages.length > this.MAX_LETTERS_NUMBER) {
        const copy = state.shownMessages[state.shownMessages.length - 1];
        state.hiddenMessages.push(copy);
        state.shownMessages.pop();
      }
      return { shownMessages: state.shownMessages };
    });
  }

  private addRandomly() {
    const minTimeout = 5 * 60;
    const maxTimeout = 10 * 60;

    const timeout = Math.floor(Math.random() * (maxTimeout - minTimeout + 1) + minTimeout);
    this.addNewMessage();
    setTimeout(this.addRandomly, timeout * 1000);
  }

  private addOldMessages(numRemoved: number) {
    this.setState(state => {
      const need = Math.min(numRemoved, this.state.hiddenMessages.length);
      let i;
      for (i = 0; i < need; i++) {
        const copy = this.state.hiddenMessages[this.state.hiddenMessages.length - 1];
        state.shownMessages.push(copy);
        state.hiddenMessages.pop();
      }
      return { shownMessages: state.shownMessages };
    });
  }

  private askRemoving() {
    this.setState({ askingForRemoving: true });
    return true;
  }

  private confirmedRemoving() {
    this.setState({ askingForRemoving: false });
    const unFiltered = this.state.shownMessages.filter(mes => {
      const k = Math.round(mes.getId());
      const mesRef = this.state.shownMessagesRefs.map.get(k);
      if (mesRef === undefined) {
        return false;
      }
      return mesRef.state.isTicked;
    });

    unFiltered.forEach(mes => {
      const k = Math.round(mes.getId());
      const mesRef = this.state.shownMessagesRefs.map.get(k);
      if (mesRef === undefined) {
        return;
      }
      mesRef.fadeOutMessage();
    });

    setTimeout(
      () =>
        this.setState(state => {
          const filtered = state.shownMessages.filter(mes => {
            const k = Math.round(mes.getId());
            const mesRef = state.shownMessagesRefs.map.get(k);
            if (mesRef === undefined) {
              return false;
            }
            return !mesRef.state.isTicked;
          });
          return { shownMessages: filtered };
        }),
      1000
    );
    setTimeout(() => this.addOldMessages(unFiltered.length), 1000);
  }

  private removeMessages() {
    const unFiltered = this.state.shownMessages.filter(mes => {
      const k = Math.round(mes.getId());
      const mesRef = this.state.shownMessagesRefs.map.get(k);
      if (mesRef === undefined) {
        return false;
      }
      return mesRef.state.isTicked;
    });

    if (unFiltered.length === 0) {
      return;
    }

    this.askRemoving();
  }

  private readMessage(id: number) {
    for (const mes of this.state.shownMessages) {
      if (mes.getId() === id) {
        mes.readMessage();
      }
    }
  }

  public render() {
    return (
      <div>
        <RemoveDialog
          isVisible={this.state.askingForRemoving}
          confirmedAction={this.confirmedRemoving}
        />
        <ul className={classNames(styles.MailBox, this.props.className)}>
          {this.state.shownMessages.map(mes => {
            return (
              <Message
                key={mes.getId()}
                letterID={mes.getId()}
                sender={mes.getSender()}
                topic={mes.getTopic()}
                avatar={mes.getAvatar()}
                content={mes.getContent()}
                date={mes.getDate()}
                toggleMessages={this.toggleMessages}
                wasRead={mes.getWasRead()}
                readMessage={this.readMessage}
                ref={this.state.shownMessagesRefs.ref(mes.getId())}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
