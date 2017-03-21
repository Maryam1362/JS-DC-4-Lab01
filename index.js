var prompt = require('prompt');

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
var rankScores = {
  ace: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  king: 12,
  queen: 13
}
/* prompt users to enter their user name*/

prompt.start();

prompt.get(['username1','username2'], function (err, result) {

  var PlayerA = new Player(result.username1);
  var PlayerB = new Player(result.username2);

  console.log('  username: ' + PlayerA.username);
   console.log('  username: ' + PlayerB.username);


/*Player Object*/


function Player( username ){ 
 this.username = username
 }

function Card ( suit, rank ) {
  this.suit = suit
  this.rank = rank
  this.title = rank + ' of ' + suit 
  this.score = rankScores[ rank ] 
}

function Deck () {
 
  this.cards = []
  //this.deal_PlayerA=[]
  //this.deal_PlayerB=[]

  this.createNewDeck = function createNewDeck() {

    var deck = []

    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        deck.push( new Card( suits[i], ranks[j] ) )
      }
    }


    this.cards = deck
  }

  this.dealHand = function( handlength ) {
    // deal a hand of random cards and return it
    // every time this function is called, pull 26 random cards from 
    // this.cards and add those to an array (hand), then return that
    // array
    var handlength = handlength || 26
    var hand =[]

    for(var i = 0; i < handlength; i++){

      var randomIndex = Math.floor( Math.random() * this.cards.length );

      var randomCard = this.cards.splice(randomIndex, 1)[0];
      hand.push( randomCard );

    }
    
    return hand;
  }

}

var mydeck = new Deck();
mydeck.createNewDeck()
PlayerA.hand = mydeck.dealHand(26)
PlayerB.hand = mydeck.cards
console.log("PlayerA cards are:")
console.log(PlayerA.hand)

 console.log("PlayerB cards are:")
  console.log(PlayerB.hand)
// var event = JSON.parse(PlayerA.hand);
// console.log(event);

  function game(){
    var i=0;
   while ((PlayerA.hand.length > 0) && (PlayerB.hand.length > 0) ){
     if(PlayerA.hand.score > PlayerB.hand.score){
        PlayerA.hand.push(PlayerB.hand[i]);
      }
      else if (PlayerA.hand.score[i] < PlayerB.hand.score[i]){
       PlayerB.hand.push(PlayerA.hand[i]);
      }

     i++;
    }
    // console.log(PlayerB.hand);
    // console.log(PlayerA.hand);
   return PlayerB.hand, PlayerA.hand;
  }


game()
console.log("Game over")
console.log(PlayerA.hand);
console.log(PlayerB.hand);

});

// function Deal(){
//   this.UserA=[]
//   this.UserB=[]
//   this.createDeal =function createDeal(){
//     var deal_PlayerA=[]
//     var deal_PlayerB=[]
//     var randomIndex
//     for(var i=0;i<=mydeck.cards.length;i++){

//       randomIndex = Math.floor(Math.random() * mydeck.cards.length);
//       dealPlayerA.push(mydeck.cards[randomIndex]);


//     }
//     this.UserA = deal_PlayerA
//     this.UserB = deal_PlayerB

//   }
// }
// var newdeal = new Deal()
// Deal.createDeal()

//var playerOne = new Player( 'Zakk')
//var playerTwo = new Player( 'Christine')







