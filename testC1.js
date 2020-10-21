class safe{
    constructor(){
        this.a = new Map()
    }
  
    save(key,value){
        this.a.set(key,value)
        
    }
}


let dict = new safe

dict.save(1,2)
dict.save(2,3)
dict.save(3,50)

console.log(dict.a)