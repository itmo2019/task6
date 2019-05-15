export default interface ILetter {
  id: number;
  isChecked: boolean;
  isUnread: boolean;
  authorName: string;
  authorLogo: JSX.Element;
  topic: string;
  body: string;
  date: JSX.Element;
  hasRemoveAnimation: boolean;
}
