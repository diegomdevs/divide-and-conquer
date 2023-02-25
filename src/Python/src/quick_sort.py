import math

def quick_sort(arr: list[int]) -> list[int]:
  if (len(arr) < 2):
    return arr
  
  PIVOT = arr[0]
  
  return  quick_sort([i for i in arr[1:] if i <= PIVOT]) + [PIVOT] + quick_sort([i for i in arr[1:] if i > PIVOT])