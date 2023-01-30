"use strict";

/*
number bigInt NaN
string 
boolean
null 
undfined
Symbol

object
 */

const value = 44;
const mySymbol = Symbol("label for developer");
const mySymbol2 = Symbol("important symbol");

console.log(mySymbol);

const object = {
    name: "Brad",
    123: 123,
    [mySymbol]: "symbol",
    [mySymbol2]: "symbol 2",
};

console.log(object);
console.log(object[123]);

(object[mySymbol] = "test");
 delete object[mySymbol2];
console.log(object[mySymbol]);
