const shuffle = (array) => {
  const copyArr = array.slice();
  for(let i = copyArr.length - 1; i >= 0; i--){
    // Selects a random position from the array
    const randomPosition = Math.floor(Math.random() * i);
    // Temporal variable is the current element of array (given by for loop)
    const temp = copyArr[i];

    copyArr[i] = copyArr[randomPosition];
    // Element of array in random position is pushed to a new array
    copyArr[randomPosition] = temp;
  }
  return copyArr;
}

export default shuffle;
