import React, { Component, RefObject } from 'react';
import { ShortMessage } from '../short-message';

interface IMessage {
  className?: string;
  content?: string;
  avatar?: string;
  sender?: string;
  topic?: string;
  date?: string;
  letterID: number;
  wasRead: boolean;
  isTicked: boolean;
  readMessage: (a: number) => void;
  tickMessage: (a: number) => void;
}

interface IMessageState {
  fadeOut: boolean;
  isTicked: boolean;
  wasRead: boolean;
}

export class Message extends Component<IMessage, IMessageState> {
  public constructor(props: IMessage) {
    super(props);
    this.content = props.content;
    this.avatar = props.avatar;
    this.sender = props.sender;
    this.topic = props.topic;
    this.date = props.date;
    this.shortMessage = React.createRef();
    this.letterID = props.letterID;

    this.readMessage = this.readMessage.bind(this);
    this.tickMessage = this.tickMessage.bind(this);
    this.fadeOutMessage = this.fadeOutMessage.bind(this);

    this.state = {
      fadeOut: true,
      isTicked: props.isTicked,
      wasRead: props.wasRead
    };
  }

  public componentDidMount() {
    this.timerID = window.setTimeout(() => this.setState({ fadeOut: false }), 0);
  }

  public componentWillUnmount() {
    window.clearTimeout(this.timerID);
  }

  private readonly content?: string;

  private readonly avatar?: string;

  private readonly sender?: string;

  private readonly topic?: string;

  private readonly date?: string;

  private readonly shortMessage: RefObject<ShortMessage>;

  private timerID?: number;

  private readonly letterID: number;

  private readMessage() {
    this.props.readMessage(this.letterID);
    if (this.shortMessage.current !== null) {
      this.shortMessage.current.setState({ wasRead: true });
    }
  }

  private tickMessage() {
    this.props.tickMessage(this.letterID);
    this.setState(state => {
      return { isTicked: !state.isTicked };
    });
  }

  public fadeOutMessage() {
    this.setState({ fadeOut: true });
  }

  public render() {
    return (
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
        wasRead={this.state.wasRead}
      />
    );
  }
}
