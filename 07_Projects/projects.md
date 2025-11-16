#Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution code

## project 1(Color Changer)

```Javascript
const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button)
    button.addEventListener('click',(event)=>{
      switch(event.target.id){
        case 'grey':
        case 'yellow':
        case 'blue':
        case 'white':
        case 'purple':
          body.style.backgroundColor=event.target.id;
          break;
      }

    })
})
```

## project 2(BMI Generator)

```javascript
const form=document.querySelector("form")

//if we take values here we will get empty values while reloading
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    //only while submitting extract values

    if(height==='' || height<0 || isNaN(height)){
      results.innerHTML=`Please give a vaid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
      results.innerHTML=`Please give a vaid weight ${weight}`;
    }
    else{
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      results.innerHTML=`<span>${bmi}</span>`
    }
})
```

## project 3(Digital Clock)
```javascript
const clock=document.getElementById('clock')
//const clock=document.querySelector('#clock')



setInterval(function(){
    let date=new Date()
// console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString()
},1000)
```

## project 4(Guess the number)

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```

## project5(Background Changer)

```javascript
//Generating random colour

const randomColour=()=>{
  const hex='0123456789ABCDEF'
  let colour='#'
  for(let i=0;i<6;i++){
    colour+=hex[Math.floor(Math.random()*16)]
  }
  return colour
};
console.log(randomColour())
let ref;
const startChangingColor=()=>{
  function changeBg(){
    document.body.style.backgroundColor=randomColour()
  }
  if(!ref){
    ref=setInterval(changeBg,500)
  }
  
}

const stopChangingColor=()=>{
  clearInterval(ref)
  //dereferencing
  ref=null
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)
```

## project6(Magic KeyBoard)
```javascript
const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>`
})
```
