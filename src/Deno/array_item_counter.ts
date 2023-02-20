/**
 * This function counts the number of item in an list recursion way.
 * @param arr list.
 * @param iterator iterator to access to each list item.
 * @returns the count of the array items.
 */
function arrayItemCounter(arr: any[], iterator: number): number {
  return arr[iterator] ? 1 + arrayItemCounter(arr, iterator + 1) : 0;
}
