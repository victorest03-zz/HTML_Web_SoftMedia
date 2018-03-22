$(function(){
    $(".nav__header__toggle").on("click",function(){
        console.log("gg")
        $(this).parents(".nav").toggleClass("active")
    })

    $('.nav ul li a').on('click', function(e){
        if($(this).attr("href").substr(0,1) == "#"){
            e.preventDefault();
            var target= $($(this).attr("href"));
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
            // $('nav li.active').removeClass('active');
            // $(this).parent().addClass("active")
        }
    });

    $(window).bind('scroll', function () {
        let windowScrolTop = $(window).scrollTop();
        if (windowScrolTop > $('#slider').height()) {
            $('#nav').addClass('fixed');
            $('#main').addClass('nav__fixed');
        } else {
            $('#nav').removeClass('fixed');
            $('#main').removeClass('nav__fixed');
        }

        if (windowScrolTop + 65 <= $("#header").position().top + $("#header").height() 
            && windowScrolTop + 65 >= ($("#header").position().top)){
            $('nav li.active').removeClass('active');
            $('nav li a[href="#header"').parent().addClass('active');
        }else if (windowScrolTop + 65 <= $("#servicios").position().top + $("#servicios").height() 
            && windowScrolTop + 65 >= ($("#servicios").position().top)){
            $('nav li.active').removeClass('active');
            $('nav li a[href="#servicios"').parent().addClass('active');
        }else if (windowScrolTop + 65 <= $("#trabajos").position().top + $("#trabajos").height() 
            && windowScrolTop + 65 >= ($("#trabajos").position().top)){
            $('nav li.active').removeClass('active');
            $('nav li a[href="#trabajos"').parent().addClass('active');
        }else if (windowScrolTop + 65 <= $("#nuestroEquipo").position().top + $("#nuestroEquipo").height() 
            && windowScrolTop + 65 >= ($("#nuestroEquipo").position().top)){
            $('nav li.active').removeClass('active');
            $('nav li a[href="#nuestroEquipo"').parent().addClass('active');
        }else if (windowScrolTop + 65 <= $("#contactanos").position().top + $("#contactanos").height() 
            && windowScrolTop + 65 >= ($("#contactanos").position().top)){
            $('nav li.active').removeClass('active');
            $('nav li a[href="#contactanos"').parent().addClass('active');
        }
    });

    goup = function () {
        if($(window).scrollTop() > 100){
            $('.go-up').addClass('show');
        }else{
            $('.go-up').removeClass('show');
        }
    }
    goup()
    $(window).on('scroll',function () {
        goup()
    })

    $('#go-up-btn').click(function () {
        $('html,body').animate({
            scrollTop : 0
        }, 700)
    })
})