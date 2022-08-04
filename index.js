// Code your solutions in this file

// let cards = [`Guadalupe`,`Ollie`,`Aki`];

// function writeCards(cards , event) {
//     for (let i = 0; i < cards.length; i++) {
//         console.log(`Thank you, ${cards[i]} for the wonderful ${event} gift!`);
//       return cards;}
// }


// function writeCards(cards, event) {
//     return  cards.map(cards=> `Thank you, ${cards} for the wonderful ${event} gift!`)
//  }
 
//  console.log(writeCards(cards, "birthday"))

// function writeCards(names, event) {
//     let messages = [`Guadalupe`,`Ollie`,`Aki`]
//     for (let i = 0; i < names.length; i++) {
//       messages.push(`Thank you, ${names[i]} for the wonderful ${event} gift!`)
//     }
//     return messages;
// }

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
function countDown(n){
    while (n>0){
        console.log(n);
        n--;
    } 
    console.log(n)
}

// console.log(writeCards(["Guadalupe","Ollie","Aki"], 'wedding'));

// countDown(10);
// let countDown = 0;
// while (countDown <= 10) {
//   console.log(countDown);
//   countDown++;
// }





