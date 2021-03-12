const shuffle = (array) => {
  const copyArr = [];
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i);
    console.log('j', j);
    const temp = array[i];
    console.log('temp before changing', temp)
    array[i] = array[j];
    console.log('array[i] after = array[j]', array[i]);
    copyArr.push(array[i]);
    array[j] = temp;
    console.log('array[j] after = temp', array[j]);
    console.log(' final temp', temp)
  }
  return copyArr;
}

export default shuffle;
