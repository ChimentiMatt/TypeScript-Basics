// functions need void when not returning

function add(n1: number, n2: number){
    return n1 + n1;
}

function printResult(num: number): void {
    console.log('Result: ' + num)
}

printResult(add(5, 12))


// storing functions and function types
// for callback example go to 2:08 https://www.youtube.com/watch?v=BwuLxPH8IDs

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));