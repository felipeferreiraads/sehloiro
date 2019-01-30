$('.open-menu').on('click', function(e){
    if(!$('.main-menu').hasClass('open')) {
        $('.main-menu').css({
            left: 0
        }).addClass('open')

        $('header').css({
            left: 300
        })

        $('header span').html('Fechar')

        $('.menu-switch').css({
            left: 300
        })
    } else {
        console.log('oi')
        $('.main-menu').css({
            left: -300
        }).removeClass('open')

        $('header').css({
            left: 0
        })

        $('header span').html('Menu')

        $('.menu-switch').css({
            left: 0
        })
    }
})

$('.overlay-menu, .close-menu').on('click', function(e){
    $('.menu-mobile').css('right', -300)
    $('.overlay-menu').fadeOut(300)
})