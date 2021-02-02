$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(window.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(window.scrollY > 20){
            $('.buttonmenu').addClass("sticky");
        }else{
            $('.buttonmenu').removeClass("sticky");
        }

    });

    //toggle menu navbar
        $('.buttonmenu').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.buttonmenu i').toggleClass("active");
        });


});