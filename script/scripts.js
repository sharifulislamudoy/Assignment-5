let countIn = 23;
let countDe = 6;
const button = document.getElementById('myButton');

document.getElementById('myButton').addEventListener('click', function(){
    alert('Board updated Successfully');
    countIn++;
    document.getElementById('counterIncrease').textContent = countIn;

    countDe--;
    document.getElementById('counterDecrease').textContent = countDe;
})

button.addEventListener('click', function(){
    button.style.backgroundColor = 'grey'
})