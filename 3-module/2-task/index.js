function filterRange(arr, a, b) {
      let arr_fil = []
    for (let key in arr){
        if (arr[key] >= a && arr[key] <= b){
            arr_fil.push(arr[key])
        }
    }
    return arr_fil
}
