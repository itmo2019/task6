import React, { Component } from 'react';
import cx from 'classnames';
import Toolbar from '../toolbar/toolbar';
import LetterDialog from '../letterDialog/letterDialog';
import SupportLine from '../supportLine/supportLine';
import LetterGenerator from '../../utils/letterGenerator';
import Letter from '../letter/letter';
import LetterList from './letterList';
import Hr from './hr';

import { getInt } from '../../utils/randomFunctions';

import ILetter from './ILetter';
import IToolbarItem from '../toolbar/toolBarItem';

import letterStyles from '../letter/letter.module.css';
import styles from './letterBox.module.css';

interface IProps {
  className?: string;
  theme: string;
  filterText: string;
  changeFilterProgress: (value: number) => void;
}

interface IState {
  curPage: number;
  letters: ILetter[];
  isMailVisible: boolean;
  mailContent: any;
  isCheckAll: boolean;
  selectLetterCount: number;
}

export default class LetterBox extends Component<IProps, IState> {
  static displayName = 'LetterBox';

  MIN_TIMER_ADD_MAIL = 300000;

  MAX_TIMER_ADD_MAIL = 600001;

  MAX_MAIL_LIST_SIZE = 30;

  REMOVE_LETTER_TIME = 500;

  DELTA_TIME = 20;

  letterId = 0;

  letterGenerator = new LetterGenerator();

  timerOuterID: NodeJS.Timeout = setTimeout(() => {}, 0);

  timerInnerID: NodeJS.Timeout = setTimeout(() => {}, 0);

  constructor(props: IProps) {
    super(props);
    this.state = {
      curPage: 1,
      letters: [],
      isMailVisible: false,
      mailContent: undefined,
      isCheckAll: false,
      selectLetterCount: 0
    };
  }

  componentDidMount() {
    const self = this;
    this.timerOuterID = setTimeout(function run() {
      self.newMail();
      const timer = getInt(self.MIN_TIMER_ADD_MAIL, self.MAX_TIMER_ADD_MAIL);
      self.timerInnerID = setTimeout(run, timer);
    }, getInt(self.DELTA_TIME, self.MAX_TIMER_ADD_MAIL));
  }

  componentWillUnmount() {
    clearTimeout(this.timerOuterID);
    clearTimeout(this.timerInnerID);
  }

  setCheckAll = (value: boolean) => {
    this.setState({ isCheckAll: value });
  };

  getRandomLetter = () => {
    const authorName = this.letterGenerator.getAuthorName();
    return {
      id: this.letterId++,
      isChecked: false,
      isUnread: true,
      authorName,
      authorLogo: this.letterGenerator.getAuthorLogo(authorName),
      topic: this.letterGenerator.getTopic(),
      body: this.letterGenerator.getLetterBody(),
      date: this.letterGenerator.getDate(),
      hasRemoveAnimation: false
    };
  };

  newMail = () => {
    this.setState(state => {
      const letters = state.letters;
      let { selectLetterCount } = state;
      if (letters.length >= state.curPage * this.MAX_MAIL_LIST_SIZE) {
        if (letters[state.curPage * this.MAX_MAIL_LIST_SIZE - 1].isChecked) {
          selectLetterCount--;
        }
        letters[state.curPage * this.MAX_MAIL_LIST_SIZE - 1].isChecked = false;
      }
      return {
        letters: [this.getRandomLetter(), ...letters],
        selectLetterCount
      };
    });
    this.setCheckAll(false);
  };

  doActionWithLetters = (action: (i: number) => void) => {
    const { curPage, letters } = this.state;
    const first = (curPage - 1) * this.MAX_MAIL_LIST_SIZE;
    for (let i = Math.min(letters.length, curPage * this.MAX_MAIL_LIST_SIZE) - 1; i >= first; i--) {
      if (letters[i].isChecked) {
        action(i);
      }
    }
  };

  removeAnimateLetter = (index: number) => {
    setTimeout(() => {
      this.setState(state => {
        const letters = state.letters.slice();
        letters[index].hasRemoveAnimation = true;
        return { letters };
      });
      setTimeout(() => {
        this.setState(state => {
          const letters = state.letters.slice();
          letters.splice(index, 1);
          return { letters, selectLetterCount: state.selectLetterCount - 1 };
        });
      }, this.REMOVE_LETTER_TIME);
    }, this.DELTA_TIME);
  };

  handleRemoveButtonClick = () => {
    setTimeout(() => {
      this.setCheckAll(false);
    }, this.REMOVE_LETTER_TIME);
    this.doActionWithLetters(this.removeAnimateLetter);
  };

