import { binary_search } from './binary_search.ts';

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const list: number[] = [1, 2, 3, 4];
  console.log(binary_search(list, 2, 0, list.length));
}
