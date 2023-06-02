
function createFilteredArr(rawArr, target){
    let filteredArr = []
    rawArr.forEach(element => {
        if (element <= target && typeof(element) === "number"){
            filteredArr.push(element)
        }
    });
    return filteredArr
}

function isInupHealthy(arr, target){
    if (!Array.isArray(arr)){
        return false
    }
    if (typeof(target) !== "number"){
        return false
    }
    return true
}
function findIndexes(arr, target){
    if (!isInupHealthy(arr, target)){
        return "input is not correct !"
    }
    let filteredArr = createFilteredArr(arr, target)

    for(let i = 0 ; i < filteredArr.length ; i++){
        for(let j = i + 1 ; j < filteredArr.length ; j++){
            if (filteredArr[i] + filteredArr[j] === target){
                return [i, j]
            }
        }
    }
    return "couldn't find !"
}

console.log(findIndexes([2.5,3,3.5], 6))
console.log(findIndexes([2,7,11,15], 9))