function getSum(a) {
    return function(b){
      console.log(a + b);
    };
  }
  const resultSum = getSum(10);
  
  resultSum(7);
  
  