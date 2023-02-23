import { array_item_counter } from "./array_item_counter.ts";
import { biggest_array_item } from "./biggest_list_item.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const arr = [1, 2, 3, 4, 5];
  console.log(biggest_array_item(arr));
}
