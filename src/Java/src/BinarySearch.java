import java.util.ArrayList;

public class BinarySearch {
  public static int binarySearch(ArrayList<Integer> list, int target, int low, int high) {
    if (low <= high) {
      final int mid = (int) Math.floor((low + high) / 2);
      final int guess = list.get(mid);
      if (guess != target) {
        if (guess < target)
          low = mid + 1;
        else
          high = mid - 1;
      } else
        return mid;
    }
    return -1;
  }
}
