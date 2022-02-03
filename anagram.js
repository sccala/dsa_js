// Given 2 strings, write a function to determine if the second string is an anagram of the first. An anagram is a word. phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }
  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    // if letter exists, increment. Otherwise set to 1
    let letter = first[i]
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  // {a:3, n:1, g:1, r:1, m:1}
  
  for (let i = 0; i < second.length; i++) {
    // can't find letter or letter is zero then it's not an anagram
    let letter = second[i]
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}
console.log(validAnagram('aaz', 'zza')) //false
console.log(validAnagram('', '')) //true
console.log(validAnagram('aaz', 'zza')) //false
console.log(validAnagram('anagram', 'nagaram')) //true
console.log(validAnagram('rat', 'car')) //false
console.log(validAnagram('awesome', 'awesom')) //false
console.log(validAnagram('qwerty', 'qeywrt')) //true
