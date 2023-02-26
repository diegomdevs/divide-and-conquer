export function quick_sort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const MID = Math.floor(arr.length / 2);
  const PIVOT = arr[MID];

  const LESS_ARR: number[] = [];
  const GREATHER_ARR: number[] = [];

  arr.forEach((element, index) => {
    if (index !== MID) {
      if (element <= PIVOT) LESS_ARR.push(element);
      else GREATHER_ARR.push(element);
    }
  });

  const LESS = quick_sort(LESS_ARR);
  const GREATHER = quick_sort(GREATHER_ARR);

  return LESS.concat(PIVOT, GREATHER);
}
