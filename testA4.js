function sumOfNum(...a){
    let sum = 0;
    let arr = [...a];
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfNum(1,2,3));