import React from 'react';
import cc from 'classcat';
import { LeftArrow, RightArrow } from '../ui_arrow';

export function headerRenderer({ nextYear, next, prev, monthName, year }) {
  return (
    <React.Fragment>
      <div className="rad-ui-default--control-month">
        <LeftArrow prev={prev} />
        <span>{monthName}</span>
        <RightArrow next={next} />
      </div>
      <div className="rad-ui-default--control-year">
        <LeftArrow prev={prev} />
        <span>{year}</span>
        <RightArrow next={nextYear} />
      </div>
    </React.Fragment>
  );
}

export function renderWeeks(value, index) {
  return (
    <div key={index} className="rad-week rad-ui-default--week">
      {value}
    </div>
  );
}

export function dayRenderer(value, index, iSelected, needHighlight, select) {
  // index is the index
  // isSelected need for matching selected item
  // needHighlight is to matching next and previews weeks
  // select is a function for selecting item no argument needed
  return (
    <div
      key={index}
      onClick={select}
      className={cc({
        'rad__days--day': true,
        'rad__days--selected': iSelected,
        'rad__days--day--highlight': needHighlight
      })}
    >
      {value.date}
    </div>
  );
}
