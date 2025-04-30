//1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
//2
let arr3 = [[1, 2],[3, 4],[5, 6]];
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3[i].length; j++) {
    console.log(arr3[i][j]);
  }
}
//3
let nums = [10, 15, 20, 25, 30];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i]);
  }
}
//4
let base = 2;
let exponent = 3;
let result = 1;

for (let i = 0; i < exponent; i++) {
  result *= base;
}
console.log(result); 
//5
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
  //6
  let number = 12345;
let count = 0;

while (number !== 0) {
  number = Math.floor(number / 10);
  count++;
}
console.log(count); 
//7
let num = 12345;
let sum = 0;

while (num !== 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);
//8
let arr = [10, 25, 87, 14, 56];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max); 
//9
let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
let product = [];

for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
  product.push(arr1[i] * arr2[i]);
}
console.log(product); 
//10
let array = [1, 2, 3, 4, 2, 5, 3, 6];
let duplicates = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j] && !duplicates.includes(array[i])) {
      duplicates.push(array[i]);
    }
  }
}
console.log(duplicates); 
//11
for (let i = 0; i < 5; i++) {
    console.log("This is the same text");
  }