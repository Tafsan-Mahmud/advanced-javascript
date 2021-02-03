// thik kore sob bujhi nai ai modeul a --> 23-8 Closure, encapsulation, private variable
//pore bujhe nite hobe puro topic ta  


function stopWATCH (){
    let count = 0 ;
    return function(){
        count ++ ;
        return count;
    }
}


const clock1 = stopWATCH();
// console.log (clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWATCH()
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());