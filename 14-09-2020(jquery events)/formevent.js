$(document).ready(function(){
 $('#sname').focus(function(){
     $('#sname').css('background-color','red')
     $('#sclass,#scountry').css('background-color','green')
 });
    $('#sname').blur(function () {
        $('#sname,#sclass,#scountry').css('background-color', 'nil')
});
    $('#sname').change(function () {
        $('#scountry').css('background-color', 'blue')
   
           $ ('#sname').submit(function () {
            console.log('form submitted');

});
});
});