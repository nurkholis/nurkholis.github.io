$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(window.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.buttonmenu').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            $('.buttonmenu').removeClass("sticky");
        }
    })
});