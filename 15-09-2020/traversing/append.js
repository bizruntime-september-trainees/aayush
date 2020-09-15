$(document).ready(function(){
    $('#appendbtn').click(function(){
        $('#box').append("<h2>aayush naam hai mera</h2>")
    });
    $('#prependbtn').click(function () {
        $('#box').prepend("<h2>i work in brt</h2>")
    });
}
);