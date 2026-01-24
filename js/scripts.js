(function ($) {
    $(document).ready(function () {
        // Scroll to Top
        jQuery(".scrolltotop").click(function () {
            jQuery("html").animate({ scrollTop: "0px" }, 400);
            return false;
        });

        jQuery(window).scroll(function () {
            var upto = jQuery(window).scrollTop();
            if (upto > 500) {
                jQuery(".scrolltotop").fadeIn();
            } else {
                jQuery(".scrolltotop").fadeOut();
            }
        });

        // expert slider js

        const experSlider = new Swiper(".our-expert-slider", {
            loop: false,
            pagination: {
                el: ".exper-slider-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 13,
                },
            },
        });

        //   our product slider js start hare

        var swiperff = new Swiper(".product-m-slider", {
            slidesPerView: 2,
            grid: {
                rows: 3,
                fill: "row",
            },
            spaceBetween: 20,
            pagination: {
                el: ".exper-slider-pagination",
                clickable: true,
            },
        });

        // product qty btn js

        $(".increase").click(function () {
            var $qtyInput = $(this).closest(".quantity-container").find(".qty");
            var qty = parseInt($qtyInput.val());
            $qtyInput.val(qty + 1);
        });

        $(".decrease").click(function () {
            var $qtyInput = $(this).closest(".quantity-container").find(".qty");
            var qty = parseInt($qtyInput.val());
            if (qty > 1) {
                $qtyInput.val(qty - 1);
            }
        });
    });
})(jQuery);

// explore product slider

const swiper = new Swiper(".product-slider", {
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".custom-progressbar",
        type: "progressbar",
    },
    on: {
        slideChangeTransitionStart: function () {
            updateProgressBar();
        },
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 21,
        },
    },
});

function updateProgressBar() {
    const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
    const currentSlideIndex = swiper.realIndex;
    const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

    document.querySelector(".custom-progressbar-fill").style.width = progress + "%";
}

// Initialize progress bar
updateProgressBar();
