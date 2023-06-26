var clockTag = document.querySelector('#clock');
clockTag.innerHTML = "clock";

function updateClock()
{
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	clockTag.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}

setInterval(updateClock, 1000);
