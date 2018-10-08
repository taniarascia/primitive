// Toggle nav
$('.toggle-nav').click(function (e) {
    if ($('.toggle-nav').hasClass('active')) {
        $('.toggle-nav').removeClass('active');
    } else {
        $('.toggle-nav').addClass('active');
    }
    $('aside nav').toggle();
    e.stopPropagation();
});
$('html').click(function () {
    $('aside nav').hide();
    $('.toggle-nav').removeClass('active');
});