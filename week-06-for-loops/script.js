const speech = `Getting better isnt a hack or a trick
or a one change that you need to make.
Getting better is a campaign.
Its a daily, weekly, an hourly fight.
Against weakness, temptation, and laziness.
Its a campaign of discipline. A campaign of
hard work and dedication.
Waking up early, going to bed late,
and grinding out every second in between.
Every. Single. Day`;

const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

const wordsArray = speechPunctuationRemoved.split(/\s+/);


function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if(word.length < 4) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}

function displayThirdWords(){
  const thirdWordsElement = document.getElementById('third-words');
  for(let i = 2; i <= 300; i += 3){
  const word = wordsArray[i];
    if(word){
    const wordElement = document.createElement('li');
    wordElement.innerText = word;
    thirdWordsElement.appendChild(wordElement);
    }
  }
}

function displayUncommonWords(){
  let commonWords = ['the' , 'of' , 'and' , 'a' , 'to' , 'in' , 'is' , 'you' , 'that' , 'it' , ];

  let uncommonWordsElement = document.getElementById('uncommon-words');
  for(let word of wordsArray){
    if(!commonWords.includes(word.toLowerCase())){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      uncommonWordsElement.appendChild(wordElement);
    }
  }
}

function displayLetterMWords(){
  const letterWordsElement = document.getElementById('letter-words');

  for(let word of wordsArray){
    if(word.startsWith('m')){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      letterWordsElement.appendChild(wordElement);
    }
  }
}

function displayLongestWord() {
  const longestWordElement = document.getElementById('longest-word');
  let longestWord = wordsArray[0];
  for (let i = 1; i < wordsArray.length; i++) {
    if(wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
      }
    }
    const wordElement = document.createElement('li');
    wordElement.innerText = longestWord;
    longestWordElement.appendChild(wordElement);
}

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  displayShortWords();
  displayThirdWords();
  displayUncommonWords();
  displayLetterMWords();
  displayLongestWord();

}
