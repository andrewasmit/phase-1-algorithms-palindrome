
function isPalindrome(str){
  let newArr=[];
  let halfway = str.length/2;
  if (halfway ===Math.floor(halfway)){
      let secondHalf = Array.from(str).splice(halfway); 
      for (char of secondHalf){
        newArr.unshift(char);
      }  
      return newArr.join('') === Array.from(str).slice(0, halfway).join('');
  } if (halfway !== Math.floor(halfway)){
    let secondHalf = Array.from(str).splice(halfway +1);
    for (char of secondHalf){
      newArr.unshift(char);
    }  return newArr.join('') === Array.from(str).slice(0, halfway).join('');
  }; 
};



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
