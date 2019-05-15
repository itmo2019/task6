import React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';

import ILetter from './ILetter';

import styles from './letterBox.module.css';

interface IProps {
  filterText: string;
  letters: ILetter[];
  mapper: (letter: ILetter, index: number) => JSX.Element;
  theme: string;
  listMaxSize: number;
  changeFilterProgress: (value: number) => void;
}

const filterPredicate = (filterText: string, letter: ILetter) => {
  return (
    letter.authorName.toLowerCase().includes(filterText) ||
    letter.topic.toLowerCase().includes(filterText) ||
    letter.body.toLowerCase().includes(filterText)
  );
};

function filterAndMapLetters(
  arr: ILetter[],
  predicate: (val: ILetter) => boolean,
  mapper: (val: ILetter, index: number) => JSX.Element,
  maxSize: number
) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      result.push(mapper(arr[i], i));
    }
    if (result.length === maxSize) {
      return result;
    }
  }
  return result;
}

const LetterList = (props: IProps) => {
  const { filterText, letters, mapper, listMaxSize } = props;
  const listLetters = filterAndMapLetters(
    letters,
    letter => filterPredicate(filterText, letter),
    mapper,
    listMaxSize
  );

  return <ul className={styles.letterList}>{listLetters}</ul>;
};

const checkPropsChange = (props: IProps, nextProps: IProps) =>
  nextProps.filterText !== props.filterText ||
  nextProps.letters !== props.letters ||
  nextProps.theme !== props.theme;

export default shouldUpdate(checkPropsChange)(LetterList);
