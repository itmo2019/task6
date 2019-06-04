import React from 'react';

import './window.css';
import Menu from '../menu';
import NewBox from '../newBox';
import NewButton from '../newButton';
import ColorButton from '../colorButton';
import Logo from '../logo';

import Letters from '../letters';
import Find from '../find';


import * as Markov from '../source/markov';
import ILetter from '../interfaces/ILetter'

let letterIDCounter = 1
const authors = ["Александр Пушкин", "Петр Гринев", "Маша Миронова", "Емельян Пугачев", "Швабрин", "Савельич", "Капитан Миронов", "Капитанша Василиса Егоровна", "Иван Игнатьич", "Зурин", "Бопре", "Екатерина II", "Генерал Андрей Карпович", "Отец Петра Гринева", "Мать Петра Гринева"]
const MAXNUMOFLETTERS = 30
function genAuthtor() {
    const  i =  Math.random() * authors.length
        return authors[~~i]
}
function filter (letters : ILetter[], filterText: string) {
  let shownLetters = 0;
      const filteredLetters:ILetter[]  = [];
      const fullPredicate = (letter : ILetter) => {
        if (filterText === '') {
          return true;
        }
        const filterTextLowerCased = filterText.toLowerCase();
        return (letter.authtor.toLowerCase().indexOf(filterTextLowerCased) !== -1 
          || letter.textletter.toLowerCase().indexOf(filterTextLowerCased) !== -1)
      };
      letters.forEach(letter => {
        const newLetter = Object.assign({}, letter);
        if (fullPredicate(newLetter) && shownLetters < MAXNUMOFLETTERS) {
          newLetter.display = true;
          newLetter.hidden = false;
          shownLetters++;
        } else {
          newLetter.hidden = true;
          newLetter.display = false;
        }
        filteredLetters.push(newLetter);
      });

      return filteredLetters;
}
interface IProps {
  
}
interface IState {
  currentTheme: string;
  filterText: string;
  letters: ILetter[];
  isVisibale: boolean;
  cntletters: number;
  isAllSelected: boolean;
  deleteSelected: boolean;
  //selectedLetters: boolean[];
}

class Window extends  React.Component<IProps, IState> {
	constructor(props: IProps) {
    	super(props);
    	this.state = {
        currentTheme: "ligth",
        filterText: '',
    		letters: [{
    			id: 1,
    			logo_authtor: 'Я',
    			authtor: "Яндекс.Паспорт",
    			textletter: "Доступ к аккаунту востановлен",
    			date: "6 авг",
    			isUnread: true,
          hidden: false,
          deleted: false,
          display: true
    		}],
    		isVisibale: false,
    		cntletters: 1,
    		isAllSelected: false,
        deleteSelected: false
    	};
    }
    // componentDidMount() {
    //   var t1 =  Math.floor(Math.random() * (600000 - 10 + 1) + 10)
    //   console.log(t1)
    //   var p = setTimeout(runGeneration(), t1)
    // }

