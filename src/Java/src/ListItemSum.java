import java.util.ArrayList;
import java.util.Arrays;

public class ListItemSum {
  public static int listItemSum(int[] list) {
    if (list.length != 1) {
      return list[0] + listItemSum(Arrays.copyOfRange(list, 1, list.length));
    }
    return list[0];
  }
}
