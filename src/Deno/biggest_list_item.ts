export function biggestListItem(
  arr: number[],
  iterator: number,
  biggestItem: number
): number {
  if (arr[iterator] > biggestItem) biggestItem = arr[iterator];

  return arr[++iterator]
    ? biggestListItem(arr, iterator, biggestItem)
    : biggestItem;
}
