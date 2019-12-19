package algorithms_coursera_princeton.stacks_queues;

// Stack OVERflows when N exceeds Capacity
public class StackArray {
    private String[] s;
    private int N = 0;

    public StackArray(int capacity) {
        s = new String[capacity];
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public void push(String item) {
        s[N++] = item;
    }

    public String pop() {
        return s[--N];
    }
}