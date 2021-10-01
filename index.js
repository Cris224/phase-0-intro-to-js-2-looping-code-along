const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


const mess = [];
function writeCards(names, event){
    for (let i = 0; i < names.length; i++) {
        mess.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return mess;
}

function countDown(int){
    let i = 10;
    while (i >= 0) {
        console.log (i);
        i--
    }
    return int;
}

