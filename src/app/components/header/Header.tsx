import React from 'react';
import styles from './Header.module.css';

import yaLogoLight from '../../../resources/images/yandex-mail-light.png';
import yaLogoDark from '../../../resources/images/yandex-mail-dark.png';
import {Hamburger} from './hamburger/Hamburger';
import {SearchBox} from './search-box/SearchBox';
import ThemedButton from "./themed-button/ThemedButton";
import {ThemeContext, themes} from "../../../theme/theme-context";
import {DateRangePicker} from "react-dates";
import {Moment} from "moment";
import moment from "moment";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'

interface IProps {
    changeTheme: () => void
    filterMessagesByDate: (startDate: Date, endDate: Date) => void
}

interface IState {
    startDate: Moment | null,
    endDate: Moment | null,
    focusedInput: any
}

const now = moment();

export class Header extends React.Component<IProps> {
    public state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {
            startDate: now,
            endDate: now,
            focusedInput: null
        };
    }

    handleDatesChange = ({ startDate, endDate }: { startDate: Moment | null, endDate: Moment | null }): void => {
        this.setState({ startDate, endDate });
        console.log(startDate + " " + endDate);
        if (startDate === null || endDate === null) return;
        this.props.filterMessagesByDate(startDate.toDate(), endDate.toDate())
    };

    render() {
        return (
            <div className={styles.header}>
                <Hamburger/>
                <img className={styles['ya-logo']} src={this.context === themes.light ? yaLogoLight : yaLogoDark} alt="yandex"/>
                <SearchBox/>
                <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={this.state.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={this.handleDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    small
                    showClearDates
                    showDefaultInputIcon
                    isOutsideRange={() => false}
                />
                <ThemedButton changeTheme={this.props.changeTheme}/>
            </div>
        );
    }
}

Header.contextType = ThemeContext;
