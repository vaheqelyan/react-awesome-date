
### Custom renderer

```jsx

function headerRenderer(){}

function dayRenderer(){}

function dateRenderer(){}

<Date
 headerRenderer={headerRenderer}
 dayRenderer={dayRenderer}
 dateRenderer={dateRenderer}
/>
```
***

#### headerRenderer
Renders a control header

<ul>
<li>month <code>number</code><br/> Returns the month  </li>
<li>monthName <code>string</code> <br/>Returns the month name <code>[
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];</code></li>
<li>year <code>number</code> <br/> Returns the year</li>
<li>next <code>function</code><br/>  Select the next month</li>
<li>prev <code>function</code> <br/> Select the previous month</li>
<li>nextYear <code>function</code> <br/> Select the next year </li>
<li>prevYear <code>function</code> <br/> Select the previous year </li>
<li>today <code>function</code> <br/> Select the current date of the current month and year</li>
<li>update <code>function</code> <br/> 
Sets the current year and month <code>update( year: number, month: number)</code>
 </li>
</ul>


##### Sample custom renderer
```jsx
function headerRenderer({ next, prev, monthName, year }) {
  return (
    <div>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
      {monthName} / {year}
    </div>
  );
}

```

#### dayRenderer

Renders a row. it has the following arguments

<ul>
<li>value <code>string</code> <br/> Returns the day of the week
</li>
<li>index</li>
</ul>

##### Sample custom render
```jsx
function dayRenderer(value,index){
  return <div key={index}>{value}</div>
}
```


#### dateRenderer

Renders a row for a date.

<ul>
<li>value</li>
<li>index <code>number</code> </li>
<li>isSelected <code>boolean</code> <br/> Date selected by the user </li>
<li>needHighlight <code>boolean</code></li>
<li>select <code>function</code><br/> Select current date </li>
</ul>


##### Sample custom renderer
```jsx
function dateRenderer(value, index, iSelected, needHighlight, select) {
  return (
    <div
      key={index}
      onClick={() => {
        console.log(value);
        select()
      }}
      className={cc({
        "rad__days--day": true,
        "selected_class": iSelected,
        "background_color": needHighlight
      })}
    >
      {value.date}
    </div>
  );
}

```