  unmarkLetter = (index: number) => {
    if (this.state.letters[index].isUnread) {
      this.setState(state => {
        const letters = state.letters.slice();
        letters[index].isUnread = false;
        return { letters };
      });
    }
  };

  handleUnmarkButtonClick = () => {
    this.doActionWithLetters(this.unmarkLetter);
  };

  handleMailCheckClick = (index: number) => {
    this.setState(state => {
      const letters = state.letters.slice();
      const checked = letters[index].isChecked;
      const isCheckAll = checked ? !checked : state.isCheckAll;
      const selectLetterCount = state.selectLetterCount + (checked ? -1 : 1);
      letters[index].isChecked = !checked;
      return { letters, isCheckAll, selectLetterCount };
    });
  };

  handleCheckAllClick = () => {
    this.setState(state => {
      const letters = state.letters.slice();
      const size = Math.min(letters.length, state.curPage * this.MAX_MAIL_LIST_SIZE);
      for (let i = (state.curPage - 1) * this.MAX_MAIL_LIST_SIZE; i < size; i++) {
        letters[i].isChecked = !state.isCheckAll;
      }
      const selectLetterCount = state.isCheckAll ? 0 : size;
      return { letters, isCheckAll: !state.isCheckAll, selectLetterCount };
    });
  };

  handleMailClick = (index: number) => {
    this.setState(state => {
      const mailContent = (
        <div>
          <div className={letterStyles.topic_isOpen}>{state.letters[index].topic}</div>
          <div className={letterStyles.body}>{state.letters[index].body}</div>
        </div>
      );
      return { isMailVisible: true, mailContent };
    });
    this.unmarkLetter(index);
  };

  handleMailExitClick = () => {
    this.setState({ isMailVisible: false });
  };

  getToolBarItems = (isCheckAll: boolean, selectLetterCount: number) => [
    { type: 'checkbox', value: isCheckAll, onClick: this.handleCheckAllClick },
    { type: 'button', value: 'Получить сообщение', onClick: this.newMail, isActive: true },
    { type: 'button', value: 'Переслать', isActive: selectLetterCount > 0 },
    {
      type: 'button',
      value: 'Удалить',
      onClick: this.handleRemoveButtonClick,
      isActive: selectLetterCount > 0
    },
    { type: 'button', value: 'Это спам!', isActive: selectLetterCount > 0 },
    {
      type: 'button',
      value: 'Прочитано',
      onClick: this.handleUnmarkButtonClick,
      isActive: selectLetterCount > 0
    }
  ];

  toolbarItems: IToolbarItem[] = [];

  oldSelectLetterCount: number | undefined = undefined;

  oldIsCheckAll: boolean | undefined = undefined;

  render() {
    const {
      curPage,
      letters,
      isMailVisible,
      mailContent,
      selectLetterCount,
      isCheckAll
    } = this.state;
    const { className, theme, filterText, changeFilterProgress } = this.props;

    const letterMapper = (letter: ILetter, index: number) => (
      <Letter
        key={letter.id}
        className={styles.letter}
        authorLogo={letter.authorLogo}
        authorName={letter.authorName}
        topic={letter.topic}
        date={letter.date}
        isUnread={letter.isUnread}
        isChecked={letter.isChecked}
        hiddenMail={
          letters.length > curPage * this.MAX_MAIL_LIST_SIZE &&
          index >= curPage * this.MAX_MAIL_LIST_SIZE
        }
        hasRemoveAnimation={letter.hasRemoveAnimation}
        handleMailClick={this.handleMailClick.bind(this, index)}
        handleMailCheckClick={this.handleMailCheckClick.bind(this, index)}
        theme={theme}
      />
    );

    if (this.oldSelectLetterCount !== selectLetterCount || this.oldIsCheckAll !== isCheckAll) {
      this.toolbarItems = this.getToolBarItems(isCheckAll, selectLetterCount);
      this.oldSelectLetterCount = selectLetterCount;
      this.oldIsCheckAll = isCheckAll;
    }

    const letterBoxClassName = cx(styles.box, className, styles[`box_theme_${theme}`]);

    return (
      <div className={letterBoxClassName}>
        <Toolbar theme={theme}>{this.toolbarItems}</Toolbar>
        <Hr />
        <LetterDialog isVisible={isMailVisible} onExitClick={this.handleMailExitClick}>
          {mailContent}
        </LetterDialog>
        <LetterList
          filterText={filterText.toLowerCase()}
          letters={letters}
          mapper={letterMapper}
          theme={theme}
          changeFilterProgress={changeFilterProgress}
          listMaxSize={this.MAX_MAIL_LIST_SIZE}
        />
        <div className={styles.supportLine}>
          <Hr />
          <SupportLine theme={theme} />
        </div>
      </div>
    );
  }
}
