import React, { Component, RefObject } from 'react';
import classNames from 'classnames';
import { FullMessage } from '../full-message';
import { ShortMessage, IShortMessageState } from '../short-message';

interface IMessage {
  className?: string;
  content?: string;
  avatar?: string;
  sender?: string;
  topic?: string;
  date?: string;
  toggleMessages: () => void;
  letterID: number;
}

interface IMessageState {
  fadeOut: boolean;
  isTicked: boolean;
}

export class Message extends Component<IMessage, IMessageState> {
  public constructor(props: IMessage) {
    super(props);
    this.content = props.content;
    this.avatar = props.avatar;
    this.sender = props.sender;
    this.topic = props.topic;
    this.date = props.date;
    this.fullMessage = React.createRef();
    this.shortMessage = React.createRef();
    this.parentToggling = props.toggleMessages;
    this.letterID = props.letterID;

    this.readMessage = this.readMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
    this.tickMessage = this.tickMessage.bind(this);
    this.fadeOutMessage = this.fadeOutMessage.bind(this);

    this.state = {
      fadeOut: true,
      isTicked: false
    };
  }

  public componentDidMount() {
    this.timerID = window.setTimeout(() => this.setState({ fadeOut: false }), 0);
  }

  public componentWillUnmount() {
    window.clearTimeout(this.timerID);
  }

  public getKey() {
    return this.letterID;
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

  private readonly content?: string;

  private readonly avatar?: string;

  private readonly sender?: string;

  private readonly topic?: string;

  private readonly date?: string;

  private readonly fullMessage: RefObject<FullMessage>;

  private readonly shortMessage: RefObject<ShortMessage>;

  private readonly parentToggling: () => void;

  private timerID?: number;

  private readonly letterID: number;

  private readMessage() {
    this.parentToggling();
    if (this.fullMessage.current !== null) {
      this.fullMessage.current.setState({ isVisible: true });
    }
    if (this.shortMessage.current !== null) {
      this.shortMessage.current.setState({ wasRead: true });
    }
  }

  public toggleMessage() {
    if (this.shortMessage.current !== null) {
      this.shortMessage.current.setState((state: IShortMessageState) => {
        return { isVisible: !state.isVisible };
      });
    }
  }

  private closeMessage() {
    this.parentToggling();
    if (this.fullMessage.current !== null) {
      this.fullMessage.current.setState({ isVisible: false });
    }
  }

  private tickMessage() {
    this.setState(state => {
      return { isTicked: !state.isTicked };
    });
  }

  public fadeOutMessage() {
    this.setState({ fadeOut: true });
  }

  public render() {
    return (
      <li className={classNames(this.props.className)} key={this.letterID}>
        <FullMessage ref={this.fullMessage} text={this.content} closeMessage={this.closeMessage} />
        <ShortMessage
          ref={this.shortMessage}
          avatar={this.avatar}
          sender={this.sender}
          topic={this.topic}
          date={this.date}
          handleClick={this.readMessage}
          handleTick={this.tickMessage}
          fadeOut={this.state.fadeOut}
          isTicked={this.state.isTicked}
        />
      </li>
    );
  }
}
