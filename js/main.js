var $ul1 = $('ul');
var $h3B = $('<h3>').text('Below ground veggies');
var $ulB = $('<ul>');

var $h3A = $('<h3>').text('Above ground veggies');
var $ulA = $('<ul>');

$('body').prepend($h3B);

$($h3B).after($ulB);

$($ulB).after($h3A);

$($h3A).after($ulA);

$('li').each(function () {
    if ($(this).hasClass("below")) {
        $(this).appendTo($ulB);
    } else if ($(this).hasClass("above")) {
        $(this).appendTo($ulA);
    }
});

$($ul1).remove();




