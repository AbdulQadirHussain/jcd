// TYPE & INTERFACE
type stringNumber = string | number;

interface Student {
    name: stringNumber;
    age: number;
    address: string | number;
    city?: string;
    country?: string;
}

var st: Student = {
    name: "Ali",
    age: 20,
    address: "abc",
    city: "Karachi",
    country: "Pakistan",
}

console.log(st);

var allStudent: Array<Student> = [st];
console.log(allStudent);
var allStudents: stringNumber[] = ['abc', 123];
console.log(allStudents);




// CREATING INTERFACE AND INHERIT WITH ANOTHER INTERFACE WITH TYPE
type Species = `cat` | `dog` | `birds`;

interface Pet {
    species: Species;
    name: string;
}
interface Cat extends Pet{
    species: `cat`;
}
interface Dog extends Pet{
    species: `dog`;
}
interface Bird extends Pet{
    species: `birds`;
}

function petIs(pet: Bird){
    console.log(`*`, pet.species);
}
petIs({name: `eagle`,species: `birds`});

export {}; //Write export {}; at the end of the file to resolve the issue of Duplicate function implementations
