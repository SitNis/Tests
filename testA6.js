let test = string1 => {
    let arr = [...string1]
    arr.forEach((item,i) => {console.log(i,",",string1[i])
    });
}
test('string')