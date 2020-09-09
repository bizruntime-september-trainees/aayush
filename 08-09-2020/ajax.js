console.log('hey this is ajax');


let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonclickhandler)


function buttonclickhandler() {

    console.log('u have clicked a button');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content-type', 'application/json')

    xhr.onprogress = function () {
        console.log('on progress');
    }
    xhr.onreadystatechange = function () {
        console.log('ready state is ', xhr.readyState)
    }
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responsetext)
        }
        else {
            console.log("some error occured");
        }
        console.log(this.responseText);
    }
    params = `{"name":"test1","salary":"123","age":"23"}`
    xhr.send(params);

    console.log(params);

}

let popbtn = document.getElementById('popbtn');
popbtn.addEventListener('click', pophandler)

function pophandler() {
    console.log('u have clicked a pop button');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

   
    xhr.onload = function () {
        if (this.status == 200) {
            let obj = JSON.parse(this.responsetext);
            console.log(obj)
        }
        else {
            console.log("some error occured");
        }
        console.log(this.responseText);
    }

    xhr.send();

    console.log("done");

}
