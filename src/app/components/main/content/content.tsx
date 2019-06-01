import * as React from 'react';
import styles from './content.module.css';
import { Actions } from './actions/actions';
import { Footer } from './footer/footer';
import { LetterBoxAndEntryBoard } from './letter-box/letterBoxAndEntryBoard';
import { ILetter } from '../../../letterUtils';

interface IProps {
  nightMode: boolean;
  letters: ILetter[];
  remove: () => void;
  checkAll: (value: boolean) => void;
  check: (id: string) => void;
}

export class Content extends React.Component<IProps> {
  public render() {
    const { nightMode } = this.props;
    return (
      <div className={styles.content}>
        <Actions
          nightMode={nightMode}
          remove={this.props.remove}
          checkAll={this.props.checkAll}
        />
        <LetterBoxAndEntryBoard
          nightMode={nightMode}
          letters={this.props.letters}
          check={this.props.check}
        />
        <Footer nightMode={nightMode}/>
      </div>
    );
  }
}
