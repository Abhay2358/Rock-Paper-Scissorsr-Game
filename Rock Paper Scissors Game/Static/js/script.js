// your age in days
 function ageInDays() {
    var birthYear = prompt('whats your birth year');
    var Totalage = (2020 - birthYear) * 365;
    console.log(Totalage);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + Totalage + ' years old ');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
 }

 function reset(){

    document.getElementById('ageInDays').remove();
 }

 // set input as age challenge #2
 function userAge(){
    var inputAge = prompt('whats your age');
    var finalAgeInDays = inputAge * 365;
    console.log(finalAgeInDays);
    var h1 = document.createElement('h1');             // DOM manipulation creating HTML tag in javascript
    var finalAnswer = document.createTextNode('you are ' + finalAgeInDays + ' years old ');
    h1.setAttribute('id', 'userAge');
    h1.appendChild(finalAnswer);
    document.getElementById('flex-box-result-2').appendChild(h1);

 }

 function resetEverything(){

    document.getElementById('userAge').remove();
 }

 // Rock paper scissors challenge #3


function rpsgame(yourChoice){
   console.log(yourChoice);

   var humanChoice, botChoice;
   humanChoice = yourChoice.id;
   
   botChoice = choiceGenerator(randomNumberGenenrator());          //computer's choice
   console.log('Computer CHoice is :', botChoice);
   
   results = decideWinner(humanChoice, botChoice);              //[0, 1] = botwin | [0, 0] = tie | [1, 0] = youwin                                                                               
   console.log(results);  
   
   message = finalMessage(results);                               // {'message':'you won' , 'color':'yellow' }
   console.log(message);
  
   rpsFrontEnd(yourChoice.id, botChoice, message);
   
}

function randomNumberGenenrator(){                                   // to generate random number
   return Math.floor(Math.random() * 3);
}

function choiceGenerator(number){                                    // the random number generated is assigned a string
   return ['rock', 'paper', 'scissors'] [number];
}

function decideWinner(yourChoice, computerChoice){
   var rpsDatabase = {
         'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0,}, 
         'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
         'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0}
      };    


      var yourScore = rpsDatabase[yourChoice][computerChoice];           // we take the reffrence of the rpsdatabase and return the user choice[yourChoice] and the bot choice[computerChoice] | the line is explain with the example if the user choice is paper it will take paper as key of the object and then if the computer choice is scissors the rpsdatabase will go in the paper object and assign the number given to the scissor which is 0 to the variable named yourScore 
      var computerScore = rpsDatabase[computerChoice][yourChoice];       // we do similar process in this line which we did in the upper line but the only diffrence is that prefrence is given to the computerChoice first | as explained earlier the computer choice was scissors so the rpsdatabase will take scissors as the key and user choice (paper) as the object in the key(property) and assign the number given to the paper which is 1 to the variable named computerScore   

      return [yourScore, computerScore];                                  // so our final ans will be [0, 1] which is you lost
   }

function finalMessage([yourScore, computerScore]){
   if (yourScore === 0){
      return {'message':'you lost', 'color': 'red' };
   }else if (yourScore === 0.5) {
      return {'message': 'you tied', 'color':' yellow'};
   }else {
      return { 'message': 'you won', 'color':'green'};
   }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
   var frontEndDatabase = {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src

   }

document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

humanDiv.innerHTML = "<img  src='" + frontEndDatabase[humanImageChoice] + "'height=150, width=150 style=' box-shadow: 0px 20px 50px rgb(31, 31, 173)'>"
botDiv.innerHTML = "<img  src='" + frontEndDatabase[botImageChoice] + "'height=150, width=150 style=' box-shadow: 0px 20px 50px rgb(231, 13, 13)'>"
messageDiv.innerHTML = "<h1  style='color:" + finalMessage['color'] + "; font-size:50px; padding:20px; '>" + finalMessage['message'] + "</h1>"

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);

}

// reset the game

function resetGame(){
   document.getElementById('flex-box-rps-div').remove();

}


// challenge:4 Teen Patti

let teenPattiGame = {
   'you':{'scoreSpan': '#your-Teenpatti-result', 'div': '#yourbox', 'score': 0},
   'dealer':{'scoreSpan': '#Dealer-teen-patti-result', 'div': '#dealer-box', 'score': 0},
};

const YOU = teenPattiGame['you']
const DEALER = teenPattiGame['dealer']
const hitSound = new Audio('Static/sounds/swish.m4a')

document.querySelector('#teen-patti-hit-button').addEventListener('click', teenPattiHit);

function teenPattiHit(){
   let cardImage = document.createElement('img', 'height=10', 'width=10');
   cardImage.src="Static/images/Q.png";
   document.querySelector(YOU["div"]).appendChild(cardImage);
   hitSound.play();
}