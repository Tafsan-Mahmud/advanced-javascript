function sum (first ,second){
    let result = first + second ;
    if(result > 9){
        const mood = 'happy'
        console.log(mood);
    }
    else{
        const mood = 'angry'
        console.log(mood);
    }
    return result ;
}
const output = sum(3 ,5)
console.log(output);