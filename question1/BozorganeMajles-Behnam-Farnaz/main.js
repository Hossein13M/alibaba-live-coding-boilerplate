"use strict"

function findDesiredIndexes(array, number) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return "Array Should Only Contain Numbers";
        }
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if ((array[i] + array[j]) === number) {
                output.push(i, j);
                return output;
            }
        }
    }
}

console.log(findDesiredIndexes([11, 15, 2, false, 7], 9));