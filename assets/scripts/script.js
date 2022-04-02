$(document).ready(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 6,
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            630: {
                items: 3,
            },
            720: {
                items: 3,
            },
            1024: {
                items: 6,
            },
        },
    });
    $(".owl-custom-next").click(function() {
        owl.trigger("next.owl.carousel");
    });
    // Go to the previous item
    $(".owl-custom-prev").click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger("prev.owl.carousel", [300]);
    });
});

(function mainScript() {
    "use strict";

    const offcanvasToggle = document.querySelector('[data-bs-toggle="offcanvas"]');
    const offcanvasToggle2 = document.querySelector('[data-bs-toggle="offcanvas-2"]');
    const offcanvasCollapse = document.querySelector(".offcanvas-collapse");

    offcanvasToggle.addEventListener("click", function() {
        offcanvasCollapse.classList.toggle("open");
    });
    offcanvasToggle2.addEventListener("click", function() {
        offcanvasCollapse.classList.toggle("open");
    });
})();