setTimeout(maxTime, 30000);

let randomNumbers = [];

for (let i=1; i <=5; i++) {
    let number = Math.floor(Math.random() * 100 +1 );
    randomNumbers.push(number);
    document.querySelector('#numbers').innerHTML= randomNumbers.join(" ");
}

function maxTime() {
    document.querySelector('#numbers').innerHTML= "";
    document.querySelector('#message').innerHTML= "Adesso inserisci i tuoi 5 numeri";
}

setTimeout(maxPrompt, 31000);
function maxPrompt(){
    let userNumbers=[];
    
    for (let i=1; i <= 5; i++) {
        let userNumber=parseInt(prompt('inserisci il numero' + " " + i));
        userNumbers.push(userNumber);
        document.querySelector('#message').innerHTML= userNumbers.join(" ");
    }  
    
    let checkNumbers = [];
    
    for (i = 0; i < randomNumbers.length; i++){
    if (randomNumbers[i] == userNumbers[i]){
        checkNumbers.push(randomNumbers[i]);
    }
    
    document.querySelector('#message').innerHTML= "Hai indovinato" + " " + checkNumbers.length + " " + "numeri." 
    + `<br>` + "Numeri generati:" + " " + randomNumbers.join("-") + `<br>` + "I tuoi numeri:" + " " + checkNumbers.join("-");
    } 
}


function generateUniqueRandomNumber(numsBlacklist, min, max){
    let check = false;
    let randomInt;
    while (!check){
    randomInt=Math.floor(Math.random()*((max + 1) - min) + min);
    if (!numsBlacklist.includes(randomInt)){
    check = true;
    return randomInt;
    }
}
}