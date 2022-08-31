function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let left = arr.slice(0, Math.round(arr.length / 2));
  let right = arr.slice(Math.round(arr.length / 2), arr.length);
  left = mergeSort(left);
  right = mergeSort(right);
  let newArr = [];
  let indexL = 0;
  let indexR = 0;
  while (indexL < left.length && indexR < right.length) {
    if (left.at(indexL) < right.at(indexR)) {
      newArr.push(left[indexL]);
      indexL++;
    } else {
      newArr.push(right[indexR]);
      indexR++;
    }
  }
  if (indexL === left.length) {
    newArr.push(...right.slice(indexR));
  } else {
    newArr.push(...left.slice(indexL));
  }
  return newArr;
}

console.log(mergeSort([0, 5, 2, 8, 7, 9, 4, 6, 3, 1]));
