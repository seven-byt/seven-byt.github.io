'Use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Click hamburger

    const hamburger = document.querySelector('.header__hamburger'),
          menu = document.querySelector('.header__menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active');
        hamburger.classList.toggle('header__hamburger_active');
    });

    // Scroll

    let header = $('.header'),
	scrollPrev = 0;

    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
    
        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('header_out');
        } else {
            header.removeClass('header_out');
        }
        scrollPrev = scrolled;
    });

    // Cards features

    const featuresLink = document.querySelectorAll('.features__item'),
          featuresCard = document.querySelectorAll('.features__card');

    function hideCard() {
        featuresCard.forEach(item => {
            item.classList.remove('features__card_active');
            item.classList.remove('features__card_hide');
        });
    }
    function showCard(i) {
        while (i != 0, i--) {
            featuresCard[i].classList.add('features__card_hide');
        }
    }
            // Клик случайно сделал
    // featuresLink.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         hideCard();
    //         featuresCard[i].classList.add('features__card_active');
    //         showCard(i);

    //     });
    // });

    featuresLink.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            featuresCard[i].classList.add('features__card_active');
            showCard(i);
        });
    });

    featuresLink.forEach(item => {
        item.addEventListener('mouseout', () => {
            hideCard();
        });
    });
    

    // Slider solutions

    const link = document.querySelectorAll('.solutions__item'),
          title = document.querySelector('.solutions__subtitle'),
          description = document.querySelectorAll('.solutions__descr'),
          solutionsBg = document.querySelectorAll('.solutions__bg'),
          next = document.querySelector('.solutions__next'),
          prev = document.querySelector('.solutions__prev');
    let index = 0;

    function showContent() {
        link[index].classList.add('solutions_active');
        solutionsBg[index].classList.add('solutions__bg_active');
        description[index].classList.add('solutions__descr_active');

        const val = link[index].textContent;
        title.innerHTML = `
            ${val}
        `;
    }
    function hideContent() {
        link.forEach(item => item.classList.remove('solutions_active'));
        solutionsBg.forEach(item => item.classList.remove('solutions__bg_active'));
        description.forEach(item => item.classList.remove('solutions__descr_active'));
    }

    hideContent();
    showContent();

    next.addEventListener('click', () => {
        hideContent();

        if (index == link.length - 1) {
            index = 0;
            showContent(index);
        } else {
            index++;
            showContent(index);
        }
    });

    prev.addEventListener('click', () => {
        hideContent();
        if (index == 0) {
            index = link.length - 1;
            showContent(index);
        } else {
            index--;
            showContent(index);
        }
    });

    // Slider touchmove

    const solutionsBlock = document.querySelector('.solutions');

    solutionsBlock.addEventListener('touchstart', handleTouchStart, false);
    solutionsBlock.addEventListener('touchend',  handleTouchEnd, false);
    solutionsBlock.addEventListener('touchmove',  handleTouchMove, false);
    let x1 = null,
        y1 = null,
        x2 = null,
        y2 = null,
        xDiff = null,
        yDiff = null;

    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }

    function handleTouchEnd() {
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                hideContent();
                if (index == 0) {
                    index = link.length - 1;
                    showContent(index);
                } else {
                    index--;
                    showContent(index);
                }
            } else {
                hideContent();

                if (index == link.length - 1) {
                    index = 0;
                    showContent(index);
                } else {
                    index++;
                    showContent(index);
                }
            }
        }
    }

    function handleTouchMove(event) {
        if (!x1 || !y1) {
            return false;
        }
        x2 = event.touches[0].clientX;
        y2 = event.touches[0].clientY;
        xDiff = x2 - x1;
        yDiff = y2 - y1;
    }



    // Tabs solutions

    link.forEach((item, i) => {
        item.addEventListener('click', function() {
            index = i;
            link.forEach(item => item.classList.remove('solutions_active'));
            solutionsBg.forEach(item => item.classList.remove('solutions__bg_active'));
            description.forEach(item => item.classList.remove('solutions__descr_active'));

            this.classList.add('solutions_active');
            solutionsBg[i].classList.add('solutions__bg_active');
            description[i].classList.add('solutions__descr_active');
            const val = link[i].textContent;
            title.innerHTML = `
                ${val}
            `;
        });
    });
});