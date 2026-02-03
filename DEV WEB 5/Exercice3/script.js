const numbers = [3, 8, 1, 12, 7, 5];

function findMax(numbers) {
    let max = numbers[0];          
    for (let n of numbers) {      
        if (n > max) {
            max = n;               
        }
    }
    return max;                   
}

function sumArray(numbers){
    let s=0;
    for(let n of numbers){
        s+=n;
    }
    return s;
}
function  countOccurrences(arr, value){
    let s=0;
    for(let elem of arr){
        if(elem==value){
            s++;
        }
    } return s;
}
function removeDuplicates(arr){
    return [...new Set(arr)];
}
function findIndex(arr, value){
     for(let i=0;i<=arr.length;i++){
        if(arr[i]==value){
        return i;
        }
     }
     return -1;
}
console.log(findMax(numbers));
console.log(sumArray(numbers));
let occu =countOccurrences(numbers,2)
console.log("les occurence sont ",occu);
console.log(findIndex(numbers,1))
let n=removeDuplicates(numbers);
console.log(removeDuplicates(n));
console.log(findIndex(numbers,8))
