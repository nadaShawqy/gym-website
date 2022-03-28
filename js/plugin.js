$(function(){
    'use strict';
    // adjust the height of the header
    $('header').height($(window).innerHeight());

    // click on bar icon
    $('.fa-bars').click(function(){
        $('header .nav-responsive').toggleClass('move');
    });

    // add class selected on nav bar li
    $('header nav li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    })

    //testimonials
    function check(){
        if($('.client:first').hasClass('active')){
            $('.fa-chevron-left').fadeOut(50);
        }else{
            $('.fa-chevron-left').fadeIn(50);
        }
        if($('.client:last').hasClass('active')){
            $('.fa-chevron-right').fadeOut(50);
        }else{
            $('.fa-chevron-right').fadeIn(50);
        }
    }
    $('.slider .fa-chevron-left').click(function(){
        $('.active').prev().addClass('active').siblings().removeClass('active');
        check();
    });
    $('.slider .fa-chevron-right').click(function(){
        $('.active').next().addClass('active').siblings().removeClass('active');
        check();
    });

    // image slider on header
    let header = document.querySelector('header');
    let imageArray = ['image15.jpg', 'image13.jpg', 'image14.jpg', 'image2.jpg', 'image8.jpg'];

    setInterval(function(){
        let randomNumber = Math.floor(Math.random() * imageArray.length);
        header.style.backgroundImage = 'url("images/' + imageArray[randomNumber] + '")';
    }, 3000);

    // scroll down to sections
    $('ul li.about').click(function(){
        $('html, body').animate({
            scrollTop: $('.about-us').offset().top - 100
        }, 1000)
    });

    $('ul li.team').click(function(){
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 1500)
    });

    $('ul li.contact').click(function(){
        $('html, body').animate({
            scrollTop: $('.contact-us').offset().top
        }, 2500)
    });

    $('ul li.testim').click(function(){
        $('html, body').animate({
            scrollTop: $('.testimonial').offset().top
        }, 1300)
    });

    $('ul li.blog').click(function(){
        $('html, body').animate({
            scrollTop: $('.choose-us').offset().top
        }, 2500)
    });

    $('ul li.offers').click(function(){
        $('html, body').animate({
            scrollTop: $('.prices').offset().top
        }, 2500)
    });

    $('.contact-button').click(function(){
        $('html, body').animate({
            scrollTop: $('.contact-us').offset().top
        }, 3300)
    });

    // check the errors in the contact form
    var userError = true;
    var emailError = true;
    var msgError = true;

    $('.username').blur(function(){
        if($(this).val().length < 3){
            $(this).css('border', '1px solid #f00')
            $('.user-error').fadeIn(50);
            userError = true;
        }else{
            $(this).css('border', '1px solid #222')
            $('.user-error').fadeOut(50);
            userError = false;
        }
    });
    $('.email').blur(function(){
        if($(this).val() == ''){
            $(this).css('border', '1px solid #f00')
            $('.email-error').fadeIn(50);
            emailError = true;
        }else{
            $(this).css('border', '1px solid #222')
            $('.email-error').fadeOut(50);
            emailError = false;
        }
    });
    $('.message').blur(function(){
        if($(this).val().length < 10){
            $(this).css('border', '1px solid #f00')
            $('.msg-error').fadeIn(50);
            msgError = true;
        }else{
            $(this).css('border', '1px solid #222')
            $('.msg-error').fadeOut(50);
            msgError = false;
        }
    });

    $('.contact-form').submit(function(e){
        if(userError === true || emailError === true || msgError === true){
            e.preventDefault();
            $('.username, .email, .message').focus();
        }
    })

    
});