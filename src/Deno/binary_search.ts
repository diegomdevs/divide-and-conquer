export function binary_search(list: number[], target: number): number {
  if (list.length != 0) {
    const mid = Math.floor((list.length - 1) / 2);
    const guess = list[mid];
    if (guess != target) {
      if (guess > target) return binary_search(list.slice(0, mid), target);
      const result = binary_search(list.slice(mid + 1), target);
      return result != -1 ? mid + result : -1;
    }
    return mid;
  }
  return -1;
}
