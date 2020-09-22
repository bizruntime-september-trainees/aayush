const reasoninput=document.querySelector('#input-reason');
const amountinput=document.querySelector('#input-amount');
const cancelbtn=document.querySelector('#btn-cancel');
const confirmbtn=document.querySelector('#btn-confirm');

confirmbtn.addEventListener('click', () =>{
    const enteredreason = reasoninput.value;
    const enteredamount =amountinput.value;

    if (enteredreason.trim().length<= 0 || enteredamount <= 0 || enteredamount.trim().length <=0){
        return;
    }
    console.log(enteredreason,enteredamount);
});