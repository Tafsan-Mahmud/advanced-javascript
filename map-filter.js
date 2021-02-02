//** khub kothin and most usefull akta topic ( map ) somoy kore pore abr dekhte hobe  */

const numbers = [ 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element ;
    output.push(result);
}
console.log(output);

function square(element){
    return element * element ;
}

const result = numbers.map(element => element * element);
const square3 = x => x * x;

const numbers = [ 2 , 3 , 4 , 5 , 6 , 7 , 8 ];
const result = numbers.map(function(element){
    return element * element ;
})
console.log(result);


const numbers = [ 3 , 4 , 5 , 6  , 8 ];
const result= numbers.map(x => x * x);
console.log(result);


const numbers = [ 3 , 4 , 5 , 6  , 8 ];
const biger = numbers.filter(x => x < 3);
console.log(biger);


const numbers = [ 3 , 4 , 5 , 6  , 8 ];
const biger = numbers.find(x => x > 5);
console.log(biger);