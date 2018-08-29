import React from 'react';
import cc from 'classcat';
import { LeftArrow, RightArrow } from '../ui_arrow';

export function headerRenderer({ nextYear, next, prev, monthName, year }) {
  return (
    <React.Fragment>
      <div className="rad-ui-default--control-month">
        <LeftArrow onClick={prev} />
        <span>{monthName}</span>
        <RightArrow onClick={next} />
      </div>
      <div className="rad-ui-default--control-year">
        <LeftArrow onClick={prev} />
        <span>{year}</span>
        <RightArrow onClick={nextYear} />
      </div>
    </React.Fragment>
  );
}

export function dayRenderer(value, index) {
  return (
    <div key={index} className="rad-day rad-ui-default--week">
      {value}
    </div>
  );
}

export function dateRenderer(value, index, iSelected, needHighlight, select) {
  // index is the index
  // isSelected need for matching selected item
  // needHighlight is to matching next and previews weeks
  // select is a function for selecting item no argument needed
  return (
    <div
      key={index}
      onClick={() => {
        console.log(value);
      }}
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
