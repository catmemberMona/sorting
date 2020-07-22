function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    swap(arr, arr[i], arr[i + 1]);
  }
  return arr;
}

function swap(arr, num1, num2) {
  let index1 = arr.indexOf(num1);
  let index2 = arr.indexOf(num2);
  if (num1 > num2) {
    arr[index1] = num2;
    arr[index2] = num1;
    return arr;
  } else return arr;
}
