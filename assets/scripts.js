KlaviyoSubscribe.attachToForms("#mailing", {
    hide_form_on_success: true,
    success_message: "See you in 2024. Check your email for your confirmation.",
});

$(window).on("load", function () {
    let activeSlide = 0;
    const slides = $(".slide");
    const totalSlides = slides.length;
    const fadeTime = 1000;
    const pauseTime = 500;

    function showSlide(index) {
        if (index >= totalSlides) {
            return;
        }

        if (index === totalSlides - 1) {
            $(".x").addClass("x--active");
        }
        slides.eq(index).addClass("slide--active");

        setTimeout(function () {
            if (index < totalSlides - 1) {
                slides.eq(index).addClass("slide--out");
            }

            setTimeout(function () {
                showSlide(index + 1);
            }, fadeTime);
        }, fadeTime + pauseTime);
    }

    slides.removeClass("slide--active").removeClass("slide--out");
    $(".x").removeClass("x--active");
    showSlide(0);
});
