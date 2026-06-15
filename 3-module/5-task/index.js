function getMinMax(str) {
  let arr = str.split(' ');
  let arr_min = Infinity;
  let arr_max = -Infinity;
  for (let i in arr){
    if (!isNaN(arr[i])){
        if (Number(arr[i]) < Number(arr_min)){
            arr_min = Number(arr[i])
        };
        if (Number(arr[i]) > Number(arr_max)){
            arr_max = Number(arr[i])
        }
    }
  }
  let result = {
    min: arr_min,
    max: arr_max
}
  return result
}
