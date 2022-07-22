let btnMenu = document.querySelector('.navigation__toggle').addEventListener('click', () => {
        document.querySelector('.navigation__toggle').classList.toggle('active')
        document.querySelector('.header__navigation').classList.toggle('active');
        document.querySelector('body').classList.toggle('active');
    });