const config = {
    loop: true,
    infobar: false,
    keyboard: true,

    clickSlide: false,

    mobile: {
        clickSlide: false,
    },
}

$('[data-fancybox="location"]').fancybox(config)
$('[data-fancybox="main"]').fancybox(config)