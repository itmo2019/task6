const icon1: string = require('../../images/icons/1.png');
const icon2: string = require('../../images/icons/2.png');
const icon3: string = require('../../images/icons/3.jpg');
const icon4: string = require('../../images/icons/4.jpg');
const icon5: string = require('../../images/icons/5.png');
const icon6: string = require('../../images/icons/6.png');
const icon7: string = require('../../images/icons/7.png');
const icon8: string = require('../../images/icons/8.png');
const icon9: string = require('../../images/icons/9.png');
const icon10: string = require('../../images/icons/9.jpg');

const phrases: string[] = [
  'практика показывает, что',
  'структура организации',
  'одна маленькая строчка',
  'реторический вопрос',
  'текст продолжил',
  'свой путь',
  'непостижимые разновидности',
  'я совсем один',
  'так счастлив',
  'мой друг',
  'вдохнуть в рисунок',
  'выразить',
  'прильнув к земле',
  'не под силу',
  'после',
  'сердечным отношение',
  'подумал он',
  'нерегулярным питанием',
  'осмелился',
  'красный',
  'синий',
  'вверху',
  'живота',
  'с высоты',
  'с чистого листа',
  'хочешь я',
  'в глазва',
  'взгляну в',
  'твои глаза',
  'и слова',
  'припомню все',
  'и снова повторю',
  'кто тебе сказал',
  'ну',
  'кто тебе сказал',
  'кто придумал',
  'что тебя',
  'я',
  'не',
  'люблю',
  'я каждый жест',
  'каждый',
  'взгляд твой',
  'в душе берегу',
  'твой голос',
  'в серде моем',
  'звуччит звеня',
  'нет',
  'никогда',
  'я тебя',
  'разлюбить не смогу',
  'и',
  'ты люби',
  'ты всегда',
  'люби меня',
  'ты решилва',
  'все',
  'что было',
  'больше не вернешь',
  'сердце пусто',
  'вместо чувства',
  'в нем осталась',
  'ложь',
  'и казалось',
  'не осталось',
  'верного пути',
  'выбор сделан',
  'ты б хотела',
  'навсегда',
  'уйти',
  'навсегда уйти',
  'навсегда уйти',
  'и с чистого листа',
  'опять',
  'начнешь сначала',
  'звоню в',
  'последний раз',
  'а',
  'голос мой',
  'сотри',
  'и с чистого',
  'листа',
  'и снова все',
  'сначала',
  'закончилась',
  'про нас',
  'история любви',
  'история',
  'любви',
  'смелый',
  'как ветер',
  'свободный',
  'я делал все',
  'что душе угодно',
  'жил для себя',
  'год за годом',
  'крутой проявляя нрав',
  'сколько',
  'девченок хороших',
  'влюбилось в',
  'меня',
  'неосторожно',
  'всех сосчитать',
  'невозможно',
  'попробуй меня исправь',
  'и одна',
  'лишь ты',
  'много-много',
  'лет',
  'говорила нет',
  'ты одна',
  'ты такая',
  'я тебя знаю',
  'больше в мире таких',
  'таких не бывает',
  'все не то',
  'все не так',
  'ты мой друг',
  'я твой враг',
  'как же так',
  'все у нас',
  'с тоюой',
  'был',
  'апрель',
  'и в любви',
  'мы клялись',
  'но увы',
  'пролетел',
  'желтый лист',
  'по',
  'бульварам Москвы',
  'третье сентября',
  'день',
  'прощания',
  'день, когда',
  'горят',
  'костры рябин',
  'как костры горят',
  'обещяния',
  'день когда',
  'я совсем один',
  'я календарь',
  'переверну',
  'и снова третье сенятбря',
  'на фото я',
  'твое взгляну и',
  'снова тертье сентября',
  'но почему',
  'но почему',
  'расстаться все же',
  'нам пришлось',
  'но былов все',
  'у нас',
  'всерьез',
  'второго сентября'
];

const names: string[] = [
  'Милослав',
  'Федосий',
  'Александр',
  'Самойло',
  'Кирьяк',
  'Фофан',
  'Аверьян',
  'Пантелеимон',
  'Игнат',
  'Прокопий',
  'Лев',
  'Лукьян',
  'Данила',
  'Филимон',
  'Акиндин',
  'Егор',
  'Панкратий',
  'Роман',
  'Абакум',
  'Мартын',
  'Еремей',
  'Гаврило',
  'Андрон',
  'Нафанаил',
  'Гаврила',
  'Федосий',
  'Прокофий',
  'Ипатий',
  'Аврамий',
  'Артемий',
  'Вавила',
  'Харлам',
  'Давыд',
  'Мордва'
];

const surnames: string[] = [
  'Разумовский',
  'Вревский',
  'Ромодановский',
  'Скавронский',
  'Ржевский',
  'Урусов',
  'Хилков',
  'Татищев',
  'Нарышкин',
  'Бакаев',
  'Мещерский',
  'Херасков',
  'Шаховской',
  'Гершфельд',
  'Рабин',
  'Менакер',
  'Фукс',
  'Оппенгеймер',
  'Богораз',
  'Вольф',
  'Краузе',
  'Беккер',
  'Арендт',
  'Вагнер',
  'Гагин',
  'Корсак',
  'Сверчков',
  'Мухин',
  'Нигматуллин',
  'Беклемишев',
  'Великая'
];

const icons: string[] = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];

export function genText(): string[]  {
  const minParagraphCount: number = 1;
  const maxParagraphCount: number = 5;

  const minSentenceCount: number = 1;
  const maxSentenceCount: number = 10;

  const minPhraseCount: number = 2;
  const maxPhraseCount: number = 20;

  const paragraphCount: number = Math.floor(
    Math.random() * (maxParagraphCount - minParagraphCount) + minParagraphCount
  );

  const html: string[] = [];
  for (let i: number = 0; i < paragraphCount; i++) {
    let string: string = '';
    const sentenceCount: number = Math.floor(
      Math.random() * (maxSentenceCount - minSentenceCount) + minSentenceCount
    );
    for (let j: number = 0; j < sentenceCount; j++) {
      const phraseCount: number = Math.floor(
        Math.random() * (maxPhraseCount - minPhraseCount) + minPhraseCount
      );
      for (let k: number = 0; k < phraseCount; k++) {
        let phrase: string = phrases[Math.floor(Math.random() * (phrases.length - 1))];
        if (k === 0) {
          phrase = phrase.charAt(0).toUpperCase() + phrase.substr(1, phrase.length - 1);
        }
        string += `${phrase} `;
      }
      string = string.substr(0, string.length - 1);
      string += '. ';
    }
    html.push(string);
  }
  return html;
}

export function genAuthorName(): string {
  return `${surnames[Math.floor(Math.random() * (surnames.length - 1))]} ${
    names[Math.floor(Math.random() * (names.length - 1))]
  }`;
}

export function genAuthorImage(): string {
  return icons[Math.floor(Math.random() * (icons.length - 1))];
}

export function genHeadText(): string {
  const minPhraseCount: number = 2;
  const maxPhraseCount: number = 20;

  let string: string = '';

  const phraseCount: number = Math.floor(
    Math.random() * (maxPhraseCount - minPhraseCount) + minPhraseCount
  );
  for (let k: number = 0; k < phraseCount; k++) {
    let phrase: string = phrases[Math.floor(Math.random() * (phrases.length - 1))];
    if (k === 0) {
      phrase = phrase.charAt(0).toUpperCase() + phrase.substr(1, phrase.length - 1);
    }
    string += `${phrase} `;
  }
  string = string.substr(0, string.length - 1);
  string += '. ';

  return string;
}
