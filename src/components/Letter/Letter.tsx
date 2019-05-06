import * as React from 'react'
import { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

import style from './Letter.module.css';
import avatar from '../../images/avatar.jpg';
import './letter-animations.css';

import { ILetter } from '../app';

interface LetterProps {
  letter: ILetter;
  toggleLetter: (id: number) => void;
  passedStyle: any;
}

interface LetterState {
  mounted: boolean
}

export class Letter extends PureComponent<LetterProps, LetterState> {
  readonly state = { mounted: !this.props.letter.new };

  componentDidMount() {
    this.setState({ mounted: true })
  }

  componentWillReceiveProps(nextProps: Readonly<LetterProps>, nextContext: any): void {
    if (nextProps.letter.deleted) {
      console.log(nextProps.letter.deleted);
      this.setState({ mounted: false })
    }
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

    const { left, ...passedStyle } = this.props.passedStyle;

    if (letter.story) {
      letterJSX = (
        <li style={{...passedStyle}} className={liClassList.join(' ')} key={letter.key}>
          <label className={style.specialLetter} htmlFor="show">
            {innerJsx}
          </label>
        </li>
      );
    } else {
      letterJSX = (
        <li style={{...passedStyle}} className={liClassList.join(' ')} key={letter.key}>
          {innerJsx}
        </li>
      );
    }

    return (
      <CSSTransition
        in={this.state.mounted}
        classNames="letter"
        onEnter={() => this.props.letter.new = false}
        onExit={() => console.info("fuck me")}
        timeout={{ enter: 2000, exit: 50000 }}
        key={letter.key}
      >
        {letterJSX}
      </CSSTransition>
    );
  }
}
