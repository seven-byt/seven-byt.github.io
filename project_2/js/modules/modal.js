function hideModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('show');
}

function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          modalCloseBtn = document.querySelector('[data-close]');
    
    modalTrigger.forEach((item) => {
        item.addEventListener('click', () => showModal(modalSelector, modalTimerId));
    });

    modalCloseBtn.addEventListener('click', () => hideModal(modalSelector));
 
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            hideModal(modalSelector);
        }
    });


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export {hideModal};
export {showModal};