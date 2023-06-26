var target = document.querySelector('#military_days');
var target2 = document.querySelector('#military_percent');
const start_date = new Date('2021-09-06');
const end_date = new Date('2023-06-05');

console.log(target);
console.log(target2);

function updateMilitaryInfo() {
    let today = new Date();
    let periodMilSec = end_date.getTime() - today.getTime();
    let periodWholeMilSec = end_date.getTime() - start_date.getTime();

    let percentage = ((periodMilSec / periodWholeMilSec)*100).toFixed(6);
    let left_time = (periodMilSec / (1000*60*60*24)).toFixed(6);

    target.innerHTML = left_time;
    target2.innerHTML = percentage;
}

updateMilitaryInfo();

setInterval(updateMilitaryInfo, 10);
