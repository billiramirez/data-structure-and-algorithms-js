function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}
module.exports = {
  createQueue
};

// const q = createQueue();

// console.log("is Empty", q.isEmpty());

// q.enqueue("Make a egghead leason");
// q.enqueue("Here the other lesson");
// q.enqueue("Go ahead");

// console.log("peek (1st)", q.peek());
// q.dequeue();
// console.log("peek (2nd)", q.peek());
// q.dequeue();
// console.log("peek (3rd)", q.peek());
// q.dequeue();

// console.log("is empty", q.isEmpty());
