'Use strict';

window.addEventListener('DOMContentLoaded', () => {

    let header = $('.header'),
	scrollPrev = 0;

    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
    
        if (!menu.classList.contains('header__menu_active')) {
            if ( scrolled > 100 && scrolled > scrollPrev ) {
                header.addClass('header_out');
            } else {
                header.removeClass('header_out');
            }
            scrollPrev = scrolled;
        }
    });


    const hamburger = document.querySelector('.header__hamburger'),
          menu = document.querySelector('.header__menu'),
          link = document.querySelectorAll('.header__menu-item');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
        document.body.classList.toggle('hidden');
    });


    function hide() {
        hamburger.classList.remove('header__hamburger_active');
        menu.classList.remove('header__menu_active');
        document.body.classList.remove('hidden');
    }

    link.forEach(link => {
        link.addEventListener('click', (e) => {
            if (e.target !== link) {
                hide();
            }
        });
    });

    menu.addEventListener('click', e => {

        if (e.target === menu) {
            hide();
        }
    });
});