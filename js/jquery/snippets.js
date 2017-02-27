//remove class after delay

var link = $('#link');
link.addClass('current');
setTimeout(function() {
	link.removeClass('current');
}, 3000);

//Div full height/width of viewport

// global vars
var winWidth = $(window).width();
var winHeight = $(window).height();

// set initial div height / width
$('div').css({
    'width': winWidth,
'height': winHeight,
});

// make sure div stays full width/height on resize
$(window).resize(function(){
    $('div').css({
    'width': winWidth,
    'height': winHeight,
});
});
