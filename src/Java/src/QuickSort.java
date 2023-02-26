import java.util.ArrayList;

public class QuickSort {
  public static ArrayList<Integer> quickSort(ArrayList<Integer> list) {
    if (list.size() < 2) {
      return list;
    }
    final int MID = list.size() / 2;
    final int PIVOT = list.get(MID);

    final ArrayList<Integer> LESS_ARR = new ArrayList<>();
    final ArrayList<Integer> GREATER_ARR = new ArrayList<>();

    for (int i = 0; i < list.size(); i++) {
      if (i != MID) {
        if (list.get(i) < PIVOT)
          LESS_ARR.add(list.get(i));
        else
          GREATER_ARR.add(list.get(i));
      }
    }

    final ArrayList<Integer> LESS_RESULT = quickSort(LESS_ARR);
    final ArrayList<Integer> GREATER_RESULT = quickSort(GREATER_ARR);
    LESS_RESULT.add(PIVOT);
    LESS_RESULT.addAll(GREATER_RESULT);

    return LESS_RESULT;
  }
}
