console.log("Welcome to TypeScript");

function add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

const result = add(number1, number2);
// console.log(result);




// Objects -------------------------

// not preferred
// const person: {
//     name : string;
//     age: number
// } = {
//     name: "Matt",
//     age: 35,
// }

const person = {
    name: "Matt",
    age: 35,
};
// console.log(person.name)



// Arrays -------------------------

let favoriteGames: string[];

const randoms = ['cat', 42]




// enum -------------------------

// admin is 0, read is 1 and so on
// = number can be used to used 
enum Role { ADMIN, READ_ONLY, AUTHOR};



// Any (people frown on it) --------------------

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1]
favoriteActivities = ["Witcher 3", "Zelda"]



// union types
function combine(input1: number | string, input2: number | string){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna")
console.log(combinedNames);



// type
// you make up a type

type Combinable = number;