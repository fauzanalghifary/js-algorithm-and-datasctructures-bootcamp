function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  const res = capitalizeWords(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0].toUpperCase();
  res.push(string);
  return res;
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"])); // ['I', 'AM', 'LEARNING', 'RECURSION']
