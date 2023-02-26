import java.util.Arrays;

public class ListItemCounter {
  public static int listItemCounter(int[] list) {
    final int MID = list.length / 2;
    if (list.length == 1) {
      return 1;
    }
    return listItemCounter(Arrays.copyOfRange(list, 0, MID))
        + listItemCounter(Arrays.copyOfRange(list, MID, list.length));
  }
}
