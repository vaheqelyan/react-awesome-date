import * as React from "react";

import cc from "classcat";

import { buildMonth, IBuildMonthResult } from "./utils/buildMonth";

import { ARRAY_DAYS, MONTH_NAMES } from "./const";

import { dayRenderer, headerRenderer, renderWeeks } from "./ui/default/index";

export interface IDate {
  prev: () => void;
  next: () => void;
  year: number;
  month: number;
  monthName: string;
  update: (year: number, month: number) => void;
  nextYear: () => void;
  prevYear: () => void;
}

export interface ICalendarProps {
  saveSelection: boolean;
  year?: number;
  month?: number;
  headerRenderer?: (date: IDate) => JSX.Element;
  dayRenderer?: (
    value: IBuildMonthResult,
    index: number,
    iSelected: boolean,
    needHighlight: boolean,
    select: (item: IBuildMonthResult) => void
  ) => JSX.Element;
  renderWeeks?: (value: string, index: number) => JSX.Element;
}

export interface IDayItem {
  day: string | null;
  date: number | null;
}

export interface ICalendarState {
  calendar: IBuildMonthResult[][];
  selected: IDayItem;
}

class Calendar extends React.Component<ICalendarProps, ICalendarState> {
  public static defaultProps: ICalendarProps = {
    renderWeeks: renderWeeks,
    saveSelection: true,
    headerRenderer: headerRenderer,
    dayRenderer: dayRenderer
  };
  public year: number;
  public month: number;
  public monthNames: string[];

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
      this.setState({ calendar: buildMonth(this.year, this.month) });
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
      this.setState({ calendar: buildMonth(this.year, this.month) });
    }
  };

  public next = () => {
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
      this.setState({ calendar: buildMonth(this.year, this.month) });
    }
  };
  public prev = () => {
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
      this.setState({ calendar: buildMonth(this.year, this.month) });
    }
  };
  public pick = (item: any) => {
    const { day, date, h, month, year } = item;
    if (!h) {
      this.setState({ selected: { day, date } });
    } else {
      this.setState({ calendar: buildMonth(year, month) });
      this.month = month;
      this.year = year;
    }
  };
  public update = (year, month) => {
    this.month = month;
    this.year = year;
    this.setState({ calendar: buildMonth(this.year, this.month) });
  };
  public date = (): IDate => {
    return {
      next: this.next,
      month: this.month,
      monthName: this.monthNames[this.month - 1],
      prev: this.prev,
      update: this.update,
      year: this.year,
      nextYear: this.nextYear,
      prevYear: this.prevYear
    };
  };

  public render() {
    const daysJSX = this.state.calendar.map((array: IBuildMonthResult[]) => {
      return array.map((value: IBuildMonthResult, index: number) => {
        const { date, h } = value;
        const iSelected: boolean = date === this.state.selected.date && !h;
        const needHighlight: boolean = h;

        return this.props.dayRenderer(value, index, iSelected, needHighlight, this.pick.bind(null, value));
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
