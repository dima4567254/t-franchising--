$(function name(params) {
    const swiper = new Swiper('.swiper', {
        // slidesPerView: 1,
        // loop: true,
        // loopedslides: 1,
        // slidesPerView: 2,
        // grid: {
        //     rows: 2,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // $('.vacancies__box').on('click', function () {
    //     $('.vacancies__list').slideToggle();
    // });

    $(".content").mCustomScrollbar({
        // theme: "minimal-dark",
        // autoHideScrollbar: "false",
        autoHideScrollbar: "true",
        // autoHideScrollbar: "boolean",
        //  autoHideScrollbar: " boolean true",
        // theme: "light-thick",
        // theme: "rounded-dots",
        theme: "light-3",//+
        // theme: "3d-thick"
        // theme: "rounded-dark",
        // theme: "3d",
        // theme: "dark-thin",//+
    });


    // $(function name(params) {
    //     document.querySelectorAll('body').forEach(function (element) {
    //         //закрываем окно на кнопке закрыть
    //         element.onclick = closeModal;
    //     });
    //     document.querySelectorAll('.vacancies__list').forEach(function (element) {
    //         //закрываем окно на клике в области серой
    //         element.onclick = closeModal;
    //     });
    //     function closeModal() {
    //         document.querySelectorAll('.vacancies__list').forEach(function (element) {
    //             element.classList.add('hide');
    //         });
    //         document.onkeydown = null;
    //     }
    // });
    // alert("3");


    // alert("4");
    // var $ = require('jquery');
    // require('malihu-custom-scrollbar-plugin')($);
    // Fancybox.fromNodes(
    //     Array.from(document.querySelectorAll('[data-fancybox="gallery"]'))
    // );
    // new Fancybox([{
    //     src: "<p>Lorem ipsum dolor sit amet.</p>",
    //     type: "html",
    // }, ]);


    // Fancybox.bind(document.getElementById("gallery-wrap"), "[data-fancybox]", {
    //     // Your custom options
    // });

    // jQuery(document).ready(function () {
    //     jQuery('.scrollbar-inner').scrollbar();
    // });


    // (function ($) {
    //     $(window).on("load", function () {
    //         $(".content").mCustomScrollbar();
    //     });
    // })

    // $(".content").mCustomScrollbar({
    //     axis: "yx", // vertical and horizontal scrollbar
    //     theme: "dark"

    // });

    // $(".scroller").mCustomScrollbar({
    //     theme: "dark-2"
    // });

    // $(".content").mCustomScrollbar({
    //     theme: "dark"
    // });


    // $('.vacancies__box').on('click', function () {
    //     $('.vacancies__list').slideToggle();
    // });





    // var $header = $(".header")
    // var scroll = 0
    // var active = "active"
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > scroll) {
    //         $header.addClass(active)
    //     } else {
    //         $header.removeClass(active)
    //     }
    // })
    // alert("5");
    $(function () {
        let header = $('.menu');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                header.addClass('header-fixed');
            } else {
                header.removeClass('header-fixed');
            }
        });
    });


    // alert("6");
    $(function () {

        (function quantityProducts() {
            var $quantityArrowMinus = $(".quantity-arrow-minus");
            var $quantityArrowPlus = $(".quantity-arrow-plus");
            var $quantityNum = $(".quantity-num");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();

    });

    // alert("7");
    var mixer = mixitup('.slider-content');

    // document.querySelectorAll('.modal-show').forEach(function (element) {
    //     element.onclick = showModal;
    // });

    // document.querySelectorAll('.modal-close').forEach(function (element) {
    //     //закрываем окно на кнопке закрыть
    //     element.onclick = closeModal;
    // });

    // document.querySelectorAll('.modal-wrap').forEach(function (element) {
    //     //закрываем окно на клике в области серой
    //     element.onclick = closeModal;
    // });

    // function showModal() {
    //     let modalId = this.dataset.modal;
    //     document.querySelector(modalId).classList.remove('hide');
    //     document.onkeydown = function (event) {
    //         //закрываем окно на кнопку Esc
    //         if (event.keyCode == 27) closeModal();
    //     }
    // }

    // function closeModal() {
    //     document.querySelectorAll('.modal-wrap').forEach(function (element) {
    //         element.classList.add('hide');
    //     });
    //     document.onkeydown = null;
    // }

    /*	$(".menu a").on("click", function (event) {
    	    event.preventDefault();
    	    var id = $(this).attr('href'),
    	        top = $(id).offset().top;
    	    $('body,html').animate({
    	        scrollTop: top
    	    }, 1500);
    	});

        /*для закрыть меню*/
    /*
              $('.menu__btn').on('click', function () {
                  $('.menu__items').toggleClass('menu__items--active');
              });
              $('.menu__btn').on('click', function () {
                  $('.menu__btn').toggleClass('active');
              });

            $('.home__slider').slick({
                dots: true,
                arrows: false,
                 responsive: [


                     {
                         breakpoint: 1150,
                         settings: {
                             slidesToShow: 4,
                         }
                     },
                     {
                         breakpoint: 1000,
                         settings: {
                             slidesToShow: 3,
                         }
                     },
                     {
                         breakpoint: 620,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
                         }
                     },
                 ]
            });


           */



});