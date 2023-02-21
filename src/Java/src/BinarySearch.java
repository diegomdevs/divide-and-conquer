import java.util.Arrays;

public class BinarySearch {
  public static int binarySearch(int[] list, int target) {
    if (list.length != 0) {
      final int mid = (int) Math.floor(list.length / 2);
      if (list[mid] != target) {
        if (list[mid] > target) {
          return binarySearch(Arrays.copyOfRange(list, 0, mid), target);
        }
        int result = binarySearch(Arrays.copyOfRange(list, mid, list.length), target);
        if (result != -1) {
          return mid + result;
        }
        return result;
      }
      return mid;
    }
    return -1;
  }
}
