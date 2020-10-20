let minarr = arr => { 
    arr.sort((a,b) => a-b)
    return arr[0]
}

console.log(minarr([3,2,6,7,8,1]))

