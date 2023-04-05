// инициализаци свайпер
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

    // закрывать ,открывать кнтент 
    // $('.vacancies__box').on('click', function () {
    //     $('.vacancies__list').show();
       
    // });

    $('.vacancies__box').on('click', function () {
        $('.vacancies__list').toggle()
    });

    //  $(document).mouseup(function (e) {
    //      const container = $(".vacancies__list");
    //      if (container.has(e.target).length === 0) {
    //          container.hide();

    //          // header.removeClass();
    //          // modalWindow2.classList.remove('active-modals');
    //      }
    //  });
    // jQuery(document).ready(function ($) {
    //     // $('.vacancies__list').prepend('<div id="menu-icon">Меню</div>');
    //     $(".vacancies__box").on("click", function () {
    //         $(".vacancies__list").slideToggle();
    //         $(this).toggleClass("active");
    //     });
    // });

    // $('.vacancies__list').__doWhenClickOutside(function () {
    //     // вызывается когда произошел клик вне меню
    //     $('.vacancies__box').slideUp();
    //     $(this).removeClass('active');
    // }, false);

    // закрывать кнтент вне облости клика


    //    инициализация Scrollbar
    $(".content").mCustomScrollbar({
        theme: "dark",
        // theme: "minimal-dark",
        // autoHideScrollbar: boolean,
        // autoHideScrollbar: "false",
        // autoHideScrollbar: "true",
        // autoHideScrollbar: "boolean",
        // autoDraggerLength: boolean
        //  autoHideScrollbar: " boolean true",
        // theme: "light-thick",
        // theme: "rounded-dots",
        // theme: "light-3", //+
        // theme: "3d-thick"
        // theme: "rounded-dark",
        // theme: "3d",
        // theme: "dark-thin",//+
    });

    // скрыть блок
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


    //   для работы кнопок минус плюс
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

    //  инициализация  mixitup
    var mixer = mixitup('.slider-content');

});