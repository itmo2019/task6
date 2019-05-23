import * as React from 'react';
import { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ILetter } from '../App/App';

import { getThemed, Theme, ThemeContext } from '../theme';

import './letter-animations.css';

import style from './Letter.module.css';
import avatar from './images/avatar.jpg';


interface LetterProps {
  letter: ILetter;
  passedStyle: any;
}

interface LetterState {
  selected: Boolean
  mounted: Boolean
}


export class Letter extends PureComponent<LetterProps, LetterState> {
  static contextType = ThemeContext;
  context!: Theme;

  readonly state = { mounted: !this.props.letter.new, selected: !!this.props.letter.selected };

  static getDerivedStateFromProps(props: LetterProps, state: LetterState): LetterState {
    return {
      selected: !!props.letter.selected,
      mounted: props.letter.deleted ? false : state.mounted
    }
  }

  toggleLetter = () => {
    this.props.letter.selected = !this.state.selected;
    this.setState(({ selected, ...rest }) => {
        return {
          selected: !selected,
          ...rest
        };
    });
  };

  componentDidMount() {
    this.setState(({ mounted, ...rest }) => ({ mounted: true, ...rest }));
  }

  render() {
    const letter = this.props.letter;
    const { icon } = letter;
    const indicatorClassList = [style.unreadIndicator];
    const theme = this.context;
    const liClassList = [getThemed(style.letter, style, theme)];
    if (letter.unread) {
      indicatorClassList.push(getThemed(style.unreadIndicator_active, style, theme));
      liClassList.push(style.unread);
    }
    let iconJSX: any;
    if (icon) {
      const color = letter.color ? letter.color : '#ff3333';
      iconJSX = (
        <div className={style.icon} style={{ backgroundColor: color }}>
          {icon}
        </div>
      );
    } else if (letter.avatar) {
      iconJSX = (
        <div className={style.icon}>
          <img alt="avatar" className={style.avatar} src={avatar}/>
        </div>
      );
    }
    const innerJsx = (
      <div>
        <input
          className={getThemed(style.checkbox, style, theme)}
          type="checkbox"
          onChange={this.toggleLetter}
          checked={this.state.selected}
        />
        {iconJSX}
        <div className={style.author}>{letter.author}</div>
        <div className={indicatorClassList.join(' ')}/>
        <div className={style.title}>{letter.title}</div>
        <div className={getThemed(style.date, style, theme)}>{letter.date}</div>
      </div>
    );

    let letterJSX;

    const { left, ...passedStyle } = this.props.passedStyle;

    if (letter.story) {
      letterJSX = (
        <li style={{ ...passedStyle }} className={liClassList.join(' ')} key={letter.key}>
          <label className={style.specialLetter} htmlFor="show">
            {innerJsx}
          </label>
        </li>
      );
    } else {
      letterJSX = (
        <li style={{ ...passedStyle }} className={liClassList.join(' ')} key={letter.key}>
          {innerJsx}
        </li>
      );
    }

    return (
      <CSSTransition
        in={this.state.mounted}
        classNames={{
          enter: 'letter-enter--' + theme,
          enterActive: 'letter-enter-active',
          enterDone: 'letter-enter-done--' + theme,
          exit: 'letter-exit',
          exitActive: 'letter-exit-active',
          exitDone: 'letter-exit-done'
        }}
        onEnter={() => this.props.letter.new = false}
        timeout={{ enter: 2000, exit: 500 }}
        key={letter.key}
      >
        {letterJSX}
      </CSSTransition>
    );
  }
}
