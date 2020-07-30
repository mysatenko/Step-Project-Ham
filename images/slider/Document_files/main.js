$(document).ready(function(){
	$(".services__table-content").not(":first").hide();
    $(".services__table .services__table-link").click(function() {
        $(".services__table .services__table-link").removeClass("active").eq($(this).index()).addClass("active");
        $(".services__table-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});



$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 160,
    columnWidth: '.grid-sizer',
gutter: '.gutter-sizer',
itemSelector: '.grid-item',
percentPosition: true
  });




buttons.onclick = function (e) {
	if (e.target.tagName == "BUTTON")
		filter.className = e.target.getAttribute('data-cat');

}


const $slider = $('.slider_bot');
$slider.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    draggable: false,
});
$('.slider_top').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 2,
    speed: 400,
    draggable: false,
});
$('.slider_bot div[data-slick-index="2"]').addClass('slideInFocus');
$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slider_bot_item').removeClass('slideInFocus');
    $(`div[data-slick-index="${nextSlide + 2}"]`).addClass('slideInFocus');
    $(`p[data-pID="${nextSlide + 2}"]`).addClass('pInFocus');
    $('.what_people_comment_wrapper[data-pID]').removeClass('active_what_people_comment_wrapper').removeClass('animatedActiveCommentBox').css({'opacity': '0'});
    $(`.what_people_comment_wrapper[data-pID="${nextSlide}"]`).addClass('animatedActiveCommentBox').animate({
        'opacity': '1',
    }, 400);
    $('.slider_top').slick('slickGoTo', nextSlide + 2);
});
$('.slider_bot img').on('click', function (event) {
    let index = $(event.target).parent().data('slickIndex') - 2;
    if (index === -2) {
        $('.slider_bot').slick('slickPrev');
        setTimeout(function () {
            $('.slider_bot').slick('slickPrev')
        },400)
    }
    $slider.slick('slickGoTo', index);
});