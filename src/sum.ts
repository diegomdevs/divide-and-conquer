function sum(arr: number[]) {
  return arr.length != 0 ? arr[0] + sum(arr.slice(1)) : 0;
}

function arrayItemCounter(arr: any[]) {
  return arr.length === 0 ? 0 : 1 + arrayItemCounter(arr.slice(1));
}

console.log(sum([6, 6]));
console.log(arrayItemCounter([1, 1]));
