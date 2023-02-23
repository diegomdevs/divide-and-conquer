export function biggest_array_item(
  arr: number[],
): number {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);

    const left = biggest_array_item(arr.slice(0, mid));
    const right = biggest_array_item(arr.slice(mid));

    return Math.max(left, right);
  }
  return arr[0];
}
