function nonDecreasingSubset(numbers) {

  if (!Array.isArray(numbers) || numbers.length == 0) {

    return [];

  }

  let results = numbers[0];
  let current = numbers[0];

  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] >= current) {

      results.push(numbers[index]);
      current = numbers[index];
      
    }
  }

  return results.join(' ');

}