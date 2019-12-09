const { createQueue } = require("./queues.js");

function priorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();
  return {
    //enqueue
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    //dequeue
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    //peek
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    //length,
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    //isEmpty,
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  };
}

// const q = priorityQueue();

// q.enqueue("A fix Here");
// q.enqueue("We got this bug");
// q.enqueue("It's crashing");

// q.dequeue();
// q.enqueue("Emergency Task Here", true);
// console.log(q.peek());

// q.dequeue();
// console.log(q.peek());
