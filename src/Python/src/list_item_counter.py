import math
def list_item_counter(list: list[int]) -> int:
  if (len(list) != 1):
    MID = math.floor(len(list) / 2);
    LEFT = list[0: MID]
    RIGHT = list[MID:]
    
    return list_item_counter(LEFT) + list_item_counter(RIGHT)
  return 1