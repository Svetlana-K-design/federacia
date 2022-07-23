$(document).ready(function() { 
    $('.header__toggle').click(function(event) {
        $('.header__toggle, .header__navigation, .header').toggleClass('active');
    });
});