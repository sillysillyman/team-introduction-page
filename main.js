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
$('.profile-img').click(function () {
    $('html, body').animate({
        scrollTop: $(this).offset().top - 100
    }, 0, 'linear');
});
$('#johnProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#johnProfileImg').css('filter', 'grayscale(0%)');
    $('.profile-name').css('text-decoration', 'none');
    $('#john').css('text-decoration', 'underline');
    $('#johnIntro').toggle();
});
$('#davidProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#davidProfileImg').css('filter', 'grayscale(0%)');
    $('.profile-name').css('text-decoration', 'none');
    $('#david').css('text-decoration', 'underline');
    $('#davidIntro').toggle();
});
$('#arialProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#arialProfileImg').css('filter', 'grayscale(0%)');
    $('.profile-name').css('text-decoration', 'none');
    $('#arial').css('text-decoration', 'underline');
    $('#arialIntro').toggle();
});
$('#kevinProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#kevinProfileImg').css('filter', 'grayscale(0%)');
    $('.profile-name').css('text-decoration', 'none');
    $('#kevin').css('text-decoration', 'underline');
    $('#kevinIntro').toggle();
});