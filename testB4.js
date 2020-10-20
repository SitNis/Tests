let first = (...a) =>{
    let maxcount = 0
    let count = 0
    for (let i = 0; i < a.length; i++){
        count = 0
        for (let j = i; j < a.length; j++){
            if (a[j] == 1){
                count++
            }
            else {
                break
            }
        }
        if (maxcount < count){
            maxcount = count
        }
    }
    return maxcount
}
console.log(first(1,2,3,4,5,1,1,1,1,1,2,3,1))