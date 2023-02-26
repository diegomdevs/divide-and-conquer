import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(100);
        list.add(2);
        list.add(0);
        System.out.println(QuickSort.quickSort(list));
    }
}
