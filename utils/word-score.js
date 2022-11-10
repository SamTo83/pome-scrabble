var points = {
  1: "AEIOULNSTR",
  2: "DG",
  3: "BCMP",
  4: "FHVWY",
  5: "K",
  8: "JX",
  10: "QZ",
};
// https://www.geeksforgeeks.org/javascript-parseint-function/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
export function getWordScore(word) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    for (let key in points) {
      if (points[key].includes(word[i].toUpperCase())) {
        score += parseInt(key);
      }
    }
  }
  return score;
}

export function getLetterScores(word) {
  let letterScores = [];
  for (let i = 0; i < word.length; i++) {
    for (let key in points) {
      if (points[key].includes(word[i].toUpperCase())) {
        letterScores.push({ letter: word[i], score: parseInt(key) });
      }
    }
  }
  return letterScores;
}

export function convertToObject(word) {
  const wordObject = {
    word: word,
    score: getWordScore(word),
    letterScores: getLetterScores(word),
  }
  return wordObject
}

// https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
export function wordSort (words) {
  for(let i = 0; i < words.length; i++) {
    for(let j = 0; j < (words.length - i - 1); j++) {
      if(words[j].score < words[j+1].score) {
        let temp = words[j];
        words[j] = words[j+1];
        words[j+1] = temp;
      }
    }
  }

  return words
}
