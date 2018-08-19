import * as React from "react";
import cc from "classcat";

const RightArrow = props => (
  <svg onClick={props.next} className="rad__control--arrow" width={20} height={20}>
    <desc>chevron-right</desc>
    <path
      d="M13.71 9.29l-6-6a1.003 1.003 0 0 0-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"
      fillRule="evenodd"
    />
  </svg>
);

const LeftArrow = props => (
  <svg onClick={props.prev} className="rad__control--arrow" width={20} height={20}>
    <desc>chevron-left</desc>
    <path
      d="M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L8.41 10z"
      fillRule="evenodd"
    />
  </svg>
);

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

export function renderWeeks(value: string, index: number) {
  return (
    <div key={index} className="rad-week rad-ui-default--week">
      {value}
    </div>
  );
}

export function dayRenderer(value, index, iSelected, needHighlight, select) {
  return (
    <div
      key={index}
      onClick={select}
      className={cc({
        "rad__days--day": true,
        "rad__days--selected": iSelected,
        "rad__days--day--highlight": needHighlight
      })}
    >
      {value.date}
    </div>
  );
}
