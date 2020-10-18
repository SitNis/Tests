let test = string1 => {
    let arr = [...string1]
    arr.forEach((item, i) => { 
        return  console.log(i,",",string1[i])
    });
    
}
test('string')