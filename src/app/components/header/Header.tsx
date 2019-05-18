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
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'

interface IProps {
    changeTheme: () => void
    handleDatesChange: ( arg : {startDate: Moment | null, endDate: Moment | null}) => void
    startDate: Moment | null,
    endDate: Moment | null,
    focusedInput: any
    updateFocus: (focusedInput: any) => void
}

export class Header extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <Hamburger/>
                <img className={styles['ya-logo']} src={this.context === themes.light ? yaLogoLight : yaLogoDark}
                     alt="yandex"/>
                <SearchBox/>
                <div className={`calendarWrapper ${this.context === themes.light ? "" : "dark"}`}>
                    <DateRangePicker
                        startDate={this.props.startDate}
                        startDateId="your_unique_start_date_id"
                        endDate={this.props.endDate}
                        endDateId="your_unique_end_date_id"
                        onDatesChange={this.props.handleDatesChange}
                        focusedInput={this.props.focusedInput}
                        onFocusChange={focusedInput => this.props.updateFocus(focusedInput)}
                        small
                        showClearDates
                        showDefaultInputIcon
                        isOutsideRange={() => false}
                    />
                </div>
                <ThemedButton changeTheme={this.props.changeTheme}/>
            </div>
        );
    }
}

Header.contextType = ThemeContext;
