$(document).ready(function(){

//efecto menu
    $('header a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': '0'
        }, 2000 + (index * 500));
    });

//efecto header
    if( $(window).width() > 800){
        $('header .header__textos').css({
            'opacity': 0,
            'margintop': 0,
        });

        $('header .header__textos').animate({
            'opacity': 1,
            'marginTop': '-52px',
        }, 1500);
    }

// efecto botones menu
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
    

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 580
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });

});