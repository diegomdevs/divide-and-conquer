import java.util.Arrays;

public class ListItemSum {
  public static int listItemSum(int[] list) {
    if (list.length == 1) {
      return list[0];
    }
    final int MID = list.length / 2;
    return listItemSum(Arrays.copyOfRange(list, 0, MID)) + listItemSum(Arrays.copyOfRange(list, MID, list.length));
  }
}
