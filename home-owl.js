$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[980,1],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
    });
});

$(document).ready(function() {
    $("#news-sliderr").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,1],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
    });
});
