function arrayItemSum(arr: number[], iterator: number): number {
  return arr[iterator] ? arr[iterator] + arrayItemSum(arr, iterator + 1) : 0;
}

function arrayItemCounter(arr: any[], iterator: number): number {
  return arr[iterator] ? 1 + arrayItemCounter(arr, iterator + 1) : 0;
}

console.log(arrayItemSum([6, 6], 0));
console.log(arrayItemCounter([1, 1], 0));
