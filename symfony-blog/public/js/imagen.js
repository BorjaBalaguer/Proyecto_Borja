$(document).ready(function(){
    $("#imgMain").mouseover(function(){
        $('#imgMain').fadeTo('slow','0.5');
    })
    $("#imgMain").mouseout(function(){
        $('#imgMain').fadeTo('slow','1');
    })
})