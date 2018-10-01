$( document ).ready(function() {
    $().on('keydown', function(e){
        var key = e.keyCode;
        if (key === 38){
          $('#player').css('bottom',1);
        }
    })
})
