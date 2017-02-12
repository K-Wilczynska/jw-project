$(document).ready(function() {

    var menu = $(".menu");
    var menuBtn = $("#mobile-nav");

    $(menuBtn).on("click",function(){
        $(this).toggleClass('open');
        menu.toggle();
    });



});
