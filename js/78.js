function findLongestWordLength(str) {
    let string = str.split(' ');

    let maxWord = string[0]

    for (let i = 0; i < string.length; i++){
        if (string[i].length > maxWord.length){
            maxWord = string[i]
        }
    }
    return maxWord.length
  }
  