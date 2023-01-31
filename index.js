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

// const value = 44;
// const mySymbol = Symbol("label for developer");
// const mySymbol2 = Symbol("important symbol");

// console.log(mySymbol);

// const object = {
//     name: "Brad",
//     123: 123,
//     [mySymbol]: "symbol",
//     [mySymbol2]: "symbol 2",
// };

// console.log(object);
// console.log(object[123]);

// (object[mySymbol] = "test");
//  delete object[mySymbol2];
// console.log(object[mySymbol]);

const arr = [1, 2, 3];

const iterator = arr[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const elem of arr) {
    console.log(elem);
}

console.log(...arr);

//// !!!! Method flat

const arrflat = [1,1[2,2,[3,3,3,[4,4,4,4,[5,5,5,5,5]]]]]

console.log(arrflat);
console.log(arrflat.flat(Infinity))
console.log(arrflat)

// big(n)
const arrBig= [1,1,23,44,556,6,4];
const arrBigSort = arrBig.sort((a,b)=>a-b);
console.log(arrBigSort)
//логарифмічна O(log(n))
const binarySearch = (arr, key)=>{
    let start =0;
    let end = arr.lenght-1;
    let middle;
    while (start<=end) {
        middle = Math.round((start+end)/2)
        if(arr[middle]===key){
            return middle;
        }
        if(arr[middle]>key) {
            return end = middle-1
        } else {
            start = middle+1;
        }
    }
    return -1;
}

console.log(binarySearch(arrBig))


// //константна O(1);
// const linearSearch = (array, key)=> {
//     for (let i=0; i<array.lenght; i++){
//         console.log(array[i])
//     }
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (element === key){
//             return index;
//         }
//         return -1;
//     }
// }

// console.log(linearSearch)


// // квадратична O(n^2)

// const createTable = (limit=4)=>{
//     const table =[]
//     for(let i=1; i<=limit; i++){
//         for(let j=1;j<=limit; j++){
//             table.push(`${i} *${j} = ${i*j}`)
//         }
//     }
// }

//console.log(createTable)