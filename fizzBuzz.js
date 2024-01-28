function fizzBuzz(lLow=0, lUpp=100, f=(n)=>console.log(n))
{
    let r = []
    let [nFizz , nBuzz] = [3,5];
    let [strFizz, strBuzz] = ["fizz", "buzz"]

    for(let i = lLow; i < lUpp; i++){
        let isFizz = i % nFizz == 0
        let isBuzz = i % nBuzz == 0
        if(isFizz && isBuzz){
            r.push(strFizz+strBuzz)
        }else if(isFizz){
            r.push(strFizz)
        }else if(isBuzz){
            r.push(strBuzz)
        }else{
            r.push(i)
        }
        
        if(typeof f == "function"){
            f(r[i])
        }
    }
    return r
}

let r = fizzBuzz(0, 101)
console.log("r:", r)

// #TODO USE GENERATORS

//# DENTRO DEL for, operaciones, book, go, ts, js, python, c++