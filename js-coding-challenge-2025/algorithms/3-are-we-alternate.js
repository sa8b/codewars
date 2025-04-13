function isAlt(word) {
  const len = word.length;

  if (len < 2) return true;

  for (let i = 1; i < len; i++) {
    if (isVowel(word[i - 1]) === isVowel(word[i])) return false;
  }

  return true;
}

function isVowel(char) {
  return /^[aeiou]$/.test(char);
}
