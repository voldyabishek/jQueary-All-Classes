$(document).ready(function () {
    // 1. Show the box
    $('#show').click(function () {
        $('#box').fadeIn(1000);
    });

    // 2.hide the box
    $('#hide').click(function () {
        $('#box').fadeOut(2000);
    });

    //  3.toggle box
    $('#toggle').click(function () {
        $('#box').fadeToggle(1000);
    });

    // 4.animate the box
    $('#animate').click(function () {
        $('#box').animate(
            {
                left: "+=100px"//reverse pantrthuku "-=100px"
            }
            , 1000);
    });

    // 5.fade the box
    $('#fade').click(function () {
        $('#box').fadeTo(1000, 0.3);//1000-->1second,0.3-->opacity visiblity (0.1-1) range
    });

    //6.slide the box
    $('#slide').click(function() {
        $('#box').slideDown();
    });

    


});