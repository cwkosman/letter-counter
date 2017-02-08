function countLetters(str) {
  return Array.from(str.replace(/\s+/g, '')).reduce((letterTally, letter) => {
    if (!letterTally[letter]) {
      letterTally[letter] = 0;
    }
    letterTally[letter]++;
    return letterTally;
  }, {});
}

console.log(countLetters("lighthouse in the house"));
