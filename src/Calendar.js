import React from 'react';
import { buildMonth } from './utils/buildMonth';
import { ARRAY_DAYS, MONTH_NAMES } from './const';
import { dayRenderer, headerRenderer, renderWeeks } from './ui/default/index';

const current_date = new Date();

class Calendar extends React.Component {
  static defaultProps = {
    renderWeeks: renderWeeks,
    saveSelection: true,
    headerRenderer: headerRenderer,
    dayRenderer: dayRenderer,
    year: current_date.getFullYear(),
    month: current_date.getMonth() + 1
  };

  constructor(props) {
    super(props);
    this.year = props.year;
    this.month = props.month;
    this.monthNames = MONTH_NAMES;
    this.state = {
      calendar: buildMonth(this.year, this.month),
      selected: { day: null, date: null }
    };
  }

  nextYear = () => {
    this.year += 1;

    if (!this.props.saveSelection) {
      this.setState({
        calendar: buildMonth(this.year, this.month),
        selected: { date: null, day: null }
      });
    } else {
      this.setState({
        calendar: buildMonth(this.year, this.month)
      });
    }
  };
  prevYear = () => {
    this.year -= 1;
    if (!this.props.saveSelection) {
      this.setState({
        calendar: buildMonth(this.year, this.month),
        selected: { date: null, day: null }
      });
    } else {
      this.setState({
        calendar: buildMonth(this.year, this.month)
      });
    }
  };

  next = () => {
    // console.log(this.month + 1);
    // if (this.month >= 12) {
    //   this.year += 1;
    //   this.month = 1;
    // } else {
    //   this.month += 1;
    //   // console.log(this.month);
    // }
    // this.month += 1;
    if (this.month >= 12) {
      this.year += 1;
      this.month = 1;
    } else {
      this.month += 1;
    }
    if (!this.props.saveSelection) {
      this.setState({
        calendar: buildMonth(this.year, this.month),
        selected: { date: null, day: null }
      });
    } else {
      this.setState({
        calendar: buildMonth(this.year, this.month)
      });
    }
  };
  prev = () => {
    if (this.month === 1) {
      this.month = 12;
      this.year -= 1;
    } else {
      this.month -= 1;
    }

    if (!this.props.saveSelection) {
      this.setState({
        calendar: buildMonth(this.year, this.month),
        selected: { date: null, day: null }
      });
    } else {
      this.setState({
        calendar: buildMonth(this.year, this.month)
      });
    }
  };
  pick = item => {
    const { day, date, h, month, year } = item;
    if (!h) {
      this.setState({
        selected: { day, date }
      });
    } else {
      this.setState({
        calendar: buildMonth(year, month)
      });
      this.month = month;
      this.year = year;
    }
  };
  update = (year, month) => {
    this.month = month;
    this.year = year;

    if (!this.props.saveSelection) {
      this.setState({
        calendar: buildMonth(this.year, this.month),
        selected: { date: null, day: null }
      });
    } else {
      this.setState({
        calendar: buildMonth(this.year, this.month)
      });
    }
  };
  date = () => {
    return {
      next: this.next,
      month: this.month,
      monthName: this.monthNames[this.month - 1],
      prev: this.prev,
      update: this.update,
      year: this.year,
      nextYear: this.nextYear,
      prevYear: this.prevYear,
      today: this.today
    };
  };
  today = () => {
    const today = new Date();
    const todayDate = today.getDate();

    this.month = today.getMonth();
    this.year = today.getFullYear();

    this.setState({
      selected: {
        day: ARRAY_DAYS[todayDate],
        date: todayDate
      },
      calendar: buildMonth(this.year, this.month)
    });
  };

  render() {
    const daysJSX = this.state.calendar.map(array => {
      return array.map((value, index) => {
        const { date, h } = value;
        const iSelected = date === this.state.selected.date && !h;
        const needHighlight = h;

        const day = {
          value,
          index,
          iSelected,
          needHighlight,
          pick: this.pick.bind(null, value)
        };

        return this.props.dayRenderer(
          value,
          index,
          iSelected,
          needHighlight,
          this.pick.bind(null, value)
        );
      });
    });

    return (
      <div className="rad-calendar">
        <div className="rad-control">{this.props.headerRenderer(this.date())}</div>
        <div className="rad-weeks">{ARRAY_DAYS.map(this.props.renderWeeks)}</div>
        <div className="rad-days">{daysJSX}</div>
      </div>
    );
  }
}

export default Calendar;
