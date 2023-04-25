// functions need void when not returning
function add(n1, n2) {
    return n1 + n1;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
// storing functions and function types
// for callback example go to 2:08 https://www.youtube.com/watch?v=BwuLxPH8IDs
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
