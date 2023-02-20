export function binary_search(list: number[], target: number): number {
  if (list.length != 0) {
    const low = 0;
    const high = list.length - 1;
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess != target) {
      if (guess > target) return binary_search(list.slice(0, mid), target);
      else {
        const result = binary_search(list.slice(mid + 1), target);
        return result != -1 ? mid + 1 + result : -1;
      }
    } else return mid;
  }
  return -1;
}
