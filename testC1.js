// class safe{
//     constructor(){
//         this.a = new Map()
//     }
  
//     save(key,value){
//         this.a.set(key,value)
        
//     }
// }


// let dict = new safe

// dict.save(1,2)
// dict.save(2,3)
// dict.save(3,50)

// console.log(dict.a)


class dict {
    constructor() {
        this.hash = {
            
        
    }
}
    checkOut(n){
        let arr = Object.keys(this.hash)
        if (arr.length < n){
            return true
        }
        else {
            console.log("error:out of range")
            return false
        }
    }

    adder(key,value){
        if (this.checkOut(3) != true){
            
            return

        }
        if (key in this.hash){
            return
        }
        else { 
            this.hash[key] = value
            return 
        }
        
    }

    deleter(key){
        delete(this.hash[key])
    }

    set getValue(key){
        this.result = this.hash[key]
    }
    get getValue(){
        return this.result
    }

}

let a = new dict
a.adder(1,3)
a.adder(2,4)
a.adder(3,5)

a.getValue = 3
console.log(a.hash)
console.log(a.getValue)



