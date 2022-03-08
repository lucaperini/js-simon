setTimeout(maxTime, 30000);

let randomNumbers = [];

for (let i=1; i <=5; i++) {
    let number = Math.floor(Math.random() * 5 +1 );
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
