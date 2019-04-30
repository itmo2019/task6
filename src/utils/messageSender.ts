import { getRandomTimeout } from './random';
import { parseText } from './parser';
import { MessageData } from "../components/message";

export default class MessageSender {
  static minDelay: number = 10;
  /* 10 mins */
  static maxDelay: number = 600000;
  /* 5 mins */
  static interval: number = MessageSender.maxDelay / 2;

  private setMessage: (message: MessageData) => void;

  constructor(setMessage: (message: MessageData) => void) {
    this.setMessage = setMessage;
  }

  async run() {
    await new Promise(resolve => {
      setTimeout(async () => {
        await this.getMail();
        resolve();
      }, getRandomTimeout(MessageSender.minDelay, MessageSender.maxDelay));
    });
  }

  async getMail() {
    await this.newMail();
    await new Promise(resolve => {
      setTimeout(async () => {
        await this.getMail();
        resolve();
      }, getRandomTimeout(MessageSender.interval, MessageSender.maxDelay));
    });
  }

  async newMail() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const endpointRandom =
      'https://en.wikipedia.org/w/api.php?action=query&list=random&utf8=&format=json&rnlimit=1&rnnamespace=0&prop=info';
    const endpointPage =
      'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text|images|links&pageid=';
    const imagePath = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

    const randomPageIdRaw: Response = await fetch(proxyUrl + endpointRandom);
    const randomPageId: any = await randomPageIdRaw.json();
    const { id } = randomPageId.query.random[0];
    const randomPageRaw: Response = await fetch(proxyUrl + endpointPage + id);
    const randomPage: any = await randomPageRaw.json();

    const name: string = randomPage.parse.title;
    const text: string = parseText(randomPage.parse.text['*']);
    const today: Date = new Date();
    const date: string = `${today.getHours()}:${today.getMinutes()}`;
    let avatarSrc: string = '';
    if (randomPage.parse.images.length > 0) {
      avatarSrc = imagePath + randomPage.parse.images[0];
    }

    this.setMessage({
      avatarSrc,
      name,
      text,
      date
    });
  }
}
