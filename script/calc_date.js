var target = document.querySelector('#military_end_date');
var target2 = document.querySelector('#military_end_percent');
const start_date = new Date('2021-09-06');
const end_date = new Date('2023-06-05');

function updateMilDate() {
    let today = new Date();
    let periodMilSec = end_date.getTime() - today.getTime();
    let left_time = periodMilSec / (1000*60*60*24);
    target.innerText = left_time.toFixed(6);
}

function updateMilitaryPercent() {
    let today = new Date();
    let periodMilSec = today.getTime() - start_date.getTime();
    let periodWholeMilSec = end_date.getTime() - start_date.getTime();
    let percentage = (periodMilSec / periodWholeMilSec)*100
    target2.innerText = percentage.toFixed(6);
}

updateMilDate();
updateMilitaryPercent();

setInterval(updateMilDate, 1);
setInterval(updateMilitaryPercent, 1);
