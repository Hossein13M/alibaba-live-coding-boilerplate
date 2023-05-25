//input :  [2,7,11,15]
// target : 9
// output : [0,1] 


function checkInput(input) {
    if (input === null || input.length === 0) {
        console.log("Input is null or empty");
    } else {
        console.log('the input is ok');
    }
}

function checkTarget(target) {
    if (target === null || typeof(target) !== "number" ) {
        console.log("Target is null or not int");
    }
    else{
        console.log('the target is ok');
    }
}
function equisionSolver(input,target){
    let output = [];
    if (checkInput(input) === null || checkTarget(target) === null) {
        return ;
    }
    else{
        
        for(let i=0;i<input.length;i++){
            for(let j=i+1;j<input.length;j++){
                if (input[i] + input[j] === target) {
                    output.push(i);
                    output.push(j);
                } 
            }
        }
        return output;
    }
}

let result = equisionSolver([],);
let result2 = equisionSolver([3,2,4],6);
let result3 = equisionSolver([3,3],6); 

console.log(result);
console.log(result2);
console.log(result3);