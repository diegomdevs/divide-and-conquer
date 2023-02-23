import java.util.Arrays;

public class BinarySearch {
  public static int binarySearch(int[] array, int target) {
    if (array.length != 0) {
      final int mid = (int) Math.floor(array.length / 2);
      if (array[mid] != target) {
        if (array[mid] > target) {
          return binarySearch(Arrays.copyOfRange(array, 0, mid), target);
        }
        int result = binarySearch(Arrays.copyOfRange(array, mid, array.length), target);
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
