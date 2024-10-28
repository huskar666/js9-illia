function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  
  logItems(['Mango', 'Poly', 'Ajax']);

  
  function calculateEngravingPrice(message, priceWord) {
    const words = message.split(' ');
    return words.length * priceWord;
  }
  
  console.log(calculateEngravingPrice("dota top(net)", 10));


  function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  console.log(findLongestWord("the quick brown fox jumps over the lazy dog"));


function formatString(string) {
if (string.length <= 40) {
      return string;
} else {
      return string.slice(0, 40) + '...';
}
}
  
console.log(formatString("dota pogana dota pogana dota pogana dota pogana dota pogana dota pogana dota pogana"));
  

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
  }
  
  console.log(checkForSpam("ЦЕ spam відкрийте обов'язково"));
  console.log(checkForSpam("тут немає sale")); 
  console.log(checkForSpam("дефолт повідомлення")); 
  

  function sumInputNumbers() {
    const numbers = [];
    let total = 0;
    let input;
  
    while ((input = prompt("введіть число:")) !== null) {
      const number = Number(input);
      if (isNaN(number)) {
        alert("було введено не число, спробуйте ще раз");
      } else {
        numbers.push(number);
      }
    }
  
    for (const number of numbers){
      total += number
    }
  
    console.log(`загальна сума чисел дорівнює ${total}`);
  }
  
  sumInputNumbers();
  function sumInputNumbers() {
    const numbers = [];
    let total = 0;
    let input;
  
    while ((input = prompt("Введіть число:")) !== null) {
      const number = Number(input);
      if (isNaN(number)) {
        alert("Було введено не число, спробуйте ще раз");
      } else {
        numbers.push(number);
      }
    }
  
    for (const number of numbers) {
      total += number;
    }
  
    console.log(`Загальна сума чисел дорівнює ${total}`);
  }
  
  sumInputNumbers();
  