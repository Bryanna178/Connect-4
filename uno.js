
let deck = [];      // cards that can be drawn out
let pile = [];      // played cards
let players = [];   // list of players
let winner = false;

/*
used to prompt user for input but need to run the following command to use

npm install prompt-sync
*/
const prompt = require('prompt-sync')();


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

    getFace(){
        return this.color + ' ' + this.number;
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
    constructor(playerNum, hand, aiPlayer){
        this.playerNum = playerNum;
        this.hand = hand;
        this.aiPlayer = aiPlayer;
    }

    getPlayerNum(){ return this.playerNum; }

    printInfo(){
        console.log(`player number: ${this.playerNum}\nhand: ${this.getHand()}\nai: ${this.aiPlayer}\n`);
    }

    getHand(){
        let handStr = '';
        for(var i = 0; i < this.hand.length;i++){
            handStr += `${i}:` + this.hand[i].getFace() + ' ';
        }
        return handStr;
    }


//     // NEED TO FIX*********************
//     removeCard(index){
//         //remove the card
//         delete this.hand[index];
//         var newArr = [];

//         //copy valid cards
//         for(var i = 0; i < this.hand.length; i++){
//             if(this.hand[i] !== undefined){
//                 newArr[i] = this.hand[i];
//             }
//         }
//         console.log(`new size ${newArr.length}`);

//         //assign new array to hand
//         this.hand = newArr;
//     }

//     // NEED TO FIX******************************
//     makeMove(){
//         printGameStats();
//         console.log(this.getHand());
//         let move = prompt('p: play card | d: draw ');
//         console.log(`selected ${move.toUpperCase()}`);
//         switch(move.toUpperCase()){
//             //play the selected card
//             case 'P':
//                 let index = parseInt(prompt('which card?'),10);;
//                 let cardToPlay = this.hand[index];
//                 this.removeCard(index);
//                 console.log(`playing ${cardToPlay.getFace()}`)
//                 pile.push(cardToPlay);
//                 break;

//             // draw juan card
//             case 'D':
//                 cardDeal(this,1,deck);
//                 break;
//             case 'X':
//                 return;
//         }
//     }
}

function printGameStats(){
    console.log('*******************game stats********************************');
    // print the info of the top card
    pile[pile.length-1].printFace();

    // print the number of cards that the opponents have
    for(var i = 0; i < totalPlayers; i++){
        console.log(`player: ${players[i].getPlayerNum()}\ntotal cards: ${players[i].hand.length}\n`);
    }

    console.log(`total cards left in deck ${deck.length}`);
    console.log('************************************************************');
}





// creates the players array and returns it
function createPlayers(){
    let playerArr = [];
    
    for(var i = 0; i < totalRealPlayers; i++){
        playerArr.push(new Player(i,[],false));
    }
    for(var i = totalRealPlayers; i < totalPlayers; i++){
        playerArr.push(new Player(i,[],true));
    }

    return playerArr;
}

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


/*
gives cardQuantity amount of cards to the designated player
written to get from the bottom of the deck (pop)
*/
function cardDeal(player,cardQuantity,gameDeck){
    for(var i = 0; i < cardQuantity; i++){
        // if the deck is empty get cards from the pile and reshuffle deck
        // if(gameDeck.length === 0){
        //     reshuffleDeck(pile);                // NEED TO MAKE SURE THAT THIS WORKS****
        // }

        player.hand.push(gameDeck.pop());
    }
    console.log(gameDeck.length);
}

/*
add the cards from the pile back into
the main deck and shuffle the cards
*/
// function reshuffleDeck(usedCardPile){
//     for(var i = 0; i < usedCardPile.length; i++){
//         deck.push(usedCardPile[i]);
//     }

//     shuffleDeck(deck);
//     for(var i = 0; i < deck.length; i++){
//         deck[i].printInfo();
//     }
//     console.log('done reshuffling deck from used card pile');
// }

//------------------------------------------ actual game code so far it is just practice
createDeck();
shuffleDeck(deck);

// test to see that the deck is created correctly
// for(var i = 0; i < deck.length; i++){
//     deck[i].printInfo();
// }

let totalRealPlayers = parseInt(prompt('Total number of real players? '),10);
let totalAiPlayers = parseInt(prompt('Total number of AI players? '),10);
let totalPlayers = totalRealPlayers + totalAiPlayers;

// create player array
players = createPlayers();

// give cards to players
for(var i = 0; i < players.length; i++){
    cardDeal(players[i],5,deck);
}

// print info for all the players
for(var i = 0; i < players.length; i++){
    players[i].printInfo();
}

//place a card on the pile
pile.push(deck.pop());

printGameStats();

// NEEED TO CONTINUE****************************8
// // the main loop of the game
// currPlayer = 0;
// while(!winner){
//     // using remainder of curr / total
//     players[currPlayer % totalPlayers].makeMove();
// }



console.log(`total cards in deck ${deck.length}, total real players ${totalRealPlayers}, total AI players ${totalAiPlayers}`);
