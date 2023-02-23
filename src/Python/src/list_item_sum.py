import math


def list_item_sum(list: list[int]) -> int:
    if (len(list) != 1):
        MID = math.floor(len(list) / 2)
        LEFT = list[0: MID]
        RIGHT = list[MID:]
        return list_item_sum(LEFT) + list_item_sum(RIGHT)
    return list[0]
