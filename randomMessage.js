const randomMessage = {
    dice: ['five', 'seven', 'three', 'nine'],
    outrageous: ['you\'re FIRED !', 'you\'ve a SECRET love child!', 'you\'ll have to pay ALIMONY 40,000 bucks.', 'you\'ll go BANKRUPT!!'],
    goodNews: ['you\'re going to get out of JAIL.', 'your BOSS\'s dropped DEAD..you\'re PROMOTED.', 'your MRI shows you DON\'T have a brain tumour after all!', 'you RECEIVED inheritance of 50,000 bucks!']
}; //Object containing arrays of random luck.

function randNumGenerator() {
let randomNumber = Math.floor(Math.random() * 4);
return randomNumber;
} // Function generating a random number between 0 and 3 inclusive.

function wantToRollTheDice() {
    let yourMessage = [];
    for(let type in randomMessage) {
       let num = randNumGenerator();
       switch(type) {
        case 'dice': 
        yourMessage.push(`You've rolled a ${randomMessage[type][num]} on dice..`);
        break
        case 'outrageous':
        yourMessage.push(`The BAD NEWS is ${randomMessage[type][num]}`);
        break   
        case 'goodNews':
        yourMessage.push(`And the GOOD NEWS is ${randomMessage[type][num]}`);   
        break
        default:
        yourMessage.push('BETTER LUCK next time!');      
       }
    }
    console.log(yourMessage.join('\n'));
} // Function generating random messages.

wantToRollTheDice()
