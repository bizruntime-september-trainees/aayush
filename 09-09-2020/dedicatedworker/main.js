const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');
//window global object access
if (window.Worker) {
    //cant change value
    const myWorker = new Worker("worker.js");
    //event handler 
	first.onchange = function() {
	  myWorker.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
	}

	second.onchange = function() {
	  myWorker.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
	}

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}