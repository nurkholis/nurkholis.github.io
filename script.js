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


    //animtext
    var timer = 4000;

var i = 0;
var max = $('#animtext > li').length;
 
	$("#animtext > li").eq(i).addClass('animate').css('left','0');
	$("#animtext > li").eq(i + 1).addClass('animate').css('left','25%');
	$("#animtext > li").eq(i + 2).addClass('animate').css('left','50%');
	$("#animtext > li").eq(i + 3).addClass('animate').css('left','75%');
 

	setInterval(function(){ 

		$("#animtext > li").removeClass('animate');

		$("#animtext > li").eq(i).css('transition-delay','0.25s');
		$("#animtext > li").eq(i + 1).css('transition-delay','0.5s');
		$("#animtext > li").eq(i + 2).css('transition-delay','0.75s');
		$("#animtext > li").eq(i + 3).css('transition-delay','1s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$("#animtext > li").eq(i).css('left','0').addClass('animate').css('transition-delay','1.25s');
		$("#animtext > li").eq(i + 1).css('left','25%').addClass('animate').css('transition-delay','1.5s');
		$("#animtext > li").eq(i + 2).css('left','50%').addClass('animate').css('transition-delay','1.75s');
		$("#animtext > li").eq(i + 3).css('left','75%').addClass('animate').css('transition-delay','2s');
	
	}, timer);
     

});