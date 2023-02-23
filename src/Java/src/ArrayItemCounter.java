import java.util.ArrayList;
import java.util.Arrays;

public class ListItemCounter {
  public static int listItemCounter(int[] list) {
    if (list.length != 1) {
      return 1 + listItemCounter(Arrays.copyOfRange(list, 1, list.length));
    }
    return 1;
  }
}
