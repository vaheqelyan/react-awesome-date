

## React-awesome-date


![](https://res.cloudinary.com/dmtrk3yns/image/upload/fl_lossy/v1534855743/ezgif.com-optimize_1_ljtckc.gif)


### Installation

---

**via NPM**

```code
npm i react-awesome-date
```

**via Yarn**

```code
yarn add react-awesome-date
```

**via CDN (unpkg)**

```code
https://unpkg.com/react-awesome-date@latest/dest/react-awesome-date.js
```

Be sure to include the style sheet. It is located in the /styles folder.
You must use two css files. One for calendar styles, and one for the styles user interface
```jsx
import "react-awesome-date/styles/index.css"
import "react-awesome-date/styles/ui_default.css"
```
Or
```html
<link rel="stylesheet" href="https://unpkg.com/react-awesome-date@latest/index.css">
<link rel="stylesheet" href="https://unpkg.com/react-awesome-date@latest/ui_default.css">
```

### Usage
```jsx
import Date from 'react-awesome-date';

<Date year={1998} month={3} />
```
By default, the date will be inserted for the current month and year
```jsx
<Date />
```

#### Event
Get the selected date using onSelect
```jsx
function onSelect(date){
	// ...
}
<Date onSelect={onSelect}/>
```

<ul>
	<li> value 
		<ul>
			<li>date
				<br/>Current selected day of the month 
			</li>
			<li>day
				<br/> Current selected day of the week 
			</li>
			<li>month
				<br/> Returns the month 
			</li>
			<li>year 
				<br/> Returns the year
			</li>
		</ul>
	</li>
</ul>


### Custom render 
Organize your own rendering or use ready-made samples

```jsx
import {headerRenderer as input} from 'react-awesome-date/ui/input';
import "react-awesome-date/styles/ui_input.css";

<Date headerRenderer={input}/>
```
The result is <br/>![](http://res.cloudinary.com/dmtrk3yns/image/upload/q_auto/v1535531588/ice_screenshot_20180829-123207_uri528.png)


```jsx
import {headerRenderer as onlymonth} from 'react-awesome-date/ui/onlymonth';
import "react-awesome-date/styles/ui_onlymonth.css";

<Date headerRenderer={onlymonth}/>
```
The result is <br/>![](https://res.cloudinary.com/dmtrk3yns/image/upload/q_auto/v1535541118/ice_screenshot_20180829-151115_amfyhb.png)

[Make your custom renderer](https://github.com/vaheqelyan/react-awesome-date/blob/master/CUSTOM_RENDERER.md)
