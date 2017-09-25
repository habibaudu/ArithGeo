/*Write a function called **aritGeo** that takes one argument, an array. You are required
 to check if the array passed as an argument is arithmetic, geometric, neither arithmeti
  nor geometric in progression or if the array is empty. For arithmetic progressions,
   return `Arithmetic`. For geometric progressions, return `Geometric`. For neither of the above, 
   return **`-1`**. For an empty array, return **`0`**. Your logic should be as efficient as possible
    (with minimal iterations).  Also write tests for your solution using **Mocha** & **Chai** 
    (at least 10 test cases).  Finally, push the solution and tests to GitHub.*/

const aritGeo =(arr)=>{

    if(arr.length===0){
        return 0;
    }
 
let diff = arr[1] - arr[0];
let ratio = arr[1] / arr[0];

let arith = true;
let geo = true;

for(let i = 0; i < arr.length - 1; i++)
{
    if( arr[i + 1] - arr[i] !== diff ){

      arith = false;
    }

    if(arr[i + 1] / ratio !== arr[i]){
         geo = false;
   }
      
}

if(arith === true){
    return "Arithmetic";
}
else if(geo === true){
    return "Geometric";
}
else{

    return -1;
}
}
module.exports=aritGeo;

const ans =aritGeo([1,1,1,1]);
console.log(ans);
    
