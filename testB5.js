let func = (...a) => {
    a.sort((a,b) => a-b)
    let firstNum = a[0]
    let outputArr = []
    let arr = []
    for (let i = 1; i <= a.length; i++){
        if (a[i] == firstNum){

            arr.push(a[i])
        }

        else  {
            arr.push(firstNum)
            firstNum = a[i]
            outputArr.push(arr)
            arr = []
        }
    }
    for (let i = 0; i < outputArr.length; i++){
        if (outputArr[i].length == 1){
            outputArr.splice(i,1,outputArr[i][0])
        }
    }
    return outputArr
}

console.log(func(1,2,2,2,2,3,3,4,4,5,1,2,3,4,6))
    