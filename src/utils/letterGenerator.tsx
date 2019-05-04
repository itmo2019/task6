import React from 'react';
import { getInt } from './randomFunctions';

import englandQueenLogo from '../resources/images/authors-logo/england-queen-logo.png';
import putinLogo from '../resources/images/authors-logo/putin-logo.png';
import uberLogo from '../resources/images/authors-logo/uber-logo.png';
import yaLogo from '../resources/images/authors-logo/ya-logo.png';

import letterStyles from '../components/letter/letter.module.css';

interface LetterGenerator {
  getTopic: () => string,
  getDate: () => JSX.Element,
  getAuthorName: () => string,
  getAuthorLogo: (authorName: string) => JSX.Element,
  getLetterBody: () => string
}

const LetterGenerator = function LetterGenerator(this: LetterGenerator) {
  const nounWords = [
    'собака',
    'кошка',
    'казимаки',
    'казинаки',
    'пивасик',
    'Чебурашка',
    'крокодил Гена',
    'Шапокляк',
    'устрица',
    'человечек',
    'Чика Чика'
  ];

  const verbWords = [
    'сделал',
    'съел',
    'упал',
    'изучил',
    'погладил',
    'узнал',
    'обидел',
    'зацепил',
    'обманул',
    'ударил'
  ];

  const sign = ['.', '?', '!', '!?'];

  const separators = ['a', 'но', 'однако', 'даже', 'хотя', 'к сожалению'];

  const topicNames = [
    'В Яндексе разработан новый мем',
    'Город охватила страшная эпидемия',
    'Обновление генератора писем',
    'Случайный прохожий спас маленькую девочку',
    'Новинка! OldSpice - мужик вдвойне, когда на коне'
  ];

  const authorLogoNames: any = {
    'Володя Путин': putinLogo,
    'Ярослав Балашов': yaLogo,
    'Королева of England': englandQueenLogo,
    UberProductionTV: uberLogo
  };

  const SENTENCE_COUNT_MIN = 5;

  const SENTENCE_COUNT_MAX = 10;

  const WORD_COUNT_MIN = 5;

  const WORD_COUNT_MAX = 10;

  function getSign() {
    return sign[getInt(0, sign.length)];
  }

  function getSeparator() {
    return separators[getInt(0, separators.length)];
  }

  function getWord(type: number) {
    return type === 1
      ? nounWords[getInt(0, nounWords.length)]
      : verbWords[getInt(0, verbWords.length)];
  }

  function getFirstWord(type: number) {
    const str = getWord(type);
    return str[0].toUpperCase() + str.slice(1);
  }

  function getSentence() {
    let wordCount = getInt(WORD_COUNT_MIN, WORD_COUNT_MAX);
    let res = `${getFirstWord(1)} `;
    let type = 0;
    while (wordCount-- > 0) {
      res += getWord(type);
      if (wordCount !== 0) {
        if (type === 0) {
          res += `, ${getSeparator()} `;
        } else {
          res += ' ';
        }
      }
      type = 1 - type;
    }
    return res + getSign();
  }

  function getLetter() {
    let sentenceCount = getInt(SENTENCE_COUNT_MIN, SENTENCE_COUNT_MAX);
    let res = '';
    while (sentenceCount-- > 0) {
      res += getSentence();
      res += ' ';
    }
    return res;
  }

  this.getTopic = () => {
    return topicNames[getInt(0, topicNames.length)];
  };

  this.getDate = () => {
    const today = new Date();
    return (
      <time dateTime={today.toISOString()}>
        {today.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}
      </time>
    );
  };

  this.getAuthorName = () => {
    const authorNames = Object.keys(authorLogoNames);
    return authorNames[getInt(0, authorNames.length)];
  };

  this.getAuthorLogo = (authorName: string) => {
    const authorLogoName = authorLogoNames[authorName];
    return authorLogoName === undefined ? (
      <div className={letterStyles.author_noLogo}>{authorName[0].toUpperCase()}</div>
    ) : (
      <img className={letterStyles.author_hasLogo} src={authorLogoName} alt={authorLogoName} />
    );
  };

  this.getLetterBody = () => {
    return getLetter();
  };
} as any as { new (): LetterGenerator; };

export default LetterGenerator;
