import meduza from '../../../resources/images/Meduza-logo.png';
import znak from '../../../resources/images/ZNAK-logo.png';
import radioFreedom from '../../../resources/images/Радио Свобода-logo.png';
import newNewspaper from '../../../resources/images/Новая Газета-logo.png';
import newspaperRu from '../../../resources/images/газета.ru-logo.png';
import news from '../../../resources/images/Известия-logo.png';

const senders = ['Meduza', 'ZNAK', 'Радио Свобода', 'Новая Газета', 'газета.ru', 'Известия'];
const logos: { [key: string]: string } = {};
logos['Meduza'] = meduza;
logos['ZNAK'] = znak;
logos['Радио Свобода'] = radioFreedom;
logos['Новая Газета'] = newNewspaper;
logos['газета.ru'] = newspaperRu;
logos['Известия'] = news;
const keyWords = ['президент', 'России', 'Владимир', 'Путин',
  'подписал', 'закон', 'предусматривающий', 'блокировку',
  'недостоверных', 'новостей', 'а', 'также', 'материалов',
  'оскорбляющих', 'общество', 'государственные', 'символы',
  'и', 'институты', 'власти', 'РФ', 'законопроект', 'о',
  'суверенном', 'интернете', 'принят', 'в', 'первом', 'чтении',
  'против', 'него', 'выступили', 'все', 'фракции', 'кроме', 'Единой',
  'России', 'Госдума', 'окончательно', 'приняла', 'закон',
  'правительства', 'о', 'повышении', 'ставки', 'НДС', 'с', '1',
  'января', '2019', 'года', 'до', '20%', 'с', 'нынешних', '18%',
  'продукты', 'и', 'важные', 'социальные', 'товары', 'не', 'подорожают',
  'и', 'баланс', 'интересов', 'бизнеса', 'граждан', 'и', 'государства',
  'соблюден', 'отметили', 'в', 'Госдуме', 'c', '1', 'января', 'вступает',
  'в', 'силу', 'закон', 'в', 'соответствии', 'с', 'которым',
  'пенсионный', 'возраст', 'в', 'России', 'увеличится', 'до', '65',
  'лет', 'для', 'мужчин', 'и', '60', ' для', 'женщин', 'реформа',
  'будет', 'проходить', 'поэтапно', 'и', 'должна', 'завершиться', 'в',
  '2028', 'году', 'для', 'досрочного', 'выхода', 'на', 'пенсию',
  'мужчинам', 'нужно', 'будет', 'накопить', '42', 'года', 'пенсионного',
  'стажа', 'женщинам', '37', 'лет', 'тем', 'не', 'менее', 'уровень',
  'бедности', 'сохраняется', 'высоким', '193', 'миллион', 'человек', 'то',
  'есть', '13%', 'населения', 'имеют', 'доход', 'ниже', 'прожиточного', 'минимума'];
const punctMarks = ['.', '.', '.', '.', ',', ',', ',', ',', '!', '?', ':', ';'];
const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'сен', 'окт', 'ноя', 'дек'];

const minTextWordsNum = 70;
const maxTextWordsNum = 200;
const minDistPunctMarks = 5;
const maxDistPunctMarks = 10;

export interface ILetter {
  id: string;
  title: string;
  text: string;
  logo: string;
  sender: string;
  date: string;
  isChecked: boolean;
  arrive: boolean;
  remove: boolean;
  display: boolean;
}

export const maxLettersNumberOnPage = 30;
export const letterTimeDist = 300000;
export const minNewLetterTime = 10;
export const maxNewLetterTime = 600000;

export function randRange(lowBound: number, uppBound: number) {
  return Math.round(Math.random() * (uppBound - lowBound) + lowBound);
}

export function randUpBoundEx(uppBound: number) {
  return randRange(0, uppBound - 1);
}

export function genText() {
  const wordsNum = randRange(minTextWordsNum, maxTextWordsNum);
  let text = '';
  let curWordsNumNoPM = 0;
  let wordsNumForNextPM = randRange(minDistPunctMarks, maxDistPunctMarks);
  let nextWordIsUpperCase = true;
  for (let i = 0; i < wordsNum; i++) {
    let word = keyWords[randUpBoundEx(keyWords.length)];
    if (nextWordIsUpperCase) {
      word = word[0].toUpperCase() + word.slice(1);
      nextWordIsUpperCase = false;
    }

    text += word;
    curWordsNumNoPM++;

    if (curWordsNumNoPM === wordsNumForNextPM && i !== wordsNum - 1) {
      const punctMark = punctMarks[randUpBoundEx(punctMarks.length)];
      if (punctMark === '.' || punctMark === '?' || punctMark === '!') {
        nextWordIsUpperCase = true;
      }

      text += punctMark;
      curWordsNumNoPM = 0;
      wordsNumForNextPM = randRange(minDistPunctMarks, maxDistPunctMarks);
    }

    if (i < wordsNum - 1) {
      text += ' ';
    } else {
      text += '.';
    }
  }
  return text;
}

export function getRandomSender() {
  return senders[randUpBoundEx(senders.length)];
}

export function letter(
  id: string,
  title: string,
  text: string,
  logo: string,
  sender: string,
  date: string,
  isChecked: boolean,
  arrive: boolean,
  remove: boolean,
  display: boolean
) {
  return {
    id,
    title,
    text,
    logo,
    sender,
    date,
    isChecked,
    arrive,
    remove,
    display
  };
}

function getDate() {
  const date = new Date();
  return date.getDate() + ' ' + months[date.getMonth()];
}

export function genLetter() {
  const id = new Date().getTime().toString();
  const sender = getRandomSender();
  const text = genText();
  const date = getDate();
  return letter(
    id,
    text,
    text,
    logos[sender],
    sender,
    date,
    false,
    false,
    false,
    true
  );
}

export function toDisplayed(letters: ILetter[]) {
  let i = 0;
  let cnt = 0;
  while (cnt < maxLettersNumberOnPage && i < letters.length) {
    if (!letters[i].remove) {
      letters[i].display = true;
      cnt++;
    }
    i++;
  }
  return letters;
}

export function containsQuery(letter: ILetter, q: string): boolean {
  return letter.sender.includes(q) || letter.text.includes(q);
}

export function findLetters(letters: ILetter[], q: string) {
  const letters_ = letters.filter(l => containsQuery(l, q));
  letters_.forEach(l => l.display = true);
  return letters_;
}
