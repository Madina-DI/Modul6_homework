function isPrime(number) {
    if (number<=1 || number > 1000) {
    return "Данные не верные";
    }
  for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return `${number} не является простым числом`;
        }
    }

    return `${number} - простое число`;
} 
console.log (isPrime(17));
console.log (isPrime(170));