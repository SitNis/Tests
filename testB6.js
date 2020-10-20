let str = (...a) => {
    for (let i = 1; i < a.length; i++){
        if (a[i] == a[i-1]){
            delete(a[i-1])
        }
    }
    return a.filter(item => item != null)
}


console.log(str(1,2,3,4,5))