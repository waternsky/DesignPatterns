export class Counter {
    private static instance: Counter
    private static count = 0
    private constructor() { }

    public static getInstance() {
        if (!Counter.instance) {
            Counter.instance = new Counter()
        }
        return Counter.instance
    }

    public increment() {
        Counter.count++
    }

    public decrement() {
        Counter.count--
    }

    public getValue() {
        return Counter.count
    }
}
