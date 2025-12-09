function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log("Current count: " + count);
        },
        decrement: function() {
            count--;
            console.log("Current count: " + count);
        }
    };
}

// Example usage:
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1