    setNewAllSelected(isAllSelected : boolean) {
      this.setState({ isAllSelected });
      // console.log(this.state)
    }
    resetDel = () => {
      this.setState(state => {
        return {
          deleteSelected:false
        };
      });
    }
    setDelete = () => {
      console.log("DELETE")
      this.setState(state => {
        return {
          deleteSelected:true
        };
      });
    }
    markAsRead = (id : number) => {
      console.log(id - 1)
      var newLetters = this.state.letters
      // newLetters[id - 1].isUnread = false
      newLetters.forEach(letter => {
        if (letter.id===id) {
          letter.isUnread = false;
        }
      });
      this.setState(state => {
        return{
          letters: newLetters
        }
      })
    } 
    markAsDel = (delIDs : boolean[]) => {
      console.log (this.state.letters)
      console.log(delIDs)
      var newLetters = this.state.letters
      var cntToDel = 0
      newLetters.forEach(letter => {
        if (delIDs[letter.id]) {
          letter.deleted = true;
          cntToDel++
        }
      });
      this.setState (state => {
        return {letters: newLetters
        }
      })
      // console.log('hihihih')
      // console.log(this.state)
      const self = this;
      function animateImpl() {
        self.setState(state => {
        newLetters = state.letters
        if (state.letters.length >= MAXNUMOFLETTERS) {
          /*добавь первое из списка спрятанных*/
          for (var i = 0; i < newLetters.length; i++) {
            if (newLetters[i].hidden) {
            newLetters[i].display = true
            newLetters[i].hidden = false
            cntToDel--
            if (cntToDel==0) break;
          }
          }
        }

        return {
          letters: newLetters.filter((letter) => !delIDs[letter.id])
        };
         });
      }
      var animationTimeoutId = setTimeout(animateImpl, 300);
      
      console.log(this.state)
    }
    changeColor = () => {
      var newTheme: string = ""
      if (this.state.currentTheme==="ligth") {
        console.log ('l')
        newTheme = "dark"
      } else {
        console.log ('d')
        newTheme = "ligth"
      }
      this.setState (state => {
        return {currentTheme: newTheme
        }
      })

    }

    addNewLetter = () => {
      const date = "20 июн"
      const authtor = genAuthtor()
      const logo_authtor = authtor[0]
      const isUnread = true
      const deleted = false
      const added = false
      const display = true
      const textletter = Markov.generate()
      letterIDCounter++

      const hidden = false
      
      this.setState(state => {
        var newLetters = state.letters
        if (state.letters.length >= MAXNUMOFLETTERS) {
          newLetters[MAXNUMOFLETTERS - 1].display = false
          newLetters[MAXNUMOFLETTERS - 1].hidden = true
        }
        return {
          filterText: '',
          letters: [
            {
              id: letterIDCounter,
              logo_authtor: logo_authtor,
              authtor: authtor,
              textletter: textletter,
              date: date,
              isUnread: isUnread,
              hidden: hidden,
              display: display,
              deleted: deleted

            },
            ...newLetters
          ]
          // ...state.textletter
          // ]
        };
      });


      }
      
    runGeneration = () => {
        const t2 = Math.floor(Math.random() * (600000 - 300000 + 1) + 300000)
        console.log(t2)
        this.addNewLetter()
        var p = setTimeout(this.runGeneration, t2)
    }

    
    onFilterTextChange(filterTextEvent : string) {

      const filterText = filterTextEvent;
      const self = this;
      const prevLetters = this.state.letters;
      function animateImpl() {
        self.setState(prevState => {
          return {
          filterText,
          letters: filter(prevState.letters, filterText)
          };
        });
      }
      // function spinnerStop() {
      //   const spinner = document.getElementById("spinner") as HTMLElement;
      //   spinner.style.display = "none"
      // }

      this.setState(prevState => {
        return {
          filterText
        };
      });

      // const spinner = document.getElementById("spinner") as HTMLElement;
      // spinner.style.display = "block"
      animateImpl()
      // filterTextEvent.target.value = ""
     // setTimeout(spinnerStop, 500)
    }

    render() {
    	return (
    		<main  className={ this.state.currentTheme === 'dark' ? 'dark-window' : 'light-window' }>
          <Logo currentTheme = {this.state.currentTheme}/>
          <Find filterText={this.state.filterText}
            onFilterChange={this.onFilterTextChange.bind(this)}
          />
          <NewButton  addNewLetter = {this.addNewLetter} 
             />
          <ColorButton  changeColor = {this.changeColor} 
             />
    			<NewBox />
    			<Menu />

          <Letters  letters={this.state.letters} 
            currentTheme = {this.state.currentTheme}
            isAllSelected = {this.state.isAllSelected}
            toBeDeleted = {this.state.deleteSelected}
            resetDel = {this.resetDel.bind(this)}
            markAsDel = {this.markAsDel}
            markAsRead = {this.markAsRead}
            setNewAllSelected = {this.setNewAllSelected.bind(this)}
              onDelete = {this.setDelete}
            />
    		</main>
    	);
    }


}

export default Window;