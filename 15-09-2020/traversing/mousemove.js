 
 
$(document).ready(function () {
    $(document).mousemove(function (event) {
        $("span").text(event.pageY);
    }); 
});
