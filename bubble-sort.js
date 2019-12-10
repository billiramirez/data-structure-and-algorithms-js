// Loop through the array
// If this item > next item, swap them
// Indicate a swap occurred
// If a swap occurred, loop through the array again
// Continue looping until no swaps occur

function printArray(array) {
  let result = " ";
  array.forEach(item => (result += `-${item}-`));
  console.log(result);
}
function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;

    array.forEach((item, index) => {
      if (item > array[index + 1]) {
        printArray(array);

        const temporary = item;

        array[index] = array[index + 1];
        array[index + 1] = temporary;

        swapped = true;
      }
    });
  } while (swapped);
  printArray(array);

  return array;
}

const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];
bubbleSort(numbers);
