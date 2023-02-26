/**
 * This function counts the number of item in an list recursion way.
 * @param arr list.
 * @param iterator iterator to access to each list item.
 * @returns the count of the array items.
 */
export function array_item_counter(arr: number[]): number {
  if (arr.length === 1) return 1;
  const mid = Math.floor(arr.length / 2);
  return array_item_counter(arr.slice(0, mid)) +
    array_item_counter(arr.slice(mid));
}
