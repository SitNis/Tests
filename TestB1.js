function sieve(n) {
    let arr = []
   
    for (let i = 2; i < n  ; i++)
    {
        arr[i] = i
    }

    for (let i = 2; i < n; i++){
       if (i*i <= n){
           for (let j = i*i; j <=n; j += i){
               if (arr[j] % arr[i] == 0) {
                   delete(arr[j])
               }
           }
       } 
    }

    return arr.filter((el) => el != null)
}
console.log(sieve(20)) 