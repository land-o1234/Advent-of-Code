const gameData = "Game 1: 1 blue; 4 green, 5 blue; 11 red, 3 blue, 11 green; 1 red, 10 green, 4 blue; 17 red, 12 green, 7 blue; 3 blue, 19 green, 15 red\nGame 2: 17 red, 10 green; 3 blue, 17 red, 7 green; 10 green, 1 blue, 10 red; 7 green, 15 red, 1 blue; 7 green, 8 blue, 16 red; 18 red, 5 green, 3 blue\nGame 3: 10 blue, 3 green, 8 red; 15 green, 14 blue, 1 red; 8 blue, 11 red, 2 green; 5 red, 9 green, 6 blue\nGame 4: 1 red, 3 blue; 3 blue, 3 green, 1 red; 11 blue, 2 green; 2 green, 14 blue; 1 green, 7 blue; 11 blue, 5 green\nGame 5: 9 green, 5 red, 10 blue; 9 red, 4 blue, 12 green; 9 green, 6 blue, 14 red; 16 green, 8 red, 6 blue; 11 blue, 13 red, 1 green\nGame 6: 1 blue, 2 green, 16 red; 1 green, 19 red; 1 blue; 3 blue, 2 red, 1 green; 18 red, 2 blue, 1 green\nGame 7: 2 blue, 9 red, 5 green; 11 blue, 6 green, 4 red; 7 red, 3 green, 5 blue; 5 green, 11 blue, 7 red; 17 blue, 4 red, 3 green; 20 blue, 1 green, 2 red\nGame 8: 1 green, 6 red, 4 blue; 8 green, 4 blue, 2 red; 2 blue, 5 green\nGame 9: 1 green, 5 blue; 4 blue; 2 red, 1 blue\nGame 10: 1 green, 12 blue; 6 red, 4 green; 5 green, 14 blue, 9 red; 6 red, 13 blue, 2 green; 6 red, 17 blue, 1 green\nGame 11: 19 green, 1 red; 15 red, 7 green; 1 blue, 8 red, 14 green; 1 blue, 11 green, 1 red\nGame 12: 4 red, 3 green, 12 blue; 4 green, 13 red; 2 green, 15 blue, 5 red; 5 red, 10 blue, 3 green; 3 green, 17 blue, 17 red; 1 red, 4 green, 15 blue\nGame 13: 5 red, 7 blue; 6 red, 1 green, 11 blue; 17 blue, 11 green, 4 red; 6 red, 9 green, 5 blue; 4 green, 14 blue\nGame 14: 6 red, 15 blue, 3 green; 4 green, 4 blue, 3 red; 3 blue, 1 green, 5 red\nGame 15: 4 green, 3 blue, 6 red; 3 blue, 2 red, 4 green; 15 red, 3 green, 4 blue; 11 red, 2 blue, 1 green\nGame 16: 4 green, 1 blue, 12 red; 10 green, 6 blue, 10 red; 1 blue, 2 green, 15 red; 1 green, 3 red, 4 blue\nGame 17: 10 green, 11 blue; 13 green, 10 blue, 3 red; 8 red, 3 green, 10 blue\nGame 18: 3 red; 4 red, 1 blue; 3 green, 3 red; 10 green, 1 blue; 4 red, 6 green, 1 blue; 3 green\nGame 19: 4 red, 6 green; 11 red, 4 blue, 2 green; 4 green, 8 red; 9 red, 7 green, 2 blue; 13 red, 4 blue; 9 red\nGame 20: 2 blue, 1 green, 8 red; 3 green, 11 blue, 1 red; 5 blue, 4 red, 6 green; 6 green, 7 red, 5 blue; 7 red, 2 green, 1 blue\nGame 21: 7 blue, 3 green; 2 green, 2 red, 7 blue; 6 blue, 3 red, 1 green; 9 blue, 1 green, 3 red\nGame 22: 7 red, 5 blue, 9 green; 6 red, 1 blue, 5 green; 18 red, 7 green, 5 blue; 13 red, 11 green, 1 blue; 13 red, 1 blue, 11 green\nGame 23: 10 green, 1 blue, 5 red; 2 red, 4 green; 9 green, 2 red; 10 green, 1 blue, 5 red\nGame 24: 2 red, 6 green, 16 blue; 3 blue, 12 red, 3 green; 6 blue, 4 red, 12 green; 12 green, 14 blue, 3 red\nGame 25: 5 red, 2 blue, 1 green; 4 blue, 14 red, 2 green; 16 blue, 4 red; 5 red; 12 blue, 16 red; 2 red, 6 blue, 1 green\nGame 26: 10 blue, 6 green, 5 red; 2 red, 2 green; 8 blue, 5 red; 7 blue, 11 green; 8 green, 9 blue\nGame 27: 1 red, 2 green; 6 green, 10 blue; 1 red, 6 green, 11 blue; 4 blue, 1 green, 1 red; 1 red, 7 blue; 5 green, 2 blue, 1 red\nGame 28: 6 blue, 5 red, 3 green; 5 blue, 1 green; 1 green, 8 red, 1 blue; 2 blue, 4 green; 4 red, 5 blue\nGame 29: 2 red, 4 green, 6 blue; 6 blue, 2 green, 1 red; 10 green, 13 blue, 2 red; 11 green, 11 blue, 2 red; 5 red, 10 green\nGame 30: 4 green, 4 blue, 5 red; 6 red, 18 green, 7 blue; 1 red, 11 green, 2 blue; 11 red, 2 blue, 1 green\nGame 31: 1 red, 7 green, 2 blue; 5 red, 6 green, 9 blue; 3 green, 1 red, 9 blue; 3 red; 8 blue, 6 green, 1 red; 14 blue, 4 green, 7 red\nGame 32: 11 red, 2 blue, 2 green; 18 blue, 1 green; 6 blue, 1 green, 15 red; 4 red, 2 green; 13 red, 6 green, 5 blue; 7 blue, 5 green\nGame 33: 12 blue, 2 red, 2 green; 5 blue, 3 green; 2 green, 6 red, 4 blue; 12 blue, 13 red; 10 blue, 12 red, 1 green; 4 blue, 4 red\nGame 34: 2 blue, 1 red, 6 green; 2 blue, 1 green; 1 red, 2 green, 2 blue; 17 red, 1 blue, 2 green; 4 green, 2 red\nGame 35: 2 blue, 12 red, 2 green; 2 green, 8 red, 11 blue; 17 red, 16 blue; 8 blue, 8 red; 1 green, 6 red, 9 blue\nGame 36: 6 red, 14 green, 7 blue; 1 green, 1 red, 6 blue; 9 red, 10 blue, 9 green; 11 blue, 14 green, 8 red; 10 red, 6 green, 3 blue\nGame 37: 6 green; 2 red, 5 green; 4 blue, 4 red, 5 green; 1 red, 7 green, 4 blue\nGame 38: 1 green, 8 red, 10 blue; 3 green, 5 red, 12 blue; 13 blue, 5 red, 1 green; 3 green, 1 red; 3 red, 15 blue, 6 green; 3 green, 6 red, 4 blue\nGame 39: 15 green, 3 blue; 3 green; 3 blue, 3 red, 8 green; 4 blue, 10 green, 4 red; 2 green, 5 blue, 4 red; 3 green, 3 blue, 1 red\nGame 40: 2 red, 3 green, 15 blue; 5 blue, 13 green, 2 red; 11 blue, 1 red; 5 blue, 20 green, 5 red\nGame 41: 1 red, 2 green, 1 blue; 10 red; 11 green, 1 blue, 5 red; 10 red, 13 green\nGame 42: 10 red, 8 green, 2 blue; 5 green, 4 red; 6 red; 5 red, 9 green, 2 blue; 2 blue, 2 red, 3 green; 1 blue, 7 red, 2 green\nGame 43: 8 red, 6 blue, 12 green; 11 green, 2 red, 2 blue; 4 blue, 3 red, 8 green; 14 red, 3 blue; 9 green, 1 blue, 5 red\nGame 44: 4 red, 5 blue, 4 green; 9 blue, 1 green; 10 green, 2 blue, 4 red; 5 red, 15 green, 12 blue\nGame 45: 1 red, 2 green; 5 blue; 3 blue, 1 red; 1 blue; 4 green, 1 red\nGame 46: 3 green, 8 red, 5 blue; 1 blue, 10 red, 5 green; 2 green, 5 red, 3 blue; 5 green, 4 red, 13 blue\nGame 47: 2 green, 1 blue; 2 red, 2 green, 6 blue; 1 green, 1 red, 1 blue; 2 green, 4 blue, 4 red; 2 green, 6 blue, 3 red\nGame 48: 4 blue, 1 green, 2 red; 6 blue, 1 red; 4 blue\nGame 49: 16 blue, 18 green, 13 red; 7 red, 13 blue; 14 green, 12 red; 20 green, 14 red, 12 blue\nGame 50: 8 blue, 2 red, 1 green; 4 red, 2 green, 5 blue; 6 blue, 2 green; 8 blue, 3 green, 5 red; 1 green, 4 blue\nGame 51: 2 blue, 8 red; 2 green, 3 red, 2 blue; 12 green; 3 blue, 10 green, 1 red; 13 green, 3 blue, 5 red\nGame 52: 12 blue, 5 red, 16 green; 4 blue, 13 green; 2 red, 5 blue, 5 green; 4 green, 8 blue, 3 red\nGame 53: 7 blue, 5 green; 8 green, 8 blue; 4 red, 1 green; 8 blue, 5 red, 11 green\nGame 54: 4 blue, 3 green, 1 red; 10 green, 4 red, 7 blue; 1 red, 6 blue, 2 green\nGame 55: 2 red, 10 blue; 13 red, 10 blue; 4 red, 5 blue, 4 green; 3 green, 8 blue; 5 blue, 7 red, 2 green\nGame 56: 6 green, 7 blue, 9 red; 3 blue, 4 green; 15 red, 3 blue, 3 green; 5 red, 8 green, 7 blue\nGame 57: 9 red, 13 blue, 2 green; 3 red, 2 green, 3 blue; 1 blue, 5 red, 3 green; 9 blue, 2 green, 2 red; 3 red, 12 blue, 3 green; 2 green, 7 red\nGame 58: 4 blue, 7 red; 2 blue, 5 green, 1 red; 17 blue, 3 red; 5 green, 1 blue, 4 red; 4 green, 14 blue, 3 red\nGame 59: 5 blue, 4 red; 7 red; 4 blue, 4 red, 1 green; 1 green, 1 blue, 5 red\nGame 60: 4 red, 2 green; 1 green, 2 blue; 2 red, 2 green; 4 red, 2 green; 3 red\nGame 61: 6 red, 14 green; 12 green, 3 blue; 3 blue, 16 green, 11 red\nGame 62: 12 green, 2 red, 1 blue; 14 red, 2 blue, 4 green; 7 red, 5 green, 1 blue; 4 green, 14 red, 1 blue; 2 blue, 7 green, 3 red; 14 red, 9 green, 2 blue\nGame 63: 1 red, 8 blue, 12 green; 3 green, 10 blue, 4 red; 2 red, 1 blue, 2 green; 2 red, 8 green; 4 red, 3 blue, 9 green; 13 green, 4 blue\nGame 64: 4 blue, 9 green, 4 red; 10 green, 6 blue, 7 red; 10 green, 8 red, 1 blue; 13 blue, 8 green, 8 red; 4 green, 1 red, 8 blue\nGame 65: 16 blue, 5 red, 13 green; 5 red, 9 green, 10 blue; 2 green, 14 red; 6 red, 5 green, 5 blue; 19 blue, 4 green, 14 red; 7 red, 1 blue, 4 green\nGame 66: 7 blue, 11 green, 5 red; 7 green, 8 red, 10 blue; 3 red, 1 green\nGame 67: 9 green, 2 blue, 13 red; 11 red, 10 blue; 14 red, 1 green, 1 blue; 1 red, 13 green, 6 blue; 7 blue, 3 green, 5 red; 3 green, 2 blue\nGame 68: 6 green, 2 blue; 1 blue, 3 red, 5 green; 1 blue, 10 green\nGame 69: 4 red, 6 blue, 1 green; 6 blue, 2 red, 4 green; 9 green, 7 blue, 2 red\nGame 70: 11 blue, 1 green, 4 red; 7 blue, 1 green; 6 red, 9 blue; 1 green, 3 red, 7 blue; 1 green, 9 blue, 2 red\nGame 71: 2 green, 6 red; 1 blue, 2 green, 15 red; 6 red, 1 blue; 2 green, 5 red\nGame 72: 5 green, 6 red; 8 red, 1 blue, 12 green; 1 blue, 9 red, 15 green; 11 green, 1 blue, 6 red; 14 green, 5 red\nGame 73: 9 green, 13 red, 1 blue; 14 green, 5 blue, 13 red; 13 green, 10 red, 16 blue; 3 blue, 7 red, 1 green; 7 red, 6 green, 11 blue\nGame 74: 1 blue, 9 red, 15 green; 3 blue, 7 green; 9 green, 1 blue, 7 red\nGame 75: 5 blue, 12 red, 2 green; 2 blue, 2 green; 4 green, 2 red, 7 blue; 4 green, 7 blue, 5 red; 1 green, 7 blue, 3 red\nGame 76: 1 blue; 8 red, 13 blue; 4 green, 7 blue, 7 red; 3 red, 12 blue, 2 green; 2 green, 2 blue, 1 red\nGame 77: 4 blue; 4 blue; 1 blue, 1 red; 1 red, 5 blue; 10 blue, 1 green\nGame 78: 3 blue, 10 green, 6 red; 12 red, 7 blue, 8 green; 2 green, 18 red, 5 blue; 2 red, 15 blue, 14 green; 4 green, 6 blue, 13 red\nGame 79: 7 red, 1 green; 1 blue, 6 red, 2 green; 1 blue, 12 red\nGame 80: 4 red, 6 blue, 2 green; 5 blue, 2 red; 6 blue, 7 red, 2 green\nGame 81: 2 green, 9 red; 2 green, 2 blue, 7 red; 12 red, 7 green; 8 green, 3 red, 3 blue\nGame 82: 4 green, 5 blue; 2 red, 16 blue; 2 red, 2 green, 18 blue\nGame 83: 14 red, 2 green; 3 blue, 16 red, 2 green; 4 green, 13 red, 1 blue\nGame 84: 10 green, 6 blue, 2 red; 5 red, 6 blue; 7 green, 6 red, 9 blue\nGame 85: 1 red; 12 red, 1 blue, 2 green; 6 red, 1 green; 12 red, 2 green\nGame 86: 14 red, 1 green, 3 blue; 3 blue; 4 green, 8 red, 2 blue; 10 red, 2 green\nGame 87: 4 red, 9 green, 8 blue; 3 green, 6 blue, 7 red; 4 blue, 1 red; 2 red, 7 blue, 11 green; 8 green, 2 blue, 5 red; 6 blue, 10 green, 8 red\nGame 88: 1 green, 1 red; 2 green, 1 blue; 3 green, 1 red, 1 blue; 4 green; 1 blue, 3 green, 1 red\nGame 89: 11 green, 7 blue, 8 red; 7 blue, 3 green, 2 red; 7 green, 6 red, 4 blue; 1 blue, 2 green, 10 red; 3 red, 2 blue, 1 green\nGame 90: 10 green, 12 red, 2 blue; 7 red, 7 blue, 8 green; 2 blue, 11 red, 7 green; 6 green, 5 red, 2 blue; 7 red, 10 green\nGame 91: 12 red, 8 green; 8 red, 6 green, 3 blue; 12 red, 4 blue, 2 green\nGame 92: 10 blue, 3 green; 4 red, 13 blue, 8 green; 7 green, 8 blue, 7 red\nGame 93: 7 red, 4 green, 1 blue; 15 green, 4 red; 2 blue, 15 red\nGame 94: 10 red, 10 green, 11 blue; 3 red, 1 green, 7 blue; 9 red, 4 green, 9 blue; 7 red, 9 green, 13 blue; 9 blue, 2 green, 10 red\nGame 95: 4 blue, 12 green; 7 green, 1 red, 5 blue; 2 blue, 8 green, 8 red\nGame 96: 12 green, 2 blue; 11 green, 3 blue; 3 red, 2 green, 5 blue; 12 green, 2 blue, 4 red; 2 blue, 1 green, 1 red; 3 red, 11 green, 3 blue\nGame 97: 6 red, 3 blue, 1 green; 1 blue, 2 red, 14 green; 4 blue, 14 green\nGame 98: 13 green, 1 red, 5 blue; 2 red, 5 green, 7 blue; 19 green, 5 blue; 4 blue, 13 green; 5 green, 8 blue\nGame 99: 11 red, 8 green; 16 red, 10 green; 9 red, 6 green; 3 blue, 2 red, 4 green\nGame 100: 4 red, 2 blue, 4 green; 2 green, 1 red, 1 blue; 3 green, 4 blue, 5 red; 18 red, 2 blue; 9 red, 5 green, 4 blue";
const fs = require("fs");
const gameArray = gameData.split('\n');
const match = "possible";
const combinedAnswers = [];
const redArray = [];
const redAnswers = [];
const blueArray = [];
const blueAnswers = [];
const greenArray = [];
const greenAnswers = [];
const possibleNumbers = [];
gameArray.forEach(function(string){
    const findRed = /(\d+)\s*red/gi;
    const matches = string.match(findRed);
    const rojoArray = [];
    matches.forEach(function(match){
        const number = match.match(/\d+/)[0];
        rojoArray.push(parseInt(number));
    });
    redArray.push(rojoArray);
})

