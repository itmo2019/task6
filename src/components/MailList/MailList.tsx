import * as React from 'react';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { Letter } from '../Letter/Letter';

import { ILetter } from '../App/App';


interface MailListProps {
  letters: ILetter[];
  toggleLetter: (id: number) => void;
}


const renderItem = ({ index, style, data }: {index: number, style: any, data: MailListProps}) => {
  const letter = data.letters[index];
  return <Letter letter={letter} toggleLetter={data.toggleLetter} key={letter.key} passedStyle={style} />;
};

function itemKey(index: number, data: MailListProps) {
  return data.letters[index].key
}


export const MailList = ({ letters, toggleLetter }: MailListProps) => {

  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          itemSize={40}
          height={height}
          itemCount={letters.length}
          width={width}
          itemData={{ letters, toggleLetter }}
          itemKey={itemKey}
          overscanCount={20}
          style={{overflowX: 'hidden', overflowY: 'auto'}}
        >
          {renderItem}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
};
