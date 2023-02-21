import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        final ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        final int[] array = { 1, 2, 3, 4, 5, 6, 7, 8 };
        System.out.println(ListItemSum.listItemSum(array));
        System.out.println(ListItemCounter.listItemCounter(array));
        System.out.println(BinarySearch.binarySearch(array, 5));
    }
}
