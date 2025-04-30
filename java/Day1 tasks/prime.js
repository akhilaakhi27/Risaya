//task8
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let primes = [];
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        primes.push(i);
        sum += i;
    }
}

console.log("Prime numbers between 1 and 100:");
console.log(primes.join(", "));
console.log("Sum of prime numbers:", sum);
