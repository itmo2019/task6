import * as React from 'react'
import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import style from './Letter.module.css';
import avatar from '../../images/avatar.jpg';
import './letter-animations.css';

import { ILetter } from '../app';

interface LetterProps {
  letter: ILetter;
  toggleLetter: (id: number) => void;
}

interface LetterState {
  mounted: boolean
}

export class Letter extends Component<LetterProps, LetterState> {
  readonly state = { mounted: !this.props.letter.new };

  componentDidMount() {
    this.setState({ mounted: true })
  }

  componentWillUnmount() {
    this.setState({ mounted: false })
  }

  shouldComponentUpdate(nextProps: Readonly<LetterProps>, nextState: Readonly<LetterState>): boolean {
    return this.props.letter !== nextProps.letter || nextState.mounted !== this.state.mounted;
  }

  render() {
    const letter = this.props.letter;
    const { icon } = letter;
    const indicatorClassList = [style.unreadIndicator];
    const liClassList = [style.letter];
    if (letter.unread) {
      indicatorClassList.push(style.unreadIndicator_active);
      liClassList.push(style.unread);
    }
    let iconJSX;
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
    const toggleThisLetter = () => this.props.toggleLetter(letter.key);

    const innerJsx = (
      <div>
        <input
          className={style.checkbox}
          type="checkbox"
          onChange={toggleThisLetter}
          checked={letter.selected ? letter.selected : false}
        />
        {iconJSX}
        <div className={style.author}>{letter.author}</div>
        <div className={indicatorClassList.join(' ')}/>
        <div className={style.title}>{letter.title}</div>
        <div className={style.date}>{letter.date}</div>
      </div>
    );

    let letterJSX;
    if (letter.story) {
      letterJSX = (
        <li className={liClassList.join(' ')} key={letter.key}>
          <label className={style.specialLetter} htmlFor="show">
            {innerJsx}
          </label>
        </li>
      );
    } else {
      letterJSX = (
        <li className={liClassList.join(' ')} key={letter.key}>
          {innerJsx}
        </li>
      );
    }

    return (
      <CSSTransition
        in={this.state.mounted}
        classNames="letter"
        timeout={{ enter: 2000, exit: 500 }}
        key={letter.key}
      >
        {letterJSX}
      </CSSTransition>
    );
  }
}
