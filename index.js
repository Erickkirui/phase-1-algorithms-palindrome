function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here

  reversedword = word reversed 
  if word equals reversedword then
  return true
  else
  return false
  end if
  end function
  
*/

/*
  Add written explanation of your solution here
  the test checks if the string is equal to its reverse
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
