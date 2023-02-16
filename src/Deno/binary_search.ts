export function binary_search(
  list: any[],
  target: any,
  low = 0,
  high: number
): number {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list.at(mid);
    if (guess != target) {
      if (guess < target) low = mid + 1;
      else high = mid - 1;
      return binary_search(list, target, low, high);
    } else return mid;
  }
  return -1;
}
