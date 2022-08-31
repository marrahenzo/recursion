function fibs(n) {
  let arr = [0, 1, 1];
  for (let i = 2; i < n - 1; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }
  return arr;
}

function fibsRec(n) {
  if (n < 2) return n;
  else return fibsRec(n - 1) + fibsRec(n - 2);
}

console.log(fibsRec(8));
