import React, { Component } from 'react';

import './letters.css';
import Header from '../header';
import Allright from '../allright';
import Letter from '../letter';
import Texts from '../texts'

import ILetter from '../interfaces/ILetter'


interface IProps {
  isAllSelected: boolean;
  letters: ILetter[];
  setNewAllSelected: (arg0: boolean) => void;
  markAsDel: ([]) => void;
  toBeDeleted: boolean
  resetDel: () => void;
  onDelete: () => void;
  markAsRead: (arg0: number) => void;
  currentTheme: string;
}

interface IState {
  selectedLetters: boolean[];
}

export default class Letters extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
          selectedLetters: []
    };
  }
  onSelectChange(arg0 : number, arg1: boolean) {
      this.setState(prevState => {
        const newSelectedLetters = prevState.selectedLetters.slice();
        newSelectedLetters[arg0] = arg1;
        return {
          selectedLetters: newSelectedLetters
        };
      });
    }
  onSelectAll() {
        const allSelected = !this.props.isAllSelected
        const selectedLetters =this.state.selectedLetters.slice();
        const letters = this.props.letters.slice()
        if (allSelected===true) {
          letters.forEach(letter => {
            if (letter.display) {
              selectedLetters[letter.id] = true;
            }
          });
        } 
        else {
          this.props.letters.forEach(letter => {
            if (letter.display) {
              selectedLetters[letter.id] = false;
            }
          });
        }
        this.props.setNewAllSelected(allSelected);
        this.setState({selectedLetters})
    }
     onOpenClick (id : number, text : string) {
      console.log(text)
      var labelName = "show-letter" + id
      var z = document.getElementById(labelName)
      if (z==null) return;
      var y = z.nextElementSibling as HTMLElement; //крестик
      if (y==null) return;
      var x = y.nextElementSibling as HTMLElement;//текст письма
      if (x==null) return;
      var element = document.getElementById(labelName) as HTMLInputElement;
      console.log(element)
      if (element == null) {
        return;
      }
      else if (element.checked) {

        // x.setAttribute ("style.display", "block")
        // y.setAttribute ("style", "display=block")
        // x.style.display = "block";
        // console.log(x)
        // console.log(y)
        x.style.display = "block";
        y.style.display = "block";
      } else {
        // x.setAttribute ("styleDisplay", "none")
        // y.setAttribute ("styleDisplay", "none")
        // console.log(x)
        // console.log(y)
        x.style.display = "none";
        y.style.display = "none";
     }
     this.props.markAsRead(id)
     // var element = <HTMLInputElement> document.getElementById(labelName);
      // if (element==null) return;
    
    }


   deleteSelected = () => {
       // selectedLetters = this.state.selectedLetters.slice();
        this.props.markAsDel(this.state.selectedLetters);
        console.log("HERE DEL")
        if (this.props.isAllSelected) this.props.setNewAllSelected(false)
        this.setState(state => {
          return {
            selectedLetters: []
          };
        });
        this.props.resetDel()
   }
   chooseBackground = (arg0 : string) => {
    console.log(arg0)
    var tmp: string = ""
    if (arg0 =="ligth") {
      tmp =  " dark";
      console.log("NOOO")
    }
    else if (arg0 == "dark") {
      tmp =  " light";
      console.log("TEEEE")
    }
    console.log(tmp)
    return "letters body__letters" + tmp
  }
  render() {
    if (this.props.toBeDeleted) {
       this.deleteSelected()
     }
    // var letterClassName =  (this.props.currentTheme === "light" ? "dark" : "light" ) + " letters body__letters"
    console.log(this.props.currentTheme)
    return (

      <div className={this.chooseBackground(this.props.currentTheme)}>
        <Header isAllSelected = {this.props.isAllSelected} 
        onSelectAll = {this.onSelectAll.bind(this)}
        onDelete={this.props.onDelete}/>
        <div> { this.props.letters.map (letter => {
                return (
                    <Texts  letter = {letter}
                      onOpenClick = {this.onOpenClick.bind(this)}/>
                  
            )})
          }
        </div>
        <div className = "ListOfLetters">
        {
            this.props.letters.map (letter => {
                return (
                    <Letter 
                      letterId = {letter.id}
                      letterHidden = {letter.hidden}
                      letterDeleted = {letter.deleted}
                      letterUnread = {letter.isUnread}
                      letterAuthtor = {letter.authtor}
                      letterTextletter = {letter.textletter}
                      letterDate = {letter.date}
                      isSelected = {this.state.selectedLetters[letter.id]===true}
                      onSelectChange = {this.onSelectChange.bind(this)}
                    />
            )})
        }
        <div className = "letters__emptypart"></div>
        </div>
        <Allright />
      </div>
    );
  }
}