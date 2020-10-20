function slicer(str,num) {
    let arr = []
    for (let i = 0; i < str.length ; i += num){
        arr.push(str.slice(i,num+i))
    }
    if (arr[arr.length-1].length < num){
        arr[arr.length-2] += arr[arr.length-1]
        arr.pop()
    }
    return console.log(arr)
}
slicer("SSSDDDEEERRRVVVRrrS",5)

