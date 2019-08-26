import {
  CHECK_ALL_LETTERS,
  CHECK_LETTER,
  IMailBoxState,
  MailBoxActionTypes,
  RECEIVE_LETTER,
  RECEIVE_LETTER_ANIMATION,
  REMOVE_CHECKED_LETTERS
} from './types';

const initialState: IMailBoxState = {
  letters: [],
  checkbox: false
};

export function letterListReducer(state = initialState, action: MailBoxActionTypes): IMailBoxState {
  switch (action.type) {
    case RECEIVE_LETTER:
      return {
        letters: [action.payload, ...state.letters],
        checkbox: false
      };
    case RECEIVE_LETTER_ANIMATION:
      return {
        letters: state.letters.map(letter =>
          letter.id === action.id ? { ...letter, showing: action.showing } : letter
        ),
        checkbox: state.checkbox
      };
    case CHECK_ALL_LETTERS:
      return {
        letters: state.letters.map(letter => ({ ...letter, checked: action.checked })),
        checkbox: action.checked
      };
    case CHECK_LETTER:
      return {
        letters: state.letters.map(letter =>
          letter.id === action.id ? { ...letter, checked: !letter.checked } : letter
        ),
        checkbox: false
      };
    case REMOVE_CHECKED_LETTERS:
      return {
        letters: state.letters.map(letter =>
          letter.checked ? { ...letter, removing: true } : letter
        ),
        checkbox: false
      };
    default:
      return state;
  }
}