let a = "abc";

if (a != undefined) {
    console.log('this is not undefined');
}
else {
    console.log('this is undefined');

}

try {
    console.log('this is try block');
   functionabc();
} catch (error) {
    console.log('this is error');
    console.log(error.message);

}