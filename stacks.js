function createStack() {
  const array = [];

  return {
    push(item) {
      array.push(item);
    },
    pop() {
      array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    get length() {
      return array.length;
    },
    isEmpty() {
      return array.length === 0;
    }
  };
}

// GETTING DRESSED
// const lowerBodyStack = createStack();

// lowerBodyStack.push("underwear");
// lowerBodyStack.push("socks");
// lowerBodyStack.push("pants");
// lowerBodyStack.push("shoes");

// lowerBodyStack.pop();
// lowerBodyStack.pop();
// console.log(lowerBodyStack.length);
