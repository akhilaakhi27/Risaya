let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
let product = [];

for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
  product.push(arr1[i] * arr2[i]);
}
console.log(product); // Output: [12, 90, 782, 312, 408]