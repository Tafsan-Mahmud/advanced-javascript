// falsy -->
// 0
// ""
// false 
// undefined
// null
// NaN
//truthy -->
// all srting is true
// "0" , " " , [] ,{}


let names = 12;

if (names || names == 0){
    console.log('condition is true')
}
else{
    console.log('condition is false')
}


if('false'){
    console.log('i am not false ');
}
else{
    console.log('i am false');   // quiz !!
}