function sumOfNum(...a){
//     let arr = [...a];
    return [...a].reduce(function(sum,current){return sum += current})   
}
console.log(sumOfNum(1,2,3));
