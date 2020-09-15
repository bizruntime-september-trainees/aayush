$(document).ready(function(){
  var a=  $('#box').html();
    var b = $('#box').text();
    var c = $('#box').attr('class');
  console.log(a);
  console.log(b);
  console.log(c);
});

$(document).ready(function(){
    $('#sform').submit(function(){
    var name= $('#sname').val();
    alert("hello"+name);
    });
});