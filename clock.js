var target = document.querySelector('#clock');
console.log(target);
target.innerHTML = "clock";

function updateClock()
{
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	target.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}

setInterval(updateClock, 1000);
