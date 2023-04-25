console.log("Welcome to TypeScript");
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2);
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
var person = {
    name: "Matt",
    age: 35,
};
// console.log(person.name)
// Arrays -------------------------
var favoriteGames;
var randoms = ['cat', 42];
// enum -------------------------
// admin is 0, read is 1 and so on
// = number can be used to used 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// Any (people frown on it) --------------------
var favoriteActivities;
favoriteActivities = ["Sports", 1];
favoriteActivities = ["Witcher 3", "Zelda"];
// union types
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine("Max", "Anna");
console.log(combinedNames);
