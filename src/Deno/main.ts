import { quick_sort } from "./quick_sort.js";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const arr = [5, 2, 3, 444, 123232323, 4, 3, 1, 34, 0];
  console.log(quick_sort(arr));
}
