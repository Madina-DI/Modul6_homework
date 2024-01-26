function recount(firstNumber, secondNumber) {
    let current = firstNumber;
  
    let intervalId = setInterval(function() {
      console.log(current);
      current++;
  
      if (current > secondNumber) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  recount(5, 15);