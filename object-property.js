
//** ai video ta khub e importent 
//  but akta task complete korte parlam na 
// jet pore must kortei hobe seta holo modeul --> 
// 23-6 Apply map, filter, find on an array of objects -->
//  ( 02:00 minute a) <-- task ta solve korte hobe




const students = [
    { id:21 , namee:'kolim'},
    {id:41 , namee:'kolim'},
    {id:50 , namee:'kolim'},
    {id:45 , namee:'kolim'}

];

const names = students.map(x => x.namee);
const ids = students.map(y => y.id );
const bigerId = students.filter(z => z.id >40);
const bigerOne = students.find(x1 => x1.id > 40);
console.log(bigerOne);
