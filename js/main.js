let randomNumbers = [];

for (let i=1; i <=5; i++) {
    const number = Math.floor(Math.random() * 5 +1 );
    randomNumbers.push(number);
    document.querySelector('#numbers').innerHTML= randomNumbers;
}

setTimeout(maxTime, 1500)
    function maxTime() {
    document.querySelector('#numbers').innerHTML="";
    }

