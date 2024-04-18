$(document).ready(function () {
    $('navbar-toggler').addClass('light-text').removeClass('dark-text');
    $('.navbar-brand').addClass('light-text').removeClass('dark-text');
    $('.nav-link').addClass('light-text').removeClass('dark-text');
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
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var carouselHeight = $('.carousel').outerHeight();
        console.log(carouselHeight);
        if (scroll < carouselHeight) {
            $('navbar-toggler').addClass('light-text').removeClass('dark-text');
            $('.navbar-brand').addClass('light-text').removeClass('dark-text');
            $('.nav-link').addClass('light-text').removeClass('dark-text');
        } else {
            $('navbar-toggler').addClass('dark-text').removeClass('light-text');
            $('.navbar-brand').addClass('dark-text').removeClass('light-text');
            $('.nav-link').addClass('dark-text').removeClass('light-text');
        }
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
$('.wip').click(() => {
    alert('죄송합니다. 아직 준비 중인 페이지입니다.');
})
// $('.nav-item').click(() => {

// })