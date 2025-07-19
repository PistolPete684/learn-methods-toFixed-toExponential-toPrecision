function howManySmaller(arr,n){
  let num = 0;
  // check if the arr numbers are smaller than n
  for (let i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].toFixed(2)) < n) {
      // if they are, count them up using num
      num += 1;
    }
  }
  // return how many are small in the array
  return num;
}


// Code Wars alternative
// function howManySmaller(arr,n){
//   return arr.filter(x => +x.toFixed(2) < n).length;
// }