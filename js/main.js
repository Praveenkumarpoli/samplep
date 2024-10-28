(function () {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        var stickyTop = document.querySelector('.sticky-top');
        if (window.scrollY > 200) {
            stickyTop.classList.add('shadow-sm');
            stickyTop.style.top = '0px';
        } else {
            stickyTop.classList.remove('shadow-sm');
            stickyTop.style.top = '-100px';
        }
    });

    // Car Categories
    var categoriesCarousel = new OwlCarousel('.categories-carousel', {
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // Testimonial Carousel
    var testimonialCarousel = new OwlCarousel('.testimonial-carousel', {
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        navText: [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    // Facts counter
    var counterUpElements = document.querySelectorAll('[data-toggle="counter-up"]');
    counterUpElements.forEach(function (element) {
        var countUp = new CounterUp(element, {
            delay: 5,
            time: 2000
        });
    });

    // Back to top button
    var backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block'; // Show button
        } else {
            backToTopButton.style.display = 'none'; // Hide button
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

})();
