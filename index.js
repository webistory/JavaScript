function totalSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) sum += i;
  return sum;
}

console.log(totalSum(3));