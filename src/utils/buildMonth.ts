export interface IBuildMonthResult {
  date: number;
  day: string;
  h: boolean;
  month: number;
  year: number;
}

function getDaysArray(year: number, month: number): IBuildMonthResult[] {
  const names: string[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const date: Date = new Date(year, month - 1, 1);
  const result: IBuildMonthResult[] = [];
  while (date.getMonth() === month - 1) {
    result.push({
      date: date.getDate(),
      day: names[date.getDay()],
      h: true,
      month,
      year,
    });

    date.setDate(date.getDate() + 1);
  }
  return result;
}

function chunk_inefficient(chunkSize: number, arr: IBuildMonthResult[]): IBuildMonthResult[][] {
  const array = arr;
  return [].concat.apply(
    [],
    array.map((elem: IBuildMonthResult, i: number) => {
      return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
    }),
  );
}

export function buildMonth(year: number, month: number): IBuildMonthResult[][] {
  const names: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const date: Date = new Date(year, month - 1, 1);
  const result: IBuildMonthResult[] = [];
  while (date.getMonth() === month - 1) {
    result.push({
      date: date.getDate(),
      day: names[date.getDay()],
      year,
      month,
      h: false,
    });

    date.setDate(date.getDate() + 1);
  }

  const { day: first } = result[0];
  let p: number = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i] === first) {
      break;
    } else {
      p += 1;
    }
  }

  if (month === 1) {
    const r = getDaysArray(year - 1, 12);
    const x = r.slice(Math.max(r.length - p, 1));
    result.splice(0, 0, ...x);
  } else {
    const r = getDaysArray(year, month - 1);
    const x = r.slice(Math.max(r.length - p, 1));
    result.splice(0, 0, ...x);
  }

  const chunks = chunk_inefficient(7, result);
  const {length} = chunks;
  if (month === 12) {
    if (length === 6) {
      const nextmonth: number = 7 - chunks[5].length;
      const y = getDaysArray(year + 1, 1);
      const b = y.slice(0, nextmonth);
      chunks.push(b);
    }
    if (length === 5) {
      let nextmonth: number = 7 - chunks[4].length;
      nextmonth += 7;
      const y = getDaysArray(year + 1, 1);
      const b = y.slice(0, nextmonth);
      chunks.push(b);
    }
  } else {
    if (length === 6) {
      const nextmonth: number = 7 - chunks[5].length;
      const y = getDaysArray(year, month + 1);
      const b = y.slice(0, nextmonth);
      chunks.push(b);
    }
    if (length === 5) {
      let nextmonth: number = 7 - chunks[4].length;
      nextmonth += 7;
      const y = getDaysArray(year, month + 1);
      const b = y.slice(0, nextmonth);
      chunks.push(b);
    }
  }

  return chunks;
}
