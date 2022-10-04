function min(arr) {
  // spread method required, because Math.min() gets array as argument
  const minIndex = Math.min(...arr);
  return minIndex;
}

function max(arr) {
  // spread method required, because Math.max() gets array as argument
  const maxIndex = Math.max(...arr);
  return maxIndex;
}

// let obj = { min: min, max: max };
export { min, max };
// export default obj;
