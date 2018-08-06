$(function() {


if ( $(document).width() > 992 ) {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true
    });

    var scene2 = document.getElementById('scene2');
    var parallaxInstance = new Parallax(scene2, {
        relativeInput: true
    });

    var scene1 = document.getElementById('scene1');
    var parallaxInstance = new Parallax(scene1, {
        relativeInput: true,

    });
    var scene3 = document.getElementById('scene3');
    var parallaxInstance = new Parallax(scene3, {
        relativeInput: true
    });
    var scene4 = document.getElementById('scene4');
    var parallaxInstance = new Parallax(scene4, {
        relativeInput: true
    });
    var scene5 = document.getElementById('scene5');
    var parallaxInstance = new Parallax(scene5, {
        relativeInput: true
    });
    var scene6 = document.getElementById('scene6');
    var parallaxInstance = new Parallax(scene6, {
        relativeInput: true
    });
    var scene7 = document.getElementById('scene7');
    var parallaxInstance = new Parallax(scene7, {
        relativeInput: true
    });
    var scene7 = document.getElementById('scene8');
    var parallaxInstance = new Parallax(scene8, {
        relativeInput: true
    });
    var scene9 = document.getElementById('scene9');
    var parallaxInstance = new Parallax(scene9, {
        relativeInput: true
    });
    var scene10 = document.getElementById('scene10');
    var parallaxInstance = new Parallax(scene10, {
        relativeInput: true
    });
    var scene11 = document.getElementById('scene11');
    var parallaxInstance = new Parallax(scene11, {
        relativeInput: true
    });
}
    $('.parallax-window').parallax({imageSrc: '../img/main-section-bg.png'});

});
$(document).ready(function () {
    //Menu button on click event
    $('.mobile-nav-button').on('click', function() {
        // Toggles a class on the menu button to transform the burger menu into a cross
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");
        $(this).toggleClass('mobile-button--open');
        // Toggles a class that slides the menu into view on the screen
        $('.mobile-menu').toggleClass('mobile-menu--open');
        return false;
    });
    $('.mobile-menu a').on('click', function() {
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");
        $('.mobile-menu').toggleClass('mobile-menu--open');
        $(".mobile-nav-button").toggleClass('mobile-button--open');
        return false;
    });
    $('.scroll').click(function(evt) {
        evt.preventDefault();
        var arr = $(this).attr('href').split('#');
        if (arr[1]) {
            var section = arr[1];
            $('html, body').animate({
                scrollTop: $("#" + section).offset().top
            }, 1000);
        }

        // Close navigation menu on item click for mobile devices
        if ($('.visible-xs').is(':visible') && $('.navigation').is(':visible')) {
            $('#menuswitcher').click();
        }
    });


});