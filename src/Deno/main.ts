import { arrayItemSum, arrayItemSumDaC } from "./array_item_sum.ts";
import { biggestListItem } from "./biggest_list_item.ts";
import { binary_search } from "./binary_search.ts";
import { log_functions } from "./log_functions.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const list = [2132, 23, 45, 888888, 4444];
  log_functions(arrayItemSum([3, 3]), "List item sum");
  log_functions(biggestListItem(list, 1, list[0]), "Biggest Item in the list");
  console.log(arrayItemSumDaC([1, 2, 3, -2]));
  console.log(binary_search([1, 2, 3, 4, 5], 5));
}
