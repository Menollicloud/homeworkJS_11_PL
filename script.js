let a = [1,2,3, 'hello',4,5];
let b = [1,2,3, true, 4, undefined, 6];

function sumArr(firstArr, secondArr) {
    let sum1 = 0;  
    for(let i = 0; i < firstArr.length; i++) {
        if(typeof firstArr[i] === "number") sum1 += firstArr[i];            
    }
    
    let sum2 = 0;
    for(let i = 0; i < secondArr.length; i++) {
        if(typeof secondArr[i] === "number") sum2 += secondArr[i];            
    }
    return sum1 < sum2 ? secondArr : firstArr; 
}

console.log(sumArr(a, b));