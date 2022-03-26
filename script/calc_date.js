var target = document.querySelector('#military_end_date');
const end_date = new Date('2023-06-05');

function updateMilDate() {
    var today = new Date();
    var periodMilSec = end_date.getTime() - today.getTime();
    var left_time = periodMilSec / (1000*60*60*24);
    target.innerText = left_time.toFixed(6);
}

updateMilDate();
setInterval(updateMilDate,1);
