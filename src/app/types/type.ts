export interface ILetter {
  id: number;
  text: string[];
  author: string;
  subject: string;
  date: string;
  isChecked: boolean;
  isVisible: boolean;
  addAnimation: boolean;
  deleteAnimation: boolean;
}
