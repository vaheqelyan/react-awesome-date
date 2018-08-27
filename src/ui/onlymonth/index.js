import React from 'react';
import { RightArrow, LeftArrow } from '../ui_arrow/index';

export function headerRenderer({ next, prev, monthName, year }) {
  return (
    <React.Fragment>
      <div className="rad--ui--onlymonth">
        <LeftArrow onClick={prev} />
        <div>
          {monthName}, {year}
        </div>
        <RightArrow onClick={next} />
      </div>
    </React.Fragment>
  );
}
