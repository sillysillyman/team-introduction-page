$(document).ready(function () {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('.profile-name').css('text-decoration', 'none');
    $('#johnProfileImg').css('filter', 'grayscale(0%)');
    $('#john').css('text-decoration', 'underline');
    $('#johnIntro').show();
    $('#carouselExampleIndicators').carousel({
        interval: 5000,
        ride: "carousel"
    });
});

$(`#${name}Img`).click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $(`#${name}Img`).css('filter', 'grayscale(0%)');
    $(`#${name}Intro`).toggle();
});