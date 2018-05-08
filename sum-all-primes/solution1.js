function sumPrimes(num) {
    // declare variables
    var start = 0;  
    var arrayAll = [];
    var arrayPrime =[];
    var sumPrime = 0;
    
    // create array of numbers up to  and including num
    while (start < num) {
      start ++;
      arrayAll.push(start);
    }
    
    // for loop to loop through arrayAll values
    for (var i=1; i < arrayAll.length; i++) {
      
      var notPrime = false;
      
      
      // for loop to find the remainder of each number in the array and if it is zero and not equal to iteslf then it is not a prime
      
      for (var j=2; j <= arrayAll[i]; j++) {
          if(arrayAll[i]%j===0 && j!==arrayAll[i]) {
            notPrime = true;
          }
      }
  // if notPrime still equals false then add to arrayPrim
      
       if(notPrime === false) {
         arrayPrime.push(arrayAll[i]);
       }
    }
    
  // use reduce to sum all numbers in the arrayPrime array
    
    sumPrime = arrayPrime.reduce(function (accumulator, currentValue) {
       return accumulator + currentValue;
    });
      console.log(sumPrime);
  }
  
  sumPrimes(10);
  