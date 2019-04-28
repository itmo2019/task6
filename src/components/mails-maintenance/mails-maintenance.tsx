import React from 'react';

import MailsHeader from '../mails-header';
import MailsFooter from '../mails-footer';
import Mail from '../mail';

import Article0 from '../specific/article0';
import Article1 from '../specific/article1';

import YandexAvatar from '../../resources/avatar.png';
import OfflineReserve from '../../resources/OfflineReserve.json'

import styles from './mails-maintenance.module.css';
import { ThemeContext, IThemeContext } from '../app/app';

interface IState { mailSet: IMail[] }

export interface IMail {
    callbacks: { selected(checked: boolean): void },
    mailID: string,
    sender: string, 
    title: string,
    avatar: string | null,
    date: string,
    article: JSX.Element,
    classList: Set<string>,
    checked: boolean
}

export default class MailsMaintenance extends React.Component {

    private readonly mailsPerPage: number
    private readonly emptyArticle: JSX.Element
    
    private mailCounter: number
    private requestsCounter: number
    
    public readonly props: {searchField: string}
    public state: IState

    constructor(props: {searchField: string}) {
        super(props)
        this.props = props

        this.mailsPerPage = 30

        this.emptyArticle = <div>
                                <p>Текст письма не завезли.</p> 
                                <p>Покупайте наших слонов!</p>
                            </div>
        
        this.mailCounter = 0
        this.requestsCounter = 0

        const that: any = this; // just local js magic
        ['newEmptyYandexMail', 'newYandexMail', 'deleteSelected', 'toggleSelectAll', 
         'constructMailOnPage', 'receiveMail', 'newMailTimeoutSetup', 'modifyFirst',
         'modifyAll', 'modifyOne'].forEach(func => {
             that[func] = that[func].bind(that)
         })

        this.newMailTimeoutSetup(); 

        this.state = { mailSet: [
                                    this.newYandexMail(false, 'Яндекс.Паспорт', 'Доступ к аккаунту восстановлен', '6 авг', <Article0 />),
                                    this.newEmptyYandexMail(false, 'Команда Яндекс.Почты', 'Как читать почту с мобильного', '6 июл'),
                                    this.newEmptyYandexMail(true, 'Команда Яндекс.Почты', 'Как читать почту с мобильного', '6 июл'),
                                    this.newEmptyYandexMail(true, 'Яндекс', 'Соберите всю почту в этот ящик', '6 июл')
                                ]
        }
    }

    render() {
        let mailSet: IMail[] = this.state.mailSet
        if (this.props.searchField) {
            const searchField: string = this.props.searchField.toLowerCase()
            const contains = (str: string) => str.toLowerCase().indexOf(searchField) !== -1
            mailSet = mailSet.filter((mail: IMail) => [mail.sender, mail.title].some(contains))
        }
        const className = styles['mails-maintenance']
        const className0 = ' ' + styles['mails-maintenance_dark-theme']
        return <ThemeContext.Consumer>{ (context: IThemeContext) =>
                    <div className={className + (context.value ? className0 : '')}>
                        <MailsHeader 
                            callbacks={{
                                deleteCallback: this.deleteSelected, 
                                receiveCallback: this.receiveMail}} 
                            selectCallback={this.toggleSelectAll} />
                        {mailSet
                            .slice(0, this.mailsPerPage)
                            .map(props => <Mail {...props} />)}
                        <div className={styles['pillar']}></div>
                        <div className={styles['mails-footer-wrapper']}>
                            <MailsFooter />
                        </div>  
                    </div>
            }</ThemeContext.Consumer>
    }

    toggleSelectAll(checked: boolean) {
        this.modifyFirst(this.mailsPerPage, (mails: IMail[]) => mails.map((mail: IMail) => {
            mail.checked = checked 
            return mail
        }))
    }

