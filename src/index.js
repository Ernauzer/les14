/* eslint-disable no-undef */
//Первая Часть\\
$(document).ready(() => {
    'use strict';
    //Подсказка\\
    $('.tooltip').mouseenter(function () {
        $('.tooltip').append('<span></span>');

        $(this).children('span').addClass('tooltip-content')
            .text($(this).attr('data-tooltip'));

        $('.tooltip').mousemove(function (event) {
            $(this).children('.tooltip-content')
                // eslint-disable-next-line no-magic-numbers
                .css({left: event.pageX + 10 + 'px', top: event.pageY + 10 + 'px'});
        });

        $('.tooltip').mouseleave(() => {
            $(this).children('.tooltip-content').remove();
        });
    });
    //Аккордион\\
    $('.title').click(function () {
        $(this).parent('.container').toggleClass('active');
    });
});

//Вторая Часть\\
const localH = location.hash;
if (localH !== '') {
    $('.tab_button').removeClass('active_btn');
    $('[data-btn = "' + localH + '"]').addClass('active_btn');
}
$('.tab_button').click(function () {
    location.hash = $(this).attr('data-btn');
    $('.tab_button').removeClass('active_btn');
    $(this).addClass('active_btn');

    $('.tab_content').attr('hidden', true);
    $($(this).data('btn')).removeAttr('hidden');
});
