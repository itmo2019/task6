import React from 'react';

import MailsHeader from '../mails-header';
import MailsFooter from '../mails-footer';
import Mail from '../mail';

import Article0 from '../specific/article0';
import Article1 from '../specific/article1';

import YandexAvatar from '../../resources/avatar.png';
import OfflineReserve from '../../resources/OfflineReserve.json'

import { ThemeContext, IThemeContext } from '../app/app';
import { rawArticle0 } from '../specific/article0/article0';

import styles from './mails-maintenance.module.css';

interface IState { 
    mailSet: IMail[], 
    filteredSet: IMail[] | null,
    worker: NodeJS.Timeout | null, 
    searchedFor: string,
    lastScanned: number | null
}

export interface IMail {
    callbacks: { selected(checked: boolean): void },
    mailID: string,
    sender: string, 
    title: string,
    avatar: string | null,
    date: string,
    article: JSX.Element,
    raw: string,
    classList: Set<string>,
    checked: boolean
}

export default class MailsMaintenance extends React.Component {

    private readonly mailsPerPage: number
    private readonly emptyArticle: JSX.Element
    
    private mailCounter: number
    private requestsCounter: number
    
    public readonly props: {searchField: string, setSearching: (x: number) => void}
    public state: IState

    constructor(props: {searchField: string, setSearching: (x: number) => void}) {
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
         'modifyAll', 'modifyOne', 'yieldingWorker'].forEach(func => {
             that[func] = that[func].bind(that)
         })

        this.newMailTimeoutSetup(); 

        let temp = [
            this.newYandexMail(false, 'Яндекс.Паспорт', 'Доступ к аккаунту восстановлен', '6 авг', <Article0 />, rawArticle0),
            this.newEmptyYandexMail(false, 'Команда Яндекс.Почты', 'Как читать почту с мобильного', '6 июл'),
            this.newEmptyYandexMail(true, 'Команда Яндекс.Почты', 'Как читать почту с мобильного', '6 июл'),
            this.newEmptyYandexMail(true, 'Яндекс', 'Соберите всю почту в этот ящик', '6 июл')
        ]
        // for benchmarking search:
        while (temp.length < 10000) {
            temp = temp.concat(temp)
        }             
        temp = temp.concat([this.newEmptyYandexMail(false, 'Кратное письмо', 'Контрольное письмо', '32 фев')])
        while (temp.length < 1000000) {
            temp = temp.concat(temp)
        }
        temp = temp.concat([this.newEmptyYandexMail(false, 'Последнее письмо', 'Контрольное письмо', '21 июн')])