    modifyAll(action: (mails: IMail[]) => IMail[]) {
        this.setState((state: IState) => {return {mailSet: action(state.mailSet)}})
    }
    modifyFirst(n: number, action: (mails: IMail[]) => IMail[]) {
        this.setState((state: IState) => {return {mailSet: action(state.mailSet
                                                    .slice(0, n))
                                                 // .action(func)  
                                                    .concat(state.mailSet.slice(n))}})
    }
    modifyOne(id: string, func: (mail: IMail) => IMail) {
        const defaultElm = (mail: IMail) => mail
        this.modifyAll(this.mailMap((mail: IMail) => (mail.mailID === id) ? func(mail) : defaultElm(mail)))
    }

    mailMap(func: (mail: IMail) => IMail) { return (mails: IMail[]) => mails.map(func) }

    mailFilter(func: (mail: IMail) => boolean) { return (mails: IMail[]) => mails.filter(func) } 

    deleteSelected() {
        this.modifyAll(this.mailMap((mail: IMail) => {
            if (mail.checked) {
                mail.classList.add('mail-title_to-delete')
            }
            return mail
        }))
        setTimeout(() => 
            this.modifyAll(this.mailFilter((mail: IMail) => !mail.checked))
        , 200)
    }

    newMail(isRead: boolean, avatar: string | null, sender: string, title: string, date: string, article: JSX.Element, classList: Set<string>): IMail {
        classList.add('mail-title')
        if (isRead) {
            classList.add('mail-title_read')
        } else {
            classList.add('mail-title_unread')
        }
        
        const newID: string = 'mail-id' + this.mailCounter++;
        return {
            callbacks: {
                selected: (checked: boolean) => this.modifyOne(newID, (mail: IMail) => {
                    mail.checked = checked
                    return mail
                })},
            mailID: newID,
            sender: sender, 
            title: title,
            avatar: avatar,
            date: date,
            article: article,
            classList: classList,
            checked: false
        }
    }

    newYandexMail(isRead: boolean, sender: string, title: string, date: string, article: JSX.Element): IMail {
        return this.newMail(isRead, YandexAvatar, sender, title, date, article, new Set())
    }

    newEmptyYandexMail(isRead: boolean, sender: string, title: string, date: string): IMail {
        return this.newYandexMail(isRead, sender, title, date, this.emptyArticle);
    }

    constructMailOnPage(title: string, article: string) {
        const mail: IMail = this.newMail(false, null, 'mysterious stranger', title, this.getDate(), 
            <Article1 body={article} />, 
            new Set(['mail-title_from-delete']))
        const mailID: string = mail.mailID;
        this.setState((state: IState) => {return {mailSet: [mail].concat(state.mailSet)}})
        setTimeout(() => this.modifyOne(mailID, (mail: IMail) => {
            mail.classList.add('mail-title_to-appear'); 
            return mail
        }), 50)
        setTimeout(() => this.modifyOne(mailID, (mail: IMail) => {
            mail.classList.delete('mail-title_from-delete');
            mail.classList.delete('mail-title_to-appear');
            return mail
        }), 250)
    }

    month = ['янв.', 'фев.', 'март.', 'апр.', 'май.', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];
    getDate() {
        const temp = new Date();
        return temp.getDate() + ' ' + this.month[temp.getMonth()];                
    }  

    newMailTimeoutSetup() {
        setTimeout(() => {
            this.receiveMail(); 
            this.newMailTimeoutSetup()
        }, (Math.random() + 1) * 5*60*1000);
    }

    receiveMail() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://numbersapi.com/${this.requestsCounter}`, true);
        xhr.send();
        const that: MailsMaintenance = this
        const numberTopic: number = this.requestsCounter++
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== xhr.DONE) {return} 
            let title: string = (OfflineReserve as any)[numberTopic]
            if (xhr.status === 200) { title = xhr.responseText }
            that.constructMailOnPage(`Did ya know?.. About ${numberTopic}`, title);
        }  
    }
}
