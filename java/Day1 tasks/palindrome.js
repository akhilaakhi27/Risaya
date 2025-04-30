function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Reverse the string and compare it with the original cleaned string
    let reversedStr = cleanedStr.split("").reverse().join("");

    // If the cleaned string is equal to its reverse, it's a palindrome
    return cleanedStr === reversedStr;
}

// Test the function
let testString = "hello";
console.log(`Is the string "${testString}" a palindrome?`, isPalindrome(testString));
