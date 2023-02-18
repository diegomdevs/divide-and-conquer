import java.util.ArrayList;

public class ListItemSum {
  public static int listItemSum(ArrayList<Integer> list, int iterator) {
    try {
      final int item = list.get(iterator);
      return item + listItemSum(list, ++iterator);
    } catch (Exception e) {
      return 0;
    }
  }
}
