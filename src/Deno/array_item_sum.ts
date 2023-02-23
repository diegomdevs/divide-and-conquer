/**
 * This function sums all items of a list using recursion way.
 * @param arr list.
 * @param iterator iterator to access to each list item.
 * @returns the sum of all array items.
 */
export function array_item_sum<T extends number>(arr: T[]): number {
  if (arr.length != 1) {
    const middle = Math.floor(arr.length / 2);

    return array_item_sum(arr.slice(0, middle)) +
      array_item_sum(arr.slice(middle));
  }
  return arr[0];
}
