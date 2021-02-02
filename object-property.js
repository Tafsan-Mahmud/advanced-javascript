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
