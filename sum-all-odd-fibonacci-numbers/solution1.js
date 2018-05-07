function sumFibs(num) {
    // set variables
    var seq = [1,1];
    var oddNum = [];
    var oddSum = 0;
    
    // while loop to create fibonacci sequence
    while(seq[seq.length-1] <= num) {
      
      var b = seq[seq.length-1];
      var a = seq[seq.length-2];
      
      seq.push(b + a);
      
    }

    // exclude final number as this is bigger than num
    seq = seq.slice(0, -1);
    
    // for loop to create second sequence of only odd numbers using remainder
    for (var i=0; i < seq.length; i++) {
      if (seq[i] % 2 != 0) {
        oddNum.push(seq[i]);
      }
    }
    
    // for loop to sum
    for (var j=0; j < oddNum.length; j++) {
      
      oddSum += oddNum[j];
  
    }
    
    console.log(oddSum);
    
  }
  
  sumFibs(75025);