gameArray.forEach(function(string){
    const findBlue = /(\d+)\s*blue/gi;
    const matches = string.match(findBlue);
    const azulArray = [];
    matches.forEach(function(match){
        const number = match.match(/\d+/)[0];
        azulArray.push(parseInt(number));
    });
    blueArray.push(azulArray);
})

gameArray.forEach(function(string){
    const findGreen = /(\d+)\s*green/gi;
    const matches = string.match(findGreen);
    const verdeArray = [];
    matches.forEach(function(match){
        const number = match.match(/\d+/)[0];
        verdeArray.push(parseInt(number));
    });
    greenArray.push(verdeArray);
})

redArray.forEach(function(array){
    const answer = array.some(num => num > 12);
    redAnswers.push(answer)
})

blueArray.forEach(function(array){
    const answer = array.some(num => num > 14);
    blueAnswers.push(answer)
})

greenArray.forEach(function(array){
    const answer = array.some(num => num > 13);
    greenAnswers.push(answer)
})

for (let i = 0; i < redAnswers.length; i++) {
    if (redAnswers[i] || blueAnswers[i] || greenAnswers[i]) {
      combinedAnswers.push("not possible");
    } else {
      combinedAnswers.push("possible");
    }
}

for (let i = 0; i < combinedAnswers.length; i++) {
    if (combinedAnswers[i] === match) {
      possibleNumbers.push(i+1);
    } else {
      possibleNumbers.push('');
    }
}

const remove = '';
const filteredArray = possibleNumbers.filter((element) => element !== remove);
let sum = filteredArray.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);
