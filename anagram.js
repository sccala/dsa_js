// Given 2 strings, write a function to determine if the second string is an anagram of the first. An anagram is a word. phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(val1, val2) {
  if (val1.length != val2.length) {
    return false
  } else {
    let anagram1 = {}
    let anagram2 = {}
  }
}

validAnagram('', '') //true
validAnagram('aaz', 'zza') //false
validAnagram('anagram', 'nagaram') //true
validAnagram('rat', 'car') //false
validAnagram('awesome', 'awesom') //true
validAnagram('qwerty', 'qeywrt') //true
