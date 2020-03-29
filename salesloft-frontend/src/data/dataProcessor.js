import levenshtein from 'js-levenshtein';

const generateDuplicateReport = (emailList) => {
  const LEVENSHTEIN_DISTANCE = 3;

  const duplicatedEntries = new Map();

  for (let i = 0; i < emailList.length; i++) {
    for (let j = i + 1; j < emailList.length; j++) {
      if (levenshtein(emailList[i], emailList[j]) < LEVENSHTEIN_DISTANCE) {
        duplicatedEntries.set(emailList[i], emailList[j]);
      }
    }
  }

  return duplicatedEntries;
};

const generateStatistics = (stringsArray) => {
  const countMap = new Map();

  stringsArray.forEach((emailAddress) => {
    emailAddress.split('').forEach((char) => {
      if (countMap.has(char)) {
        let current = countMap.get(char);
        countMap.set(char, ++(current));
      } else {
        countMap.set(char, 1);
      }
    });
  });
  return new Map([...countMap.entries()].sort((a, b) => b[1] - a[1]));
};

export {
  generateDuplicateReport,
  generateStatistics,
};
