import React from 'react';

export function headerRenderer({ year, update, month, today }) {
  function onChangeMonth(e) {
    update(year, parseInt(e.target.value));
  }
  function onChangeYear(e) {
    update(parseInt(e.target.value), month);
  }
  function ClickToday() {
    today();
  }
  return (
    <React.Fragment>
      <div className="rad--ui--input">
        <input
          onMouseDown={ClickToday}
          type="button"
          value="Today"
          className="rad--ui--button-today"
        />
        <input
          onChange={onChangeMonth}
          className="rad--ui-input-input rad--ui-left-border"
          type="number"
          value={month}
          min={1}
          max={12}
        />
        <input
          onChange={onChangeYear}
          className="rad--ui-input-input rad--ui-right-border"
          type="number"
          value={year}
        />
      </div>
    </React.Fragment>
  );
}
