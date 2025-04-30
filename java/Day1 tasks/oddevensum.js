function printOddEvenAndSum(arr) {
  let oddNumbers = [];
  let evenNumbers = [];
  let oddSum = 0;

  // Iterate through the array
  for (let num of arr) {
      if (num % 2 === 0) {
          evenNumbers.push(num); // Add even number to the evenNumbers array
      } else {
          oddNumbers.push(num); // Add odd number to the oddNumbers array
          oddSum += num; // Add odd number to the sum
      }
  }

  // Print the results
  console.log("Even Numbers:", evenNumbers);
  console.log("Odd Numbers:", oddNumbers);
  console.log("Sum of Odd Numbers:", oddSum);
}

// Test the function with an example array
let arr = [12, 7, 45, 26, 33, 18, 9];
printOddEvenAndSum(arr);

