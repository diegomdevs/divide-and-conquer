import math
def binary_search(list: list[int], target: int) -> int:
  if (len(list) != 0):
    MID = math.floor(len(list) / 2)
    GUESS = list[MID]
    if (GUESS != target):
      if (GUESS > target): return binary_search(list[0: MID], target)
      RESULT = binary_search(list[MID:], target)
      if (RESULT != -1):
        RESULT += MID;
      return RESULT  
    return MID
  return -1