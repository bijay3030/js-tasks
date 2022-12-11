function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else if (number > 0) {
      return number * calculateFactorial(number - 1);
    } else {
      return "Number can't be negative.Please Retry";
    }
  }
  
  console.log(calculateFactorial(4));
  