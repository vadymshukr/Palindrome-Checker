function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (str !== ''){
      return reverseStr === lowRegStr;
    }
    
  }

  export default palindrome;