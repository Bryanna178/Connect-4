let totalPlayers;
let totalRealPlayers;
let totalAiPlayers;

/*
attributes of a card
if playable = true && inDeck = true -> can be drawn out from deck
else playable = true && indeck = false -> in hand of player (can be played)
else playable = false && inDeck = false -> in pile ready to be taken back into the deck
*/
class Card {
    constructor(color, number) {
        this.color = color;
        this.number = number;
        this.playable = true;
        this.inDeck = true;
    }
    
    printFace(){
        console.log(this.color + ' ' + this.number + '\n');
    }

    printInfo(){
        console.log(this.color + ' ' + this.number);
        console.log('playable: ' + this.playable + ' in deck: ' + this.inDeck)
    }
}

/*
a player will have its hand and also a flag to say if they are real or not
*/
class Player {
    constructor(hand, aiPlayer){
        this.hand = hand;
        this.aiPlayer = aiPlayer;
    }
}


let deck = [];      // cards that can be drawn out
let pile = [];      // played cards
let players = [];   // list of players


/*
LOGIC OF UNO WITHOUT REVERSE AND WILD CARDS YET...
choose number of real players
choose number of ai players
shuffle deck
deal cards
select random player to go first (can later be changed to player with highest card number or something)
while there is no winner...
    current player plays or draw and pass (p or d)

    if pass
        draw (and check amount in deck in order to know if ready to reshuffle deck or not)
        go to next player and repeat entire loop

    else if plays
        played card is the new top card
        check if player still have cards
            if card count = 0 then winner = true
            else continue (nothing happens just continue with loop)

*/


// making total game cards = 50
// 5 colors * 10 cards = 50 total cards
function createDeck(){
    var colorArr = ['RED','BLUE','PURPLE','YELLOW','GREEN'];

    for(var i = 0; i < 5; i++){
        for(var x = 0; x < 10; x++){                // change to x < 1 to see that it works
            var newCard = new Card(colorArr[i],x+1);
            deck.push(newCard);
        }
    }
}

function shuffleDeck(playingDeck){
    for(var i = 0; i < playingDeck.length;i++){
        var rand = 0;
        var rand2 = 0;

        // keep generating a random number till they are distinct
        while(rand2 === rand){
            rand = Math.floor(Math.random() * Math.floor(playingDeck.length));
            rand2 = Math.floor(Math.random() * Math.floor(playingDeck.length-1));
        }

        //get cards that are going to be swaped
        var card1 = playingDeck[rand];
        var card2 = playingDeck[rand2];

        //swap them
        playingDeck[rand] = card2;
        playingDeck[rand2] = card1;
    }
}

function dealDeck(){

}

//------------------------------------------ actual game code so far it is just practice

createDeck();
shuffleDeck(deck);

// test to see that the deck is created correctly
for(var i = 0; i < deck.length; i++){
    deck[i].printInfo();
}
console.log(deck.length);
