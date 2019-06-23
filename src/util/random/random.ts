const nouns = [
  'bird',
  'clock',
  'boy',
  'plastic',
  'duck',
  'teacher',
  'old lady',
  'professor',
  'hamster',
  'dog'
];
const verbs = [
  'kicked',
  'ran',
  'flew',
  'dodged',
  'sliced',
  'rolled',
  'died',
  'breathed',
  'slept',
  'killed'
];
const adjectives = [
  'beautiful',
  'lazy',
  'professional',
  'lovely',
  'dumb',
  'rough',
  'soft',
  'hot',
  'vibrating',
  'slimy'
];
const adverbs = [
  'slowly',
  'elegantly',
  'precisely',
  'quickly',
  'sadly',
  'humbly',
  'proudly',
  'shockingly',
  'calmly',
  'passionately'
];
const preposition = [
  'down',
  'into',
  'up',
  'on',
  'upon',
  'below',
  'above',
  'through',
  'across',
  'towards'
];
const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const MINUTE = 60000;

export class LetterData {
  public sender: string;

  public text: string;

  public day: number;

  public month: string;

  public checked: boolean;

  public visible: boolean;

  public shown: boolean;

  public id: number;

  public key: number;

  public static nextId = 0;

  public constructor(sender: string, text: string, day: number, month: string) {
    this.sender = sender;
    this.text = text;
    this.day = day;
    this.month = month;
    this.checked = false;
    this.visible = true;
    this.shown = false;
    this.id = LetterData.nextId++;
    this.key = this.id;
    console.log(this.id);
  }
}

function randomSender(): string {
  return nouns[Math.floor(Math.random() * 10)];
}

function randomSentence(): string {
  const rand1 = Math.floor(Math.random() * 10);
  const rand2 = Math.floor(Math.random() * 10);
  const rand3 = Math.floor(Math.random() * 10);
  const rand4 = Math.floor(Math.random() * 10);
  const rand5 = Math.floor(Math.random() * 10);
  const rand6 = Math.floor(Math.random() * 10);
  const s = `The ${adjectives[rand1]} ${nouns[rand2]} ${adverbs[rand3]} ${
    verbs[rand4]
  } because some ${nouns[rand1]} ${adverbs[rand1]} ${verbs[rand1]} ${preposition[rand1]} a ${
    adjectives[rand2]
  } ${nouns[rand5]} which, became a ${adjectives[rand3]}, ${adjectives[rand4]} ${nouns[rand6]}.`;
  return s;
}

function randomDate(): [number, string] {
  return [Math.floor(Math.random() * 28) + 1, months[Math.floor(Math.random() * 12)]];
}

export function randomLetterData(): LetterData {
  const [day, month] = randomDate();
  return new LetterData(randomSender(), randomSentence(), day, month);
}
