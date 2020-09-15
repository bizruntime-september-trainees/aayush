//document is selector and ready is method on which to work
$(document).ready(function(){
    $('#list').css("color","red");
    $('#list li').css("border","2px solid red");
    $('.test').css("border","2px solid grey");
    $('*').css("border","1px solid green");
    $('li:first').css("border","3px solid blue");
    $('li:last').css("border","3px solid red");
//greater than and equation also lower than
})
//mouse click event
$(document).ready(function(){
    //on single click
    $('#box').click(function(){
        $('#box').css('background-color','red');
    });
    //on double click
    $('#box').dblclick(function () {
        $('#box').css('background-color', 'blue');
    });
    //on context menu
    $('#box').contextmenu(function () {
        $('#box').css('background-color', 'orange');
    });
    //on mouse entering
    $('#box').mouseenter(function () {
        $('#box').css('background-color', 'tan');
    });
    //on mouse leaving
    $('#box').mouseleave(function () {
        $('#box').css('background-color', 'purple');
    });


}
);
//keyboard event
$(document).ready(function(){
    $('body').keypress(function(){
        $(this).css('background-color','orange')
    });
    //on key up
    $('body').keyup(function () {
        $(this).css('background-color', 'green')
    });
    //on key down 
    $('body').keydown(function () {
        $(this).css('background-color', 'grey')
    })
});