        this.state = { 
            mailSet: temp,
            filteredSet: null,
            worker: null,
            searchedFor: '',
            lastScanned: null     
        }
    }

    predicate(searchField: string): (mail: IMail) => boolean {
        return (mail: IMail) => [mail.sender, mail.title, mail.raw].some(
            (str: string) => str.toLowerCase().indexOf(searchField) !== -1
        )
    }

    yieldingWorker(searchField: string, state: IState, done: number, stt: number, fin: number) {
        const stp = (stt + 10000) < fin ? stt + 10000 : fin
        const res = state.mailSet
            .slice(stt, stp)
            .filter(this.predicate(searchField))
            .slice(0, this.mailsPerPage)
        if (stp == fin || res.length + done >= this.mailsPerPage) {
            this.props.setSearching(1)
            this.setState((state: IState) => {
                const old = state.filteredSet || []
                return {filteredSet: old.concat(res), worker: null, searchedFor: searchField, lastScanned: stp === fin ? null : stp}
            })
        } else {
            this.props.setSearching(stp / this.state.mailSet.length)
            this.setState((state: IState) => {
                const old = state.filteredSet || []
                const worker = setTimeout(() => this.yieldingWorker(searchField, state, done + res.length, stp, fin))
                return {filteredSet: old.concat(res), worker: worker, searchedFor: searchField, lastScanned: stp}
            })
        }
    }

    render() {
        const searchField: string = this.props.searchField.toLowerCase()
        const contains = (str: string) => str.toLowerCase().indexOf(searchField) !== -1
        const predicate = (mail : IMail) => [mail.sender, mail.title, mail.raw].some(contains)
        const that: MailsMaintenance = this

        if (searchField !== this.state.searchedFor) {
            if (this.props.searchField) {
                this.setState((state: IState) => {
                    if (state.worker) {
                        clearTimeout(state.worker)
                    }
                    const isPref : boolean = searchField.startsWith(state.searchedFor)
                    return {
                        searchedFor: searchField,
                        filteredSet: isPref ? (state.filteredSet || []).filter(predicate) : [],
                        worker: setTimeout(() => {
                            that.props.setSearching(0)
                            if (isPref) {
                                that.yieldingWorker(searchField, state, (state.filteredSet || []).length, state.lastScanned || 0, that.state.mailSet.length)
                            } else {
                                that.yieldingWorker(searchField, state, 0, 0, that.state.mailSet.length)
                            }
                        }, 300)
                    }
                })
            } else {
                this.setState((state: IState) => {
                    if (state.worker) {
                        clearTimeout(state.worker)
                    }
                    this.props.setSearching(1)
                    return {
                        filteredSet: null,
                        worker: null,
                        lastScanned: null,
                        searchedFor: searchField
                    }
                })
            }
        }
        const mailSet = this.state.filteredSet || this.state.mailSet
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
        this.modifyFirst(this.mailsPerPage, (mail: IMail) => {
            mail.checked = checked 
            return mail
        })
    }

    modifyAll(action: (mails: IMail[]) => IMail[]) {
        this.setState((state: IState) => {
            const result: any = {mailSet: action(state.mailSet)}
            if (state.filteredSet) {
                result.filteredSet = action(state.filteredSet)
            }
            return result
        })
    }
    modifyFirst(n: number, action: (mails: IMail) => IMail) {
        this.setState((state: IState) => {
            const act = (x: IMail[]) => x.slice(0, n).map(action).concat(x.slice(n))
            if (state.filteredSet) {
                return {filteredSet: act(state.filteredSet)}
            }
            return {mailSet: act(state.mailSet)}
        })
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
        setTimeout(() => this.setState((state : IState) => {
            if (state.worker) {
                clearTimeout(state.worker)
            }
            let newScanned: number | null = state.lastScanned
            let index: number = 0
            const resMailSet: IMail[] = state.mailSet.filter((mail: IMail) => {
                if (mail.checked && state.lastScanned && index < state.lastScanned && newScanned) {newScanned--}
                index++
                return !mail.checked
            })
            const resFiltered = state.filteredSet ? state.filteredSet.filter((mail: IMail) => !mail.checked) : null
            const worker = ((resFiltered||[]).length < (state.filteredSet||[]).length) 
                ? setTimeout(this.yieldingWorker, 0, state.searchedFor, state, (resFiltered||[]).length, newScanned, state.mailSet.length) 
                : null
            return { mailSet: resMailSet, filteredSet: resFiltered, worker: worker, lastScanned: newScanned }
        }), 200)
    }

    newMail(isRead: boolean, avatar: string | null, sender: string, title: string, date: string, article: JSX.Element, raw: string, classList: Set<string>): IMail {
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
            raw: raw,
            classList: classList,
            checked: false
        }
    }

    newYandexMail(isRead: boolean, sender: string, title: string, date: string, article: JSX.Element, raw: string): IMail {
        return this.newMail(isRead, YandexAvatar, sender, title, date, article, raw, new Set())
    }

    newEmptyYandexMail(isRead: boolean, sender: string, title: string, date: string): IMail {
        return this.newYandexMail(isRead, sender, title, date, this.emptyArticle, 
            'Текст письма не завезли. Покупайте наших слонов!');
    }

    constructMailOnPage(title: string, article: string) {
        const mail: IMail = this.newMail(false, null, 'mysterious stranger', title, this.getDate(), 
            <Article1 body={article} />, 
            article,
            new Set(['mail-title_from-delete']))
        const mailID: string = mail.mailID;
        this.setState((state: IState) => {
            let filteredSet = state.filteredSet
            if (state.searchedFor) {
                const contains = (str: string) => str.toLowerCase().indexOf(state.searchedFor.toLowerCase()) !== -1
                if ([mail.sender, mail.title, mail.raw].some(contains)) {
                    filteredSet = [mail].concat(filteredSet || [])
                }
            }
            return {mailSet: [mail].concat(state.mailSet), filteredSet: filteredSet}
        })
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
