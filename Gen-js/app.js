// type casting

const isString ='45';
const isNumber = 45;

console.log(Number(isString) + isNumber);
console.log(typeof String(isNumber), String(isNumber));
console.log(Boolean(isNumber));

// Equality comparisons

console.log('== ',isString == isNumber);
console.log('=== ',isString === isNumber);
console.log(Number(isString) === isNumber);

// Indexed collections aka array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8]

// Looping arrays - for, forEach, do..while

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

myArray.forEach((number, index, arr) => {
    console.log(number, index, arr)
})

for(const number in myArray){
    console.log('for...in ', number);
}

for(const number of myArray){
    console.log('for...of ', number);
}

// Contitional statements

if (true) {
    // kui on true, käivitub kood siin
} else{
    // kui on false, käivitub kood siin
}

if (!true) {
    // kui on false, käivitub kood siin
} else{
    // kui on true, käivitub kood siin
}

//error exception



if (!true) {
    // kui on true, käivitub kood siin
} else if(!true) {
    // kui if on false ja else...if on õige
} else {
    throw new Error('Midagi läks valesti :D');
}