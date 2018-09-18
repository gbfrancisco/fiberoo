function fib() {
  let first = 0;
  let second = 1;
  let newSum = 0;
  const list = [0, 1];
  for (let i = 0; i < 98; i++) {
    newSum = first + second;
    first = second;
    second = newSum;
    list.push(newSum);
  }
  return list;
}

console.log(fib());

function numsToStrings(data) {
  return _.map(data, (eachData) => eachData.toString());
}

console.log(numsToStrings(fib()));

function numEvenNums(data) {
  const list = _.filter(data, (eachData) => (eachData % 2) === 0);
  return list.length;
}

console.log(numEvenNums(fib()));
