export function binary_search(
  list: any[],
  target: any,
  low = 0,
  high: number
): number {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess != target) {
      if (guess < target) low = mid + 1;
      else high = mid - 1;
      return binary_search(list, target, low, high);
    } else return mid;
  }
  return -1;
}

export function binary_search_dac<T extends unknown>(
  list: T[],
  target: T
): number {
  if (list.length > 1) {
    const low = 0;
    const high = list.length - 1;
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess != target) {
      if (guess > target) return binary_search_dac(list.slice(0, mid), target);
      else return binary_search_dac(list.slice(mid), target);
    }
    return mid;
  }
  return -1;
}
