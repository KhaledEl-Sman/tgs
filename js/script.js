$(document).ready(function () {

    //navbar-toggler
    $('.first-button').on('click', function () {
        if (!$('.animated-icon1').hasClass('open')) {
            if ($(window).scrollTop() <= 100) {
                $("nav").eq(0).css("background-image", "url(media/navbar2.png");
                $("#navbarSupportedContent20").css("background-color", "rgb(241, 241, 241)").css("position", "absolute").css("top", "100px").addClass("shadow");
                $(".nav-item a").css('color', '#1d4aa7');
            }
        } else {
            if ($(window).scrollTop() <= 100) {
                $("#navbarSupportedContent20").css("background-color", "transparent").css("position", "unset").removeClass("shadow");
                if (index_page) {
                    $("nav").eq(0).css("background-color", "transparent").css("background-image", "none");
                    if (!$('.animated-icon1').hasClass('open'))
                        $(".nav-item a").css('color', '#DEDEDE');
                }
            }
        }
        $('.animated-icon1').toggleClass('open');
    });

    //navbar
    function navbar() {
        //up button
        if (index_page)
            if ($(window).scrollTop() >= $("#about").offset().top) {
                $(".up").css("display", "flex");
            } else {
                $(".up").css("display", "none");
            }

        //navbar shape
        if ($(window).scrollTop() >= 100) {
            if ($(window).outerWidth() >= 992) {
                $(".navbar").css('height', '100px');
                $(".navbar-brand img").css('height', '80px');
                $("nav").eq(0).css("background-image", "url(media/navbar2.png");
                $(".nav-item a").css('color', '#1d4aa7');
                $(".nav-item .active").css('color', '#ff8600');
                $("nav").addClass("shadow");
                if (index_page)
                    $("#navbarSupportedContent20").css("background-color", "transparent").css("position", "unset").removeClass("shadow");
            } else {
                $(".navbar").css('height', '100px');
                $(".navbar-brand img").css('height', '80px');
                $("nav").eq(0).css("background-image", "url(media/navbar2.png");
                $(".nav-item a").css('color', '#1d4aa7');
                $(".nav-item .active").css('color', '#ff8600');
                $("nav").addClass("shadow");
                $("#navbarSupportedContent20").css("background-color", "rgb(241, 241, 241)").css("position", "absolute").css("top", "100px");
            }
        } else {
            if ($(window).outerWidth() >= 992) {
                $(".navbar").css('height', '120px');
                $(".navbar-brand img").css('height', '90px');
                if (index_page) {
                    $("nav").eq(0).css("background-color", "transparent").css("background-image", "none");
                    $(".nav-item a").css('color', '#DEDEDE');
                }
                $(".nav-item .active").css('color', '#ff8600');
                $("nav").removeClass("shadow");
                $("#navbarSupportedContent20").css("background-color", "transparent").css("position", "unset");
                if (!index_page) {
                    $("#navbarSupportedContent20").css("background-color", "transparent").css("position", "unset").removeClass("shadow");
                }
            } else {
                $(".navbar").css('height', '100px');
                $(".navbar-brand img").css('height', '80px');
                if (index_page) {
                    if (!$('.animated-icon1').hasClass('open'))
                        $("nav").eq(0).css("background-color", "transparent").css("background-image", "none");
                    $(".nav-item a").css('color', '#1d4aa7');
                }
                $(".nav-item .active").css('color', '#ff8600');
                $("nav").addClass("shadow");
                $("#navbarSupportedContent20").css("background-color", "rgb(241, 241, 241)").css("position", "absolute").css("top", "100px");
                if ($('.animated-icon1').hasClass('open'))
                    $(".nav-item a").css('color', '#1d4aa7');
            }
        }

        //active
        if (index_page) {
            if ($(window).scrollTop() >= $("#home").offset().top && $(window).scrollTop() < $("#about").offset().top - 100) {
                active(0);
            } else if ($(window).scrollTop() >= $("#about").offset().top - 100 && $(window).scrollTop() < $("#services").offset().top - 100) {
                active(1);
            } else if ($(window).scrollTop() >= $("#services").offset().top - 100 && $(window).scrollTop() < $("#products").offset().top - 100) {
                active(2);
            } else if ($(window).scrollTop() >= $("#products").offset().top - 100 && $(window).scrollTop() < $("#customers").offset().top - 100) {
                active(3);
            } else if ($(window).scrollTop() >= $("#customers").offset().top - 100 && $(window).scrollTop() < $("#news").offset().top - 100) {
                active(4);
            } else if ($(window).scrollTop() >= $("#news").offset().top - 100 && $(window).scrollTop() < $("#careers").offset().top - 100) {
                active(5);
            } else if ($(window).scrollTop() >= $("#careers").offset().top - 100 && $(window).scrollTop() < $("#contact").offset().top - 100) {
                active(6);
            } else if ($(window).scrollTop() >= $("#contact").offset().top - 100) {
                active(7);
            }
        }
    }
    navbar();

    //active nav-item
    function active(x) {
        $(".nav-item .nav-link").each(function () {
            $(this).removeClass("active");
        })
        if ($(window).scrollTop() >= 100) {
            $(".nav-item .nav-link").each(function () {
                $(this).css('color', '#1d4aa7');
            })
        } else {
            $(".nav-item .nav-link").each(function () {
                if (!$('.animated-icon1').hasClass('open'))
                    $(this).css('color', '#DEDEDE');
                else
                    $(this).css('color', '#1d4aa7');
            })
        }
        $(".nav-item .nav-link").eq(x).addClass("active").css('color', '#ff8600');
    }

    //scroll code
    $(window).scroll(function () {
        navbar();

        if (index_page) {
            let about_top = $('header').height();
            let wscroll = $(window).scrollTop();
            if (wscroll > 50 && wscroll < about_top - 100) {
                $(".navbar").fadeOut();
            } else {
                $(".navbar").fadeIn();
            }

            if (wscroll > about_top - 100) {
                $(".navbar").addClass("change_bg_nav");

            } else {
                $(".navbar").removeClass("change_bg_nav");
            }
        }
    })

    //navbar resize
    $(window).resize(function () {
        navbar();
    })

    // click nav links
    $(".nav-link").click(function () {
        if (index_page) {
            let hRef = $(this).attr("href");
            $('html, body').animate({ scrollTop: $(hRef).offset().top - 99 });
            $('.collapse').collapse('hide');
            if ($('.animated-icon1').hasClass('open'))
                $('.animated-icon1').toggleClass('open');

        }
    })

    //click up button
    $(".up").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    })

    if (index_page) {
        //header slider
        let header_slider = new Swiper('header .swiper-container', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true
            },
            speed: 1500,
            slidesPerView: 1,
            paginationClickable: true,
            allowTouchMove: false,
            spaceBetween: 0,
            autoplayDisableOnInteraction: true,
            pagination: {
                el: 'header .swiper-pagination',
                clickable: true
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            }
        });
        header_slider.on('transitionEnd', function () {
            if (!$("header .swiper-slide h2").eq(header_slider.activeIndex).hasClass("bounceInLeft"))
                $("header .swiper-slide h2").eq(header_slider.activeIndex).addClass("bounceInLeft").css("opacity", "1");
            if (!$("header .swiper-slide p").eq(header_slider.activeIndex).hasClass("bounceInLeft"))
                $("header .swiper-slide p").eq(header_slider.activeIndex).addClass("bounceInLeft").css("opacity", "1");
        });

        //services slider
        let services_slider = new Swiper('.services-slider .swiper-container', {
            allowTouchMove: false,
            navigation: {
                nextEl: '.services-slider .swiper-button-next .arrow-icon',
                prevEl: '.services-slider .swiper-button-prev .arrow-icon',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true
            },
            loop: true,
            speed: 1000,
            slidesPerView: 3,
            spaceBetween: 0,
            breakpoints: {
                280: {
                    slidesPerView: 1,
                    spaceBetween: 50
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 50
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 50
                }
            }
        });

        //products slider
        let products_slider = new Swiper('.products .swiper-container', {
            allowTouchMove: false,
            navigation: {
                nextEl: '.products .swiper-button-next .arrow-icon',
                prevEl: '.products .swiper-button-prev .arrow-icon',
            },
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true
            },
            speed: 1000,
            breakpoints: {
                280: {
                    slidesPerView: 1,
                    spaceBetween: 50
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 50
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 50
                }
            }
        });

        //customers slider
        let customers_slider = new Swiper('.customers .swiper-container', {
            allowTouchMove: false,
            navigation: {
                nextEl: '.customers .swiper-button-next .arrow-icon',
                prevEl: '.customers .swiper-button-prev .arrow-icon',
            },
            loop: true,
            slidesPerView: 4,
            autoplay: {
                delay: 2000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true
            },
            speed: 1000,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                550: {
                    slidesPerView: 3,
                },
                750: {
                    slidesPerView: 4
                }
            },
        });

        //careers slider
        let careers_slider = new Swiper('.careers .swiper-container', {
            allowTouchMove: false,
            navigation: {
                nextEl: '.careers .swiper-button-next .arrow-icon',
                prevEl: '.careers .swiper-button-prev .arrow-icon',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true
            },
            speed: 1000,
            slidesPerView: 3,
            spaceBetween: 0,
            breakpoints: {
                280: {
                    slidesPerView: 1,
                    spaceBetween: 50
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 50
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 50
                }
            },
        });
    }

    new WOW().init();

    if (learn_more) {
        let slides = [], i = 0, current, temp = [];
        $('.slide').each(function () {
            slides[i] = $(this).children().eq(0).attr("src");
            i++;
        })
        $(".pics-slider div").click(function () {
            if (!$(this).hasClass("active")) {
                current = $(this).children().eq(0).attr("src");
                $(".pics-slider .main-pic").attr("src", current)
            }
            temp[0] = current;
            for (let index = 0; index < slides.length; index++) {
                let test = $(".pics-slider div").children().eq(index).attr("src");
                if (test != current) {
                    temp[temp.length] = test;
                }
            }
            for (let index = 0; index < slides.length; index++) {
                slides[index] = temp[index];
                $(".pics-slider div").children().eq(index).attr("src", slides[index]);
            }
        })
        let j = 0;
        function gameLoop() {
            x = setTimeout(gameLoop, 3000);
            for (let index = 0; index < slides.length; index++) {
                if (index != (slides.length - 1))
                    temp[index + 1] = slides[index];
                else
                    temp[0] = slides[index];
            }
            for (let index = 0; index < slides.length; index++) {
                slides[index] = temp[index];
                $(".pics-slider div").children().eq(index).attr("src", slides[index]);
            }
            $(".pics-slider .main-pic").attr("src", slides[0])
        }
        gameLoop();
    }

    String.prototype.filename = function (extension) {
        var s = this.replace(/\\/g, '/');
        s = s.substring(s.lastIndexOf('/') + 1);
        return extension ? s.replace(/[?#].+$/, '') : s.split('.')[0];
    }

    $(".about .vision .section-2").mouseover(function () {
        $(this).children().eq(0).children().eq(0).attr("src", "media/" + $(this).children().eq(0).children().eq(0).attr("src").filename() + ".png")
    })

    $(".about .vision .section-2").mouseleave(function () {
        $(this).children().eq(0).children().eq(0).attr("src", "media/about/" + $(this).children().eq(0).children().eq(0).attr("src").filename() + ".png")
    })

    //loader
    $(".navbar-brand img").fadeOut(0);
    $(".navbar-brand img").delay(1750).fadeIn(1000);
    $(".spanner").fadeOut(2500, function () {
        $("html, body").css("overflow-y", "auto")
    });

});
