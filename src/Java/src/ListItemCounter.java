import java.util.ArrayList;

public class ListItemCounter {
  public static int listItemCounter(ArrayList<Integer> list, int iterator) {
    try {
      list.get(iterator);
      return 1 + listItemCounter(list, ++iterator);
    } catch (Exception e) {
      return 0;
    }
  }
}
