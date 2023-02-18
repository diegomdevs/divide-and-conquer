import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        final ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(ListItemCounter.listItemCounter(list, 0));
        System.out.println(ListItemSum.listItemSum(list, 0));
        System.out.println(BinarySearch.binarySearch(list, 2, 0, list.size()));
    }
}
