// changeRandomBgColor

function changeBgColor(){
    const randomColor = '#' + Math. floor(Math.random()*16777215). toString(16);
    document.body.style.backgroundColor = randomColor;
}

// Setting Alert

let countIn = 23;
let countDe = 6;
let clickedButtons = new Set();

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(){
        alert(`Board updated Successfully`);
        
        countIn++;
        document.getElementById('counterIncrease').textContent = countIn;

        countDe--;
        document.getElementById('counterDecrease').textContent = countDe;

        clickedButtons.add(this.id);

        if (clickedButtons.size === 6){
            alert('Congrats!!! You have completed all the current task');
        }

        this.style.backgroundColor = "grey";
        this.disabled = true;

    })
})

const dateContainer = document.getElementById('todaysDate');

const today = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const dayName = days[today.getDay()];
const date = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();

const fullDate = `${dayName}, ${date} ${month} ${year}`;

dateContainer.innerText = fullDate;

// document.addEventListener('DOMContentLoaded', function(){
//     const completedBtn = document.querySelectorAll('.task-btn');
//     const completedTasksContainer = document.getElementById('completed-task');
//     const clearHistoryBtn = document.getElementById('clear-history');

//     completedBtn.forEach(button => {
//         button.addEventListener('click', function(){
//             const taskTitle = this.parentElement.querySelector('h5').innerText;
//             const timeStamp = new Date().toLocaleString;
//             const logEntry = document.createElement('p');
//             logEntry.innerText = `${taskTitle} - Completed at ${timeStamp}`;

//             if(completedTasksContainer.innerHTML.includes('No tasks completed yet.')){
//                 completedTasksContainer.innerHTML = '';
//             }

//             completedTasksContainer.appendChild(logEntry);
//         })
//     })

//     clearHistoryBtn.addEventListener('click', function(){
//         completedTasksContainer.innerHTML = "<p>.</p>"
//     })
// })

document.addEventListener('DOMContentLoaded', function(){
    let btn = document.querySelectorAll('.clickedBtn');
    let texts = document.querySelectorAll('.printText');
    let outputDiv = document.querySelector('.output');
    let clearButton = document.querySelector('.clear-btn');

    btn.forEach((button, index) => {
        button.addEventListener('click', function(){
            let currentTime = new Date().toLocaleTimeString();
            outputDiv.innerHTML += `<p>You have completed the task ${texts[index]. innerText} at :${currentTime}</p>`;
        })
    })

    clearButton.addEventListener('click', function(){
        outputDiv.innerHTML = "";
    })
})