//const clientName = undefined;
// const clientLastName= undefined;

const clientJob= "Dj";
const clientName1= "Gen Vikat";

/* function myKevin(str1="Eesnimi", str2="Pereknimi"){
    console.log(`${str1} ${str2}`);
    return `${str1} ${str2}`;
}
myKevin(clientName, clientLastName)
myKevin(clientJob, clientName1) */

// arrow functions

const myKevin = (str1="Eesnimi", str2="Pereknimi")=>{
    console.log(`${str1} ${str2}`);
    return `${str1} ${str2}`;
}
myKevin(clientJob, clientName1);

//Built in funcs
console.log(clientName1.charAt());

