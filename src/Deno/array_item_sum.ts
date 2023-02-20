/**
 * This function sums all items of a list using recursion way.
 * @param arr list.
 * @param iterator iterator to access to each list item.
 * @returns the sum of all array items.
 */
export function arrayItemSum<T extends number>(arr: T[]): number {
  if (arr.length != 0) {
    const [value, ...rest] = arr;
    return value + arrayItemSum(rest);
  } else return 0;
}
export function arrayItemSumDaC<T extends number>(arr: T[]): number {
  if (arr.length != 1) {
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const leftSum = arrayItemSumDaC(left);
    const rightSum = arrayItemSumDaC(right);

    return leftSum + rightSum;
  }
  return arr[0];
}